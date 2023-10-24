import { Helmet } from "react-helmet-async";
import CardBinario from "../../card/Card_binario";
import {Link} from 'react-router-dom';
function Binario() {
  return (
    <>
      <Helmet>
        <title>Binario</title>
        <meta
          name="description"
          content="Insegnamento di conversioni in codice binario"
        />
        <link rel="canonical" href="/didattica/binario" />
      </Helmet>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h1>Codice Binario: Passaggio da una base numerica ad un'altra.</h1>
        </div>

        <div className="row gx-4 gx-lg-5 my-5">
          <CardBinario
            youtubeID="LEM1F_QXcL0"
            cardText="Video che illustra il passaggio da un numero decimale a binario"
            youtubeLink="https://www.youtube.com/watch?v=LEM1F_QXcL0&list=PLDHWK63BVywzR2AUyCjaiPYyQvRZ3SXd8&index=3"
          />
          <CardBinario
            youtubeID="uhM0TFn9BuQ"
            cardText="Video che illustra il passaggio da un numero binario a decimale"
            youtubeLink="https://www.youtube.com/watch?v=uhM0TFn9BuQ&list=PLDHWK63BVywzR2AUyCjaiPYyQvRZ3SXd8&index=1"
          />
          <CardBinario
            youtubeID="Sr0K_fCCiYM"
            cardText="Video che illustra il passaggio da un numero binario a esadecimale"
            youtubeLink="https://www.youtube.com/watch?v=Sr0K_fCCiYM&list=PLDHWK63BVywzR2AUyCjaiPYyQvRZ3SXd8&index=2"
          />
        </div>

        
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <p><Link to="/didattica/binario/serie01">Esercizi sul calcolo binario - Serie 01</Link></p>
          <p><Link to="/didattica/binario/serie02">Esercizi sul calcolo binario - Serie 02</Link></p>
        </div>
      </div>
    </>
  );
}
export default Binario;
