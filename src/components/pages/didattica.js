import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Didattica(){
    return (<>
                <Helmet>
                    <title>Didattica</title>
                    <meta name="description" content="Parte relativa alla didattica"/>
                    <link rel = "canonical" href = "/didattica" />
                </Helmet>
            <div className="container px-4 px-lg-5">

            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <h1>Didattica</h1>
            </div>     

                <p><Link to="/didattica/binario">Calcolo Binario</Link></p>
                <p><Link to="/didattica/algebrabooleana">Algebra Booleana </Link></p>
                <p><Link to="/didattica/indirizziip">Indirizzi IPv4 CLASSLESS e CLASSFUL</Link></p>
                <p><Link to="/didattica/diagrammidiflusso">Diagrammi di Flusso</Link></p>
                <p><Link to="/didattica/edCivica">Educazione civica 23/24</Link></p>
                <p><Link to="/didattica/countdown">CountDown</Link></p>
                <p><Link to="/didattica/estrattoredinumeri">Estrattore di numeri casuali senza ripetizione</Link></p>

            </div>
            </>);
}
export default Didattica;