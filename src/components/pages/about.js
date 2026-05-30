import {Link} from 'react-router-dom';
import useMetaTags from '../../hooks/useMetaTags';

function About(){
    const metaTags = useMetaTags({
        title: 'Chi Sono',
        description: 'Scopri di più su Carlo Tacchella. Insegnante di informatica, sviluppatore software e creatore di contenuti didattici per studenti delle superiori.',
        canonical: '/about',
        keywords: 'Carlo Tacchella, insegnante, informatica, sviluppatore, didattica',
        author: 'Carlo Tacchella',
        ogTitle: 'Chi Sono - Carlo Tacchella',
        ogDescription: 'Scopri la storia e i progetti di Carlo Tacchella'
    });

    return(
        <>
            {metaTags}
            <div className="container px-4 px-lg-5" role="main" aria-label="Chi sono">
                <div className="row gx-4 gx-lg-5 my-5">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="mb-4">Chi Sono</h1>

                        <section className="mb-4">
                            <h2>Chi Sono</h2>
                            <p>
                                Mi chiamo <strong>Carlo Tacchella</strong> e sono uno sviluppatore software.
                                Da anni mi occupo di formazione digitale, cercando di rendere accessibili concetti complessi come la
                                programmazione, il calcolo binario, l&apos;algebra booleana e le reti di calcolatori.
                            </p>
                            <p>
                                Sono uno <strong>sviluppatore software</strong> con esperienza nello sviluppo
                                di applicazioni web e mobile. Credo fermamente nel valore del <strong>software open source</strong> e pubblico
                                regolarmente i miei progetti su GitHub per condividerli con la comunità.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h2>Cosa Faccio</h2>
                            <p>
                                Questo sito raccoglie il materiale didattico che utilizzo in classe con i miei studenti:
                                esercizi, video lezioni e strumenti interattivi. Ogni sezione è pensata per facilitare
                                l&apos;apprendimento attraverso esempi pratici e esercitazioni guidate.
                            </p>
                            <p>
                                Parallelamente all&apos;attività didattica, sviluppo applicazioni Android pubblicate su Google Play
                                sotto il marchio <strong>Good Time Studios App</strong>. Le mie app spaziano dai giochi educativi
                                a strumenti creativi come generatori di nomi, aforismi e raccolte di barzellette.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h2>Progetti e Competenze</h2>
                            <ul>
                                <li><strong>Didattica:</strong> Calcolo binario, Algebra Booleana, Reti IPv4, Diagrammi di flusso, Educazione civica digitale</li>
                                <li><strong>Sviluppo Web:</strong> React, JavaScript, HTML/CSS, Firebase Hosting</li>
                                <li><strong>Sviluppo Mobile:</strong> App Android (Kotlin/Java) pubblicate su Google Play</li>
                                <li><strong>Open Source:</strong> Progetti disponibili su <a href="https://github.com/taccarlo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            </ul>
                        </section>

                        <section className="mb-4">
                            <h2>Contatti</h2>
                            <p>
                                Puoi esplorare il materiale didattico nella sezione{" "}
                                <Link to="/didattica">Didattica</Link>, scoprire i miei progetti su{" "}
                                <Link to="/myGithub">GitHub</Link> o visitare il canale{" "}
                                <Link to="/GTSA">Good Time Studios App</Link>.
                            </p>
                            <p>
                                <Link to="/">Torna alla home</Link>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
      );
}
export default About;