import useMetaTags from '../../hooks/useMetaTags';

function MyGithub() {
  const metaTags = useMetaTags({
    title: 'Progetti GitHub',
    description: 'Progetti software open source di Carlo Tacchella - LudicApp, strumenti didattici e applicazioni web',
    canonical: '/myGithub',
    keywords: 'GitHub, progetti, open source, Carlo Tacchella, software'
  });
  return (
    <>
      {metaTags}
      <div className="container px-4 px-lg-5" role="main" aria-label="Progetti GitHub">
        <div className="row gx-4 gx-lg-5 my-5">
          <div className="col-lg-8 mx-auto">
            <h1 className="mb-4">I miei progetti su GitHub</h1>

            <section className="mb-4">
              <h2>Benvenuto nella mia vetrina open source</h2>
              <p>
                Su <strong>GitHub</strong> pubblico tutti i miei progetti software, dai tool didattici
                alle applicazioni web, con licenza open source. Ogni repository include il codice sorgente,
                documentazione e istruzioni per l&apos;utilizzo.
              </p>
              <p>
                <a className="btn btn-primary" href="https://github.com/taccarlo" target="_blank" rel="noopener noreferrer">
                  Visita il mio profilo GitHub
                </a>
              </p>
            </section>

            <section className="mb-4">
              <h2>Progetti principali</h2>

              <div className="card mb-3">
                <div className="card-body">
                  <h3 className="card-title">LudicApp</h3>
                  <p className="card-text">
                    Applicazione Android pensata per l&apos;intrattenimento educativo.
                    Raccolta di giochi e strumenti interattivi sviluppati per rendere
                    l&apos;apprendimento più coinvolgente. Il codice è aperto a contributi
                    e miglioramenti da parte della comunità.
                  </p>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <h3 className="card-title">Taccarlo Web</h3>
                  <p className="card-text">
                    Il codice sorgente di questo stesso sito web. Realizzato con React,
                    react-router-dom e react-helmet-async. Il progetto dimostra l&apos;uso di
                    componenti lazy-loaded, routing lato client, prerendering statico con
                    react-snap e deployment su Firebase Hosting.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2>Repository didattici</h2>
              <p>
                Oltre ai progetti principali, sul mio profilo GitHub troverai repository
                dedicati alla didattica: esempi di codice, esercizi svolti e materiali
                di supporto per le lezioni di informatica.
              </p>
              <p>
                Ogni repository include un README con le istruzioni necessarie per
                comprendere e utilizzare il codice. I progetti sono aperti a fork,
                pull request e suggerimenti.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyGithub;
