import { Helmet } from "react-helmet-async";
import jsonString from "../../data/edCivica.json";
import TopicList from "../list/topicList/topicList";
function EdCivica() {
  let edCivicaList = jsonString["temi"];

  return (
    <>
      <Helmet>
        <title></title>
        <meta
          name="description"
          content="Parte relativa all'educazione civica"
        />
        <link rel="canonical" href="/didattica/edCivica" />
      </Helmet>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-3">
          <h1>InformEtica 24</h1>
        </div>
        <div className="card text-white bg-secondary my-5 py-4 ">
          <div className="card-body">
            <p className="text-white m-0">
              <h3>Istruzioni</h3>
              <ul>
                <li>
                  Gli studenti dovranno fare un elaborato sui seguenti temi
                  con un documento formato powerpoint.
                </li>
                <li>
                  Nel documento dovranno essere inserite alcune immagini
                </li>
                <li>
                  Le sezioni del documento dovranno essere ben delineate
                </li>
                <li>
                  Lo stile che il documento dovrà seguire è a cura dello
                  studente ma dovrà essere coerente in tutta la sua interezza
                  come tipologie di font e dimensione dei caratteri
                </li>
                <li>
                  Dovranno essere presenti animazioni tra slide e sugli
                  elementi specifici.
                </li>
                <li>
                  L’esposizione totale delle slide dovrà durare circa 5
                  minuti
                </li>
                <li>
                  Dovranno essere presenti collegamenti ipertestuali
                </li>
                <li>
                  Le informazioni citate dovranno essere corredate da
                  opportuna sitografia o bibliografia
                </li>
                <li>
                  Si sta valutando l'ipotesi di autovalutazione del progetto, il voto sarà quindi frutto di una decisione concordata tra studente, docente ed il resto della classe.
                </li>
                <li>Per qualsiasi questione potete inviarmi una email.</li>
              </ul>
            </p>
          </div>
        </div>
      
        {
          edCivicaList.map((item) =>(
              <div className="card my-3" key={item.index}>
                <div className="card-header  bg-secondary text-white">{item["topic"]} </div>
                <div className="card-body card-body-gray-bg">
                  <TopicList list={item["list"]}/>
                </div>
              </div>)
            )
        }

        <div className="row gx-4 gx-lg-5 align-items-center my-3">

          <div className="card text-white bg-secondary my-5 py-4 ">
            <div className="card-body">
              <p className="text-white m-0">
                <h3>Struttura del documento:</h3>
                <ul>
                  <li>Introduzione al tema</li>
                  <li>Presentazione dell’argomento</li>
                  <li>Elaborazione del tema</li>
                  <li>Riflessioni personali</li>
                  <li>Conclusioni</li>
                  <li>
                    Bibliografia e Sitografia (ossia da dove avete preso le
                    fonti){" "}
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
          </div>
    </>
  );
}

export default EdCivica;