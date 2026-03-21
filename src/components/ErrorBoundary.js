import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });

    // Puoi anche loggare l'errore a un servizio di error reporting (es. Sentry)
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div 
          className="container mt-5" 
          role="alert" 
          aria-live="assertive"
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
          <h1 style={{ color: '#dc3545', marginBottom: '1rem' }}>
            Qualcosa è andato male
          </h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#666' }}>
            Scusa, si è verificato un errore durante il caricamento di questa pagina.
          </p>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details 
              style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '0.375rem',
                border: '1px solid #dee2e6',
                textAlign: 'left',
                maxWidth: '100%',
                overflow: 'auto',
              }}
            >
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '1rem' }}>
                Dettagli errore (visibile solo in development)
              </summary>
              <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {this.state.error.toString()}
                {'\n\n'}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}

          <button
            onClick={() => window.location.href = '/'}
            className="btn btn-primary mt-3"
            aria-label="Torna alla home page"
          >
            Torna alla Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
