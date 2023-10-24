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
              <li>127</li>
              <li>88</li>
              <li>153</li>
              <li>246</li>
            </ul>
          </p>
          <h3>
            Passaggio da binario a decimale
          </h3>
          <p>
            <ul>
              <li>10111011</li>
              <li>10100100</li>
              <li>11001101</li>
              <li>01110101</li>
            </ul>
          </p>
          <h3>
            Passaggio da binario a esadecimale
          </h3>
          <p>
            <ul>
              <li>1011011001001</li>
              <li>100101110100101</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
export default Serie02Binario;
