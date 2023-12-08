import { Helmet } from "react-helmet-async";
function Serie02Binario() {
  return (
    <>
      <Helmet>
        <title>Binario</title>
        <meta
          name="description"
          content="Insegnamento di conversioni in codice binario - Serie 01"
        />
        <link rel="canonical" href="/didattica/binario/serie01" />
      </Helmet>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h1>Esercizi sul calcolo binario - Serie 01</h1>
          <h3>
            Passaggio da decimale a binario
          </h3>
          <p>
            <ul>
              <li>127<sub>10</sub></li>
              <li>88<sub>10</sub></li>
              <li>153<sub>10</sub></li>
              <li>246<sub>10</sub></li>
            </ul>
          </p>
          <h3>
            Passaggio da binario a decimale
          </h3>
          <p>
            <ul>
              <li>10111011<sub>2</sub></li>
              <li>10100100<sub>2</sub></li>
              <li>11001101<sub>2</sub></li>
              <li>01110101<sub>2</sub></li>
            </ul>
          </p>
          <h3>
            Passaggio da binario a esadecimale
          </h3>
          <p>
            <ul>
              <li>1011011001001<sub>2</sub></li>
              <li>100101110100101<sub>2</sub></li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
export default Serie02Binario;
