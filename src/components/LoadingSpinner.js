import React from 'react';

function LoadingSpinner() {
  return (
    <div 
      className="container mt-5" 
      role="status" 
      aria-live="polite"
      aria-label="Caricamento in corso"
      style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div 
        className="spinner-border" 
        role="presentation" 
        style={{ width: '3rem', height: '3rem', color: '#779ecb' }}
      >
        <span className="visually-hidden">Caricamento...</span>
      </div>
      <p style={{ marginTop: '1.5rem', color: '#666', fontSize: '1rem' }}>
        Caricamento della pagina in corso...
      </p>
    </div>
  );
}

export default LoadingSpinner;
