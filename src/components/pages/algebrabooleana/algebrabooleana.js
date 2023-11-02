import { Helmet } from "react-helmet-async";
import '../../../style/style.css';
import es02 from './es_logica_02.jpg'
import es03 from './es_logica_03.jpg'
import es04 from './es_logica_04.jpg'
import es_travestimento from './es_travestimento.jpg'
import CardYoutube from "../../card/Card_binario";
function AlgebraBooleana() {
  return (
    <>
      <Helmet>
        <title>Algebra Booleana</title>
        <meta
          name="description"
          content="Algebra Booleana"
        />
        <link rel="canonical" href="/didattica/algebrabooleana" />
      </Helmet>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h1>Algebra Booleana</h1>
        </div>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <CardYoutube
            youtubeID="_khDTq4fp54"
            cardText="Indirizzamento Classful IPv4"
            youtubeLink="https://www.youtube.com/watch?v=_khDTq4fp54"
          />
          <h1>Tabelle delle verità</h1>
          <p>Con 1 intendiamo Vero (True) e con 0 intendiamo Falso (False).</p>
          <h5>AND</h5>
          <table>
            <tr>
            <th>A</th>
            <th>B</th>
            <th>A AND B</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </table>
          <h5>OR</h5>
          <table>
            <tr>
            <th>A</th>
            <th>B</th>
            <th>A OR B</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </table>
          <h5>NOT</h5>
          <table>
            <tr>
            <th>A</th>
            <th>NOT A</th>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
            </tr>
          </table>
        </div>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h3>Esercizi sulla algebra booleana</h3>
        </div>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <table>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>not A</th>
              <th>(not A) and B</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">

          <table>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>A or B</th>
              <th>not (A or B)</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <img src={es02} alt="Esercizio algebra booleana"></img>
        </div>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <img src={es03} alt="Esercizio algebra booleana"></img>
        </div>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <img src={es04} alt="Esercizio algebra booleana"></img>
        </div>
        <h3>Esercizio</h3>
        Ad una festa in maschera il padrone di casa costruisce un rilevatore automatico di costume per determinare quali persone ammettere.
        La regola è la seguente:
        <ul>
          <li>Le persone devono avere baffi finti e occhiali</li>
          <li>Inoltre devono avere o scarpe da pagliaccio o cappello da pirata</li>
          <li>Oppure devono avere un vestito in maschera completo</li>
          <li>Ma non è ammesso chi ha un cane</li>
        </ul>
        Un custode preme i tasti di un circuito e in risposta ottiene / non ottiene un segnale se la persona è ammessa / non ammessa.
        
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <img src={es_travestimento} alt="Esercizio sul travestimento"></img>
        </div>
        <h3>Esercizio</h3>
        Un impianto chimico è dotato di un sistema di allarme automatico che segnala le situazioni anormali. L'allarme suona quando risulta soddisfatta la seguente condizione:
        <p><i>La temperatura della caldaia è maggiore di 170 gradi e la pressione è superiore a 2 atmosfere, oppure non affluisce combustibile e la temperatura della caldaia è inferiore a 170 gradi.</i></p>
        Costruire una tabella di verità che indichi quando l'allarme è in funzione e ricavare la funzione corrispondente.
      </div>
    </>
  );
}
export default AlgebraBooleana;
