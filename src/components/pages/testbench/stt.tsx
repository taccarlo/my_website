import useMetaTags from '../../../hooks/useMetaTags';
import { useState, useRef, useEffect, ChangeEvent } from 'react';

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognition;
    webkitSpeechRecognition?: new () => SpeechRecognition;
  }
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onstart: (() => void) | null;
  onresult: ((_event: SpeechRecognitionEvent) => void) | null;
  onerror: ((_event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

const isSupported: boolean =
  typeof window !== 'undefined' &&
  ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

function getCtor(): (new () => SpeechRecognition) | null {
  if (typeof window === 'undefined') return null;
  return (window.SpeechRecognition || window.webkitSpeechRecognition) ?? null;
}

function buildRecognition(lang: string): SpeechRecognition | null {
  const Ctor = getCtor();
  if (!Ctor) return null;
  const r = new Ctor();
  r.continuous = true;
  r.interimResults = true;
  if (lang) r.lang = lang;
  return r;
}

function STT() {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const listeningRef = useRef(false);
  const langRef = useRef('');
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interim, setInterim] = useState('');
  const [language, setLanguage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const start = () => {
    if (recognitionRef.current) {
      try { recognitionRef.current.abort(); } catch (_) {}
      recognitionRef.current = null;
    }

    setError(null);
    const r = buildRecognition(langRef.current);
    if (!r) {
      setError('API di riconoscimento vocale non disponibile.');
      return;
    }

    r.onstart = () => {
      listeningRef.current = true;
      setListening(true);
    };

    r.onresult = (event: SpeechRecognitionEvent) => {
      let final = '';
      let interimText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interimText += event.results[i][0].transcript;
        }
      }
      if (final) setTranscript((prev: string) => prev + final);
      setInterim(interimText);
    };

    r.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (event.error === 'no-speech' || event.error === 'aborted') return;
      setError(`Errore: ${event.error}${event.message ? ' - ' + event.message : ''}`);
      listeningRef.current = false;
      setListening(false);
    };

    r.onend = () => {
      if (listeningRef.current) {
        start();
      } else {
        setListening(false);
      }
    };

    recognitionRef.current = r;
    try {
      r.start();
    } catch (e) {
      setError('Impossibile avviare il riconoscimento. Assicurati di aver concesso il permesso del microfono.');
      listeningRef.current = false;
      setListening(false);
      recognitionRef.current = null;
    }
  };

  const stop = () => {
    listeningRef.current = false;
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (_) {}
      recognitionRef.current = null;
    }
    setListening(false);
    setInterim('');
  };

  const clear = () => {
    setTranscript('');
    setInterim('');
    setError(null);
  };

  useEffect(() => {
    langRef.current = language;
  }, [language]);

  useEffect(() => {
    return () => {
      listeningRef.current = false;
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (_) {}
        recognitionRef.current = null;
      }
    };
  }, []);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (listeningRef.current) stop();
    setLanguage(e.target.value);
  };

  const metaTags = useMetaTags({
    title: 'Speech-to-Text PoC',
    description:
      'Proof of concept di riconoscimento vocale con Web Speech API - Speech-to-Text nel browser',
    canonical: '/testbench/stt',
  });

  return (
    <>
      {metaTags}
      <div className="container px-4 my-4">
        <h2>Speech-to-Text PoC</h2>

        {!isSupported && (
          <div className="alert alert-warning" role="alert">
            Speech-to-Text non è disponibile su questo dispositivo o browser.
            Usa Chrome o Edge.
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Lingua:</label>
          <select
            className="form-select"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="">Rilevamento automatico</option>
            <option value="it-IT">Italiano</option>
            <option value="en-US">English (US)</option>
            <option value="en-GB">English (UK)</option>
            <option value="fr-FR">Français</option>
            <option value="de-DE">Deutsch</option>
            <option value="es-ES">Español</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label d-flex align-items-center gap-2">
            Trascrizione
            {listening && (
              <span className="badge bg-danger" style={{ animation: 'pulse 1s infinite' }}>
                In ascolto...
              </span>
            )}
          </label>
          <div
            className="form-control"
            style={{
              minHeight: '8rem',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            <span>{transcript}</span>
            {interim && <span style={{ opacity: 0.4 }}>{interim}</span>}
            {!transcript && !interim && (
              <span style={{ opacity: 0.4 }}>
                {listening ? 'Parla ora...' : 'La trascrizione apparirà qui...'}
              </span>
            )}
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <button
            className="btn btn-success"
            onClick={start}
            disabled={listening || !isSupported}
          >
            Avvia
          </button>
          <button
            className="btn btn-danger"
            onClick={stop}
            disabled={!listening}
          >
            Stop
          </button>
          <button
            className="btn btn-secondary"
            onClick={clear}
            disabled={!transcript && !interim}
          >
            Cancella
          </button>
        </div>
      </div>
    </>
  );
}

export default STT;
