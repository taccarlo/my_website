import useMetaTags from "../../../hooks/useMetaTags";
import { Link } from "react-router-dom";

function Testbench() {
  const metaTags = useMetaTags({
    title: 'Testbench',
    description: 'Spazio web per testare funzionalità di sviluppo: Text-to-Speech, Speech-to-Text, Browser Dashboard e PoC sperimentali',
    canonical: '/testbench'
  });
  return (
    <>
      {metaTags}

      <div className="container px-4">
        <div className="row gx-4 my-4">
          <h1>Testbench</h1>
          <p>
            Spazio web usato per testare funzionalità che servono per l'attività
            di sviluppo.
          </p>
        </div>
        <div className="row gx-4 my-4">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Text-to-Speech</h2>
                <p className="card-text">
                  PoC per testare le funzionalità di sintesi vocale del browser
                  tramite la Web Speech API.
                </p>
              </div>
              <div className="card-footer">
                <Link to="/testbench/tts" className="btn btn-primary btn-sm">
                  Apri
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Speech-to-Text</h2>
                <p className="card-text">
                  PoC per testare le funzionalit&agrave; di riconoscimento vocale del browser
                  tramite la Web Speech API.
                </p>
              </div>
              <div className="card-footer">
                <Link to="/testbench/stt" className="btn btn-primary btn-sm">
                  Apri
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Browser Dashboard</h2>
                <p className="card-text">
                  Dashboard real-time per monitorare lo stato del browser:
                  connessione, memoria, uptime, visibilit&agrave; scheda e heartbeat
                  con grafici storici.
                </p>
              </div>
              <div className="card-footer">
                <Link to="/testbench/browserdashboard" className="btn btn-primary btn-sm">
                  Apri
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testbench;
