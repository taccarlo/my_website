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
                <h1>Didattica</h1>
                <h3>Link a canale Youtube</h3>
                <p><Link to="/edCivica">Educazione civica 23/24</Link></p>


            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..." /></div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">Business Name or Tagline</h1>
                    <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    <a className="btn btn-primary" href="#!">Call to Action!</a>
                </div>
            </div>
            <div className="card text-white bg-secondary my-5 py-4 text-center">
                <div className="card-body"><p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p></div>
            </div>
            </div>
            </>);
}
export default Didattica;