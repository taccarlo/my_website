import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Testbench() {
  return (
    <>
      <Helmet>
        <title>Testbench</title>
        <meta
          name="description"
          content="Spazio web usato per testare funzionalità che servono per l'attività di sviluppo"
        />
        <link rel="canonical" href="/testbench" />
      </Helmet>

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
        </div>
      </div>
    </>
  );
}

export default Testbench;
