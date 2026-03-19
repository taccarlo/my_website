import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useRef } from 'react';

const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

function TTS() {
    const [text, setText] = useState('Hello, this is a test of the text to speech functionality.');
    const [voices, setVoices] = useState([]);
    const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);
    const synthRef = useRef(ttsSupported ? window.speechSynthesis : null);

    useEffect(() => {
        if (!ttsSupported) return;
        const synth = synthRef.current;

        function loadVoices() {
            const available = synth.getVoices();
            if (available.length > 0) {
                setVoices(available);
            }
        }

        loadVoices();
        synth.onvoiceschanged = loadVoices;

        return () => {
            synth.onvoiceschanged = null;
        };
    }, []);

    function speak() {
        if (!synthRef.current) return;
        const synth = synthRef.current;
        const utterance = new SpeechSynthesisUtterance(text);
        if (voices[selectedVoiceIndex]) {
            utterance.voice = voices[selectedVoiceIndex];
        }
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
        synth.speak(utterance);
    }

    function stop() {
        if (!synthRef.current) return;
        synthRef.current.cancel();
    }

    return (
        <>
            <Helmet>
                <title>TTS PoC</title>
                <meta name="description" content="Text-to-Speech proof of concept" />
                <link rel="canonical" href="/testbench/tts" />
            </Helmet>
            <div className="container px-4 my-4">
                <h2>Text-to-Speech PoC</h2>
                {!ttsSupported && (
                    <div className="alert alert-warning" role="alert">
                        Text-to-Speech non è disponibile su questo dispositivo o browser.
                    </div>
                )}

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        rows={5}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Voice:</label>
                    <select
                        className="form-select"
                        value={selectedVoiceIndex}
                        onChange={(e) => setSelectedVoiceIndex(Number(e.target.value))}
                    >
                        {voices.map((voice, index) => (
                            <option key={index} value={index}>
                                {voice.name} ({voice.lang})
                            </option>
                        ))}
                    </select>
                </div>

                <button className="btn btn-primary me-2" onClick={speak}>Speak</button>
                <button className="btn btn-secondary" onClick={stop}>Stop</button>
            </div>
        </>
    );
}

export default TTS;
