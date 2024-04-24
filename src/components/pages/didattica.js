import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Didattica() {
  return (
    <>
      <Helmet>
        <title>Didattica</title>
        <meta name="description" content="Parte relativa alla didattica" />
        <link rel="canonical" href="/didattica" />
      </Helmet>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h2>Didattica</h2>

        <ul
          className="list-group"
          style={{ maxHeight: 300, overflow: "auto", padding: 2 }}
        >
          <li className="list-group-item list-group-item-action link-primary">
            <b>
              <Link to="/didattica/binario">Calcolo Binario</Link>
            </b>
          </li>
          <li className="list-group-item list-group-item-action link-primary">
            <b>
              <Link to="/didattica/algebrabooleana">Algebra Booleana</Link>
            </b>
          </li>
          <li className="list-group-item list-group-item-action link-primary">
            <b>
              <Link to="/didattica/indirizziip">
                Indirizzi IPv4 CLASSLESS e CLASSFUL
              </Link>
            </b>
          </li>
          <li className="list-group-item list-group-item-action link-primary">
            <b>
              <Link to="/didattica/diagrammidiflusso">Diagrammi di Flusso</Link>
            </b>
          </li>
          <li className="list-group-item list-group-item-action link-primary">
            <b>
              <Link to="/didattica/edCivica">Educazione civica 23/24</Link>
            </b>
          </li>
          <li className="list-group-item list-group-item-action link-primary">
            <b>
              <Link target="_blank" to="https://scratch.mit.edu/studios/34440887/">Scratch - Link al canale </Link>
            </b>
          </li>
          <li className="list-group-item list-group-item-action link-primary">
            <b>
              <Link target="_blank" to="https://hackr.io/blog/html-projects">HTML/CSS - Link esterno </Link>
            </b>
          </li>
          </ul>
          </div>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h2>Strumenti didattici</h2>
        <ul
          className="list-group"
          style={{ maxHeight: 300, overflow: "auto", padding: 2 }}
        >
          <li className="list-group-item list-group-item-action link-primary">
            <b>
              <Link to="/didattica/countdown">Conto alla rovescia</Link>
            </b>
          </li>
          <li className="list-group-item list-group-item-action link-primary">
            <b>
              <Link to="/didattica/estrattoredinumeri">
                Estrattore di numeri casuali
              </Link>
            </b>
          </li>
        </ul>
      </div>
        </div>
    </>
  );
}
export default Didattica;
