import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


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
          <div className="row gx-4 gx-lg-5 my-5">
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
                          <h2 className="card-title">I miei progetti SW</h2>
                          <p className="card-text">Sezione che mostra i progetti a cui ho collaborato e i corsi che ho tenuto che rispettano la filosofia del codice Open Source.</p>
                      </div>
                      {/*<div className="card-footer"><Link to="/myGithub" className="btn btn-primary btn-sm">Vai alla sezione</Link></div>*/}
                      <div className="card-footer">
                        <a target='_blank' className="btn btn-primary btn-sm" rel='noopener noreferrer' href="https://github.com/taccarlo">Vai su GitHub</a>
                      </div>

                  </div>
              </div>
              <div className="col-md-4 mb-5">
                  <div className="card h-100">
                      <div className="card-body">
                          <h2 className="card-title">Good Time Studios App</h2>
                          <p className="card-text">Il mio canale per App Android. Alcune app Android di mia creazione disponibili su Google Play.</p>
                      </div>
                      {/*<div className="card-footer"><Link to="/GTSA" className="btn btn-primary btn-sm">Vai alla sezione</Link></div>*/}
                      <div className="card-footer">
                        <a target='_blank' className="btn btn-primary btn-sm" rel='noopener noreferrer' href="https://play.google.com/store/search?q=pub%3A%20Good%20Time%20Studios%20Apps&c=apps&hl=it&gl=US">Vai su Google Play</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
       </>
     ); 
}
export default Home;