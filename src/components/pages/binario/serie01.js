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
              <li>134<sub>10</sub></li>
              <li>67<sub>10</sub></li>
              <li>98<sub>10</sub></li>
              <li>254<sub>10</sub></li>
            </ul>
          </p>
          <h3>
            Passaggio da binario a decimale
          </h3>
          <p>
            <ul>
              <li>10100011<sub>2</sub></li>
              <li>01100110<sub>2</sub></li>
              <li>10100001<sub>2</sub></li>
              <li>10010100<sub>2</sub></li>
            </ul>
          </p>
          <h3>
            Passaggio da binario a esadecimale
          </h3>
          <p>
            <ul>
              <li>01100110011011<sub>2</sub></li>
              <li>111100110011011<sub>2</sub></li>
            </ul>
          </p>

          <h3>
            Eseguire operazione AND sui seguenti byte
          </h3>
          <p>
            <ul>
              <li>11011110<sub>2</sub></li>
              <li>11001101<sub>2</sub></li>
            </ul>
          </p>
          <h3>
            Eseguire operazione OR sui seguenti byte
          </h3>
          <p>
            <ul>
              <li>11011101<sub>2</sub></li>
              <li>11011111<sub>2</sub></li>
            </ul>
          </p>
          <h3>
            Eseguire operazione XOR sui seguenti byte
          </h3>
          <p>
            <ul>
              <li>10011101<sub>2</sub></li>
              <li>10111101<sub>2</sub></li>
            </ul>
          </p>
          <h3>
            Eseguire operazione NOT sul seguente byte
          </h3>
          <p>
            <ul>
              <li>01100110<sub>2</sub></li>
            </ul>
          </p>

        </div>
      </div>
    </>
  );
}
export default Serie01Binario;
