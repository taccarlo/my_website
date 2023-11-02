import { Helmet } from "react-helmet-async";
function Serie01Binario() {
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
              <li>134</li>
              <li>67</li>
              <li>98</li>
              <li>254</li>
            </ul>
          </p>
          <h3>
            Passaggio da binario a decimale
          </h3>
          <p>
            <ul>
              <li>10100011</li>
              <li>01100110</li>
              <li>10100001</li>
              <li>10010100</li>
            </ul>
          </p>
          <h3>
            Passaggio da binario a esadecimale
          </h3>
          <p>
            <ul>
              <li>01100110011011</li>
              <li>111100110011011</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
export default Serie01Binario;
