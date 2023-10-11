import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import YoutubeEmbed from "../embeddedVideo/YoutubeEmbed";
function Binario() {
  return (
    <>
      <Helmet>
        <title>Binario</title>
        <meta
          name="description"
          content="Insegnamento di conversioni in codice binario"
        />
        <link rel="canonical" href="/didattica/binario" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h1>Codice Binario: Passaggio da una base numerica ad un'altra.</h1>
        </div>

        <div className="container px-4 px-lg-5">
        
        <div className="row gx-4 gx-lg-5 my-5">
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                  <YoutubeEmbed embedId="uhM0TFn9BuQ" />
                <div className="card-body">
                  <p className="card-text">
                    Video che illustra il passaggio da un numero binario a decimale
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    target="_blank"
                    className="btn btn-primary btn-sm"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/watch?v=uhM0TFn9BuQ&list=PLDHWK63BVywzR2AUyCjaiPYyQvRZ3SXd8&index=1"
                  >
                    Guarda su Youtube
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-5">
              <div className="card h-100">
                  <YoutubeEmbed embedId="LEM1F_QXcL0" />
                <div className="card-body">
                  <p className="card-text">
                    Video che illustra il passaggio da un numero decimale a binario
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    target="_blank"
                    className="btn btn-primary btn-sm"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/watch?v=LEM1F_QXcL0&list=PLDHWK63BVywzR2AUyCjaiPYyQvRZ3SXd8&index=3"
                  >
                    Guarda su Youtube
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-5">
              <div className="card h-100">
                  <YoutubeEmbed embedId="Sr0K_fCCiYM" />
                <div className="card-body">
                  <p className="card-text">
                    Video che illustra il passaggio da un numero binario a esadecimale
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    target="_blank"
                    className="btn btn-primary btn-sm"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/watch?v=Sr0K_fCCiYM&list=PLDHWK63BVywzR2AUyCjaiPYyQvRZ3SXd8&index=2"
                  >
                    Guarda su Youtube
                  </a>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Binario;
