import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import packageJson from '../../../package.json';


function Home(){
   return( 
       <>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="My Homepage"/>
            <link rel = "canonical" href = "/" />
            <meta name="robots" content="noindex"/>
        </Helmet>
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 align-items-center my-5">
            <h1>{packageJson.name}</h1>
          </div>          
          <div className="row gx-4 gx-lg-5">
              <div className="col-md-4 mb-5">
                  <div className="card h-100">
                      <div className="card-body">
                          <h2 className="card-title">Didattica</h2>
                          <p className="card-text">Sezione dedicata alla raccolta del materiale utile per i ragazzi delle superiori.</p>
                      </div>
                      <div className="card-footer"><Link to="/didattica" className="btn btn-primary btn-sm">Vai alla sezione</Link></div>
                  </div>
              </div>
              <div className="col-md-4 mb-5">
                  <div className="card h-100">
                      <div className="card-body">
                          <h2 className="card-title">I miei progetti su Github</h2>
                          <p className="card-text">Sezione che mostra alcuni progetti a cui ho collaborato che rispettano la filosofia del codice Open Source.</p>
                      </div>
                      <div className="card-footer"><Link to="/myGithub" className="btn btn-primary btn-sm">Vai alla sezione</Link></div>
                  </div>
              </div>
              <div className="col-md-4 mb-5">
                  <div className="card h-100">
                      <div className="card-body">
                          <h2 className="card-title">Good Time Studios App</h2>
                          <p className="card-text">Il mio canale per App Android. Alcune app Android di mia creazione disponibili su Google Play.</p>
                      </div>
                      <div className="card-footer"><Link to="/GTSA" className="btn btn-primary btn-sm">Vai alla sezione</Link></div>
                  </div>
              </div>
          </div>
        </div>
       </>
     ); 
}
export default Home;