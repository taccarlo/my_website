import {Link} from 'react-router-dom';
import useMetaTags from '../../hooks/useMetaTags';

function Home(){
   useMetaTags({
      title: 'Home',
      description: 'Pagina principale di Carlo Tacchella - Insegnante, sviluppatore e creatore di contenuti didattici',
      canonical: '/',
      keywords: 'didattica, programmazione, educazione civica, binario, algebra booleana'
   });

   return( 
       <>
        <div className="container px-4 px-lg-5" role="main" aria-label="Contenuto principale della home">
          <div className="row gx-4 gx-lg-5 my-5">
              <div className="col-md-4 mb-5">
                  <div className="card h-100">
                      <div className="card-body">
                          <h2 className="card-title">Didattica</h2>
                          <p className="card-text">Sezione dedicata alla raccolta del materiale utile per i ragazzi delle superiori.</p>
                      </div>
                      <div className="card-footer"><Link to="/didattica" className="btn btn-primary btn-sm" aria-label="Vai alla sezione didattica">Vai alla sezione</Link></div>
                  </div>
              </div>
              <div className="col-md-4 mb-5">
                  <div className="card h-100">
                      <div className="card-body">
                          <h2 className="card-title">I miei progetti SW</h2>
                          <p className="card-text">Sezione che mostra i progetti a cui ho collaborato e i corsi che ho tenuto che rispettano la filosofia del codice Open Source.</p>
                      </div>
                      <div className="card-footer">
                        <a target='_blank' className="btn btn-primary btn-sm" rel='noopener noreferrer' href="https://github.com/taccarlo" aria-label="Vai al profilo GitHub di Carlo Tacchella (apre in nuova finestra)">Vai su GitHub</a>
                      </div>

                  </div>
              </div>
              <div className="col-md-4 mb-5">
                  <div className="card h-100">
                      <div className="card-body">
                          <h2 className="card-title">Good Time Studios App</h2>
                          <p className="card-text">Il mio canale per App Android. Alcune app Android di mia creazione disponibili su Google Play.</p>
                      </div>
                      <div className="card-footer">
                        <a target='_blank' className="btn btn-primary btn-sm" rel='noopener noreferrer' href="https://play.google.com/store/search?q=pub%3A%20Good%20Time%20Studios%20Apps&c=apps&hl=it&gl=US" aria-label="Visualizza le app di Good Time Studios su Google Play (apre in nuova finestra)">Vai su Google Play</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4 mb-5">
                  <div className="card h-100">
                      <div className="card-body">
                          <h2 className="card-title">Testbench</h2>
                          <p className="card-text">Spazio web usato per testare funzionalità che servono per l'attività di sviluppo.</p>
                      </div>
                      <div className="card-footer"><Link to="/testbench" className="btn btn-primary btn-sm" aria-label="Vai alla sezione testbench">Vai alla sezione</Link></div>
                  </div>
              </div>
          </div>
        </div>
       </>
     ); 
}
export default Home;