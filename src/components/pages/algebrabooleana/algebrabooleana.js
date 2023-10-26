import { Helmet } from "react-helmet-async";
import '../../../style/style.css';
import es02 from './es_logica_02.jpg'
import es03 from './es_logica_03.jpg'
import es04 from './es_logica_04.jpg'
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

      </div>
    </>
  );
}
export default AlgebraBooleana;
