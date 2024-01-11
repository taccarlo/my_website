import { Helmet } from "react-helmet-async";
import es00 from './flusso00.jpg';
import es01 from './flusso01.jpg';
import es02 from './flusso02.jpg';
import es03 from './flusso03.jpg';
import es04 from './flusso04.jpg';
import es05 from './flusso05.jpg';
import es06 from './flusso06.jpg';
import es07 from './flusso07.jpg';
function DiagrammiDiFlusso() {
  return (
    <>
      <Helmet>
        <title>Diagrammi di Flusso</title>
        <meta
          name="description"
          content="Diagrammi di Flusso"
        />
        <link rel="canonical" href="/didattica/diagrammidiflusso" />
      </Helmet>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h1>Esercizi sui diagrammi di Flusso</h1>
          <ol>
            <li>
              Leggere un numero da tastiera e stampare a video se è positivo o negativo
              
              <div className="center-image">
                <img src={es00} className="img-large" alt="Esercizio sui diagrammi di flusso"></img>
              </div>
            </li>
            <li>
              Leggere da tastiera due numeri e stampare a video la loro somma
              <div className="center-image">
                <img src={es01} className="img-normal" alt="Esercizio sui diagrammi di flusso"></img>
              </div>
            </li>
            <li>
              Leggere da tastiera due numeri e stampare a video il maggiore dei due
              <div className="center-image">
                <img src={es02} className="img-normal" alt="Esercizio sui diagrammi di flusso"></img>
              </div>
            </li>
            <li>
              Leggere tre numeri da tastiera e stampare a video il massimo tra i tre numeri
              <div className="center-image">
                <img src={es03} className="img-large" alt="Esercizio sui diagrammi di flusso"></img>
              </div>
            </li>
            <li>
              Leggere da tastiera il valore dei lati di un triangolo e stampare a video perimetro e area del triangolo
              <div className="center-image">
                <img  className="img-large" src={es04} alt="Esercizio sui diagrammi di flusso"></img>
              </div>
            </li>
            <li>
              Calcolare il risultato dell'equazione di secondo grado leggendo da tastiera i coefficienti dell'equazione ax^2+bx+c=0 e stampando il valore x1 e x2
              <div className="center-image">
                <img  className="img-large" src={es05} alt="Esercizio sui diagrammi di flusso"></img>
              </div>
            </li>
          </ol>
        </div>

      </div>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h1>Esercizi su Flogorithm</h1>
         <ol>    
          <li>
            Leggere un numero intero e dire se è pari o dispari
            <div className="center-image">
              <img src={es06} className="img-normal" alt="Esercizio sui diagrammi di flusso"></img>
            </div>
            <div className="center-image">
              <img className="img-large" src={es07} alt="Esercizio sui diagrammi di flusso"></img>
            </div>
          </li>
         </ol>
        </div>

      </div>
    </>
  );
}
export default DiagrammiDiFlusso;
