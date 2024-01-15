import { Helmet } from "react-helmet-async";
import jsonString from "../../../data/edCivica.json";
import TopicList from "../../list/topicList/topicList";
import civica2 from "./civica2.png";
import civica1 from "./civica1.png";

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
        <div className="row  text-center my-5">
          <h1 className="ShortBabyTitle">InformEtica 24</h1>
        </div>

        <div className="row">
          <div className="col-md-4 text-center  my-3">
            <img src={civica2} style={{ maxWidth: 400 }} alt="Educazione Civica"></img>
          </div>
          <div className="col-md-8 ">
            <p>
              Benvenuti a <i>InformEtica 24</i>, il concorso di educazione
              civica che mette alla prova la creatività e l'impegno degli
              studenti nel promuovere la consapevolezza civica attraverso
              elaborati scritti e video coinvolgenti.
            </p>
            <p>
              Ogni studente avrà l'opportunità di esprimere le proprie idee e
              riflessioni su temi cruciali per la nostra società attraverso un
              elaborato scritto. Una volta completati gli elaborati, ogni classe
              avrà il compito di selezionare il proprio vincitore, basandosi su
              criteri come originalità, coerenza e impatto delle idee
              presentate.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 ">
            <p>
              I vincitori di ogni classe avranno poi l'occasione di trasformare
              le proprie idee in un breve video di 5 minuti, utilizzando la
              creatività e le competenze digitali per comunicare in modo
              efficace il messaggio di educazione civica. Questi video saranno
              successivamente condivisi con il pubblico durante l'evento finale
              di <i>InformEtica 24</i>.
            </p>
            <p>
              Ma qui non finisce: il pubblico avrà il potere di votare il video
              più bello, quello che meglio riesce a trasmettere il messaggio di
              educazione civica in modo coinvolgente e significativo. Il video
              con il maggior numero di voti vincerà il concorso, e sarà quindi
              il più bello. Oltre 200 partecipanti!
            </p>
            <p>In bocca al lupo!</p>
          </div>
          <div className="col-md-4 text-center  my-3">
            <img src={civica1} style={{ maxWidth: 400 }} alt="Educazione Civica"></img>
          </div>
        </div>

        {edCivicaList.map((item) => (
          <div className="card my-3" key={item.index}>
            <div className="card-header  bg-blue text-white">
              {item["topic"]}{" "}
            </div>
            <div className="card-body card-body-gray-bg">
              <TopicList list={item["list"]} />
            </div>
          </div>
        ))}

        <div className="row gx-4 gx-lg-5 align-items-center my-3">
          <div className="card text-white bg-blue my-5 py-4 ">
            <div className="card-body">
              <p className="text-white m-0">
                <h3>Struttura del documento:</h3>
                <ul>
                  <li>Introduzione al tema</li>
                  <li>Elaborazione del tema</li>
                  <li>Riflessioni personali</li>
                  <li>Conclusioni</li>
                  <li>
                    Bibliografia e Sitografia (ossia da dove avete preso le
                    fonti){" "}
                  </li>
                </ul>
                <h3>Informazioni</h3>
                <ul>
                  <li>Durata dell'esposizione: 5 minuti.</li>
                  <li>Consegna del pptx tramite email al docente.</li>
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
