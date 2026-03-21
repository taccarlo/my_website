import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

/**
 * Componente Breadcrumbs per la navigazione
 * Mostra il percorso della pagina corrente con link cliccabili e icone SVG
 */

// Icone SVG per le diverse sezioni
const icons = {
  home: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="breadcrumb-icon">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ),
  didattica: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="breadcrumb-icon">
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6.36 11-6.36L12 3z" />
    </svg>
  ),
  binario: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="breadcrumb-icon">
      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="breadcrumb-icon">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="breadcrumb-icon">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  testbench: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="breadcrumb-icon">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="breadcrumb-icon">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
    </svg>
  ),
};

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null; // Non mostra breadcrumb sulla home
  }

  // Mappa di label amichevoli per le rotte
  const breadcrumbLabels = {
    didattica: 'Didattica',
    binario: 'Calcolo Binario',
    serie01: 'Series 01',
    serie02: 'Series 02',
    algebrabooleana: 'Algebra Booleana',
    indirizziip: 'Indirizzi IPv4',
    diagrammidiflusso: 'Diagrammi di Flusso',
    edCivica: 'Educazione Civica',
    estrattoredinumeri: 'Estrattore di Numeri',
    countdown: 'Conto alla Rovescia',
    testbench: 'Testbench',
    tts: 'Text to Speech',
    about: 'Chi Sono',
    myGithub: 'I miei Progetti',
    GTSA: 'Good Time Studios',
  };

  // Mappa icone per sezioni
  const getIcon = (name) => {
    if (name === 'didattica') return icons.didattica;
    if (name === 'binario' || name === 'serie01' || name === 'serie02') return icons.binario;
    if (name === 'about') return icons.about;
    if (name === 'myGithub') return icons.github;
    if (name === 'testbench' || name === 'tts') return icons.testbench;
    return icons.default;
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="breadcrumbs-container-v3"
      role="navigation"
    >
      <ol className="breadcrumbs-v3">
        <li className="breadcrumb-item-v3">
          <Link to="/" className="breadcrumb-link-v3 breadcrumb-home" aria-label="Vai alla home">
            {icons.home}
            <span>Home</span>
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = breadcrumbLabels[name] || name.charAt(0).toUpperCase() + name.slice(1);
          const icon = getIcon(name);
          const gradientIndex = index % 5;

          return (
            <li key={routeTo} className="breadcrumb-item-v3">
              {isLast ? (
                <span
                  className={`breadcrumb-current-v3 gradient-${gradientIndex}`}
                  aria-current="page"
                >
                  {icon}
                  <span>{label}</span>
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className={`breadcrumb-link-v3 gradient-${gradientIndex}`}
                  aria-label={`Vai a ${label}`}
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
