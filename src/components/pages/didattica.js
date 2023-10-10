import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Didattica(){
    return (<>
                <Helmet>
                    <title>Didattica</title>
                    <meta name="description" content="Parte relativa alla didattica"/>
                    <link rel = "canonical" href = "/didattica" />
                    <meta name="robots" content="noindex"/>
                </Helmet>
            <div className="container px-4 px-lg-5">

            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <h1>Didattica</h1>
            </div>     

               {/* <h3>Link a canale Youtube</h3> */}
                <p><Link to="/edCivica">Educazione civica 23/24</Link></p>

            </div>
            </>);
}
export default Didattica;