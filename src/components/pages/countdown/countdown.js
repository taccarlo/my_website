import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import useMetaTags from "../../../hooks/useMetaTags";
import './countdown.css';

export default function CountDown() {
  useMetaTags({
    title: 'Conto alla Rovescia',
    description: 'Timer/Countdown online con preset e controlli',
    canonical: '/didattica/countdown'
  });

  const [date, setDate] = useState(Date.now() + 60000 * 30);
  const [versionNum, setVersionNum] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [inputValue, setInputValue] = useState(30);
  const [savedPresets, setSavedPresets] = useState(() => {
    const saved = localStorage.getItem('countdownPresets');
    return saved ? JSON.parse(saved) : [5, 10, 15, 30, 45, 60];
  });

  useEffect(() => {
    localStorage.setItem('countdownPresets', JSON.stringify(savedPresets));
  }, [savedPresets]);

  // Riproduci suono quando finisce
  const playSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Terminato</span>;
    }
    return (
      <span>
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    );
  };

  const handleCountdownComplete = () => {
    setIsActive(false);
    playSound();
    // Notifica browser
    if (Notification.permission === 'granted') {
      new Notification('Conto alla rovescia terminato!', {
        icon: '⏱️'
      });
    }
  };

  const setTime = (minutes) => {
    setDate(Date.now() + minutes * 60000);
    setInputValue(minutes);
    setIsActive(true);
    setVersionNum(versionNum + 1);
  };

  const togglePause = () => {
    if (!isActive) {
      // Resume - aggiungi il tempo rimanente
      setIsActive(true);
      setVersionNum(versionNum + 1);
    } else {
      // Pause
      setIsActive(false);
    }
  };

  const reset = () => {
    setDate(Date.now() + inputValue * 60000);
    setIsActive(true);
    setVersionNum(versionNum + 1);
  };

  const handleCustomInput = (value) => {
    const num = parseInt(value);
    setInputValue(value);
    if (!isNaN(num) && num > 0) {
      setTime(num);
    }
  };

  const addPreset = () => {
    const newPreset = inputValue;
    if (newPreset > 0 && !savedPresets.includes(newPreset)) {
      setSavedPresets([...savedPresets, newPreset].sort((a, b) => a - b));
    }
  };

  return (
    <div className="container px-4 px-lg-5" role="main" aria-label="Conto alla rovescia">
      <div className="countdown-wrapper">
        {/* Display principale */}
        <div className="countdown-display card h-100">
          <div className="card-body text-center">
            <h1 className="countdown-timer" aria-live="polite" aria-label="Tempo rimanente">
              <Countdown 
                date={date}
                key={versionNum}
                onComplete={handleCountdownComplete}
                autoStart={isActive}
                intervalDelay={0}
                precision={3}
                renderer={renderer}
              />
            </h1>
            <p className="countdown-status mt-3">
              {isActive ? 'In corso...' : 'Messo in pausa'}
            </p>
          </div>
        </div>

        {/* Controlli */}
        <div className="countdown-controls card">
          <div className="card-body">
            <h3 className="card-title mb-4">Controlli</h3>
            
            {/* Input custom */}
            <div className="control-group mb-4">
              <label className="control-label">Minuti personalizzati</label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control custom-input"
                  value={inputValue}
                  onChange={(e) => handleCustomInput(e.target.value)}
                  placeholder="Inserisci minuti"
                  min="1"
                  aria-label="Input minuti personalizzati"
                />
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => setTime(inputValue)}
                  aria-label="Imposta tempo personalizzato"
                >
                  Imposta
                </button>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={addPreset}
                  aria-label="Salva come preset"
                  title="Aggiungi ai preset"
                >
                  +
                </button>
              </div>
            </div>

            {/* Preset buttons */}
            <div className="control-group mb-4">
              <label className="control-label">Preset rapidi</label>
              <div className="preset-buttons">
                {savedPresets.map((preset) => (
                  <button
                    key={preset}
                    className={`btn btn-preset ${inputValue === preset ? 'active' : ''}`}
                    onClick={() => setTime(preset)}
                    aria-label={`Imposta timer ${preset} minuti`}
                  >
                    {preset}m
                  </button>
                ))}
              </div>
            </div>

            {/* Bottoni di controllo */}
            <div className="control-group">
              <button
                className="btn btn-lg btn-control btn-play-pause"
                onClick={togglePause}
                aria-label={isActive ? 'Metti in pausa' : 'Riprendi'}
              >
                {isActive ? 'Pausa' : 'Riprendi'}
              </button>
              <button
                className="btn btn-lg btn-control btn-reset"
                onClick={reset}
                aria-label="Ripristina timer"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
