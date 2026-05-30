import useMetaTags from '../../hooks/useMetaTags';
import { Link } from 'react-router-dom';

function GTSA(){
    const metaTags = useMetaTags({
        title: 'Good Time Studios App',
        description: 'Canale di app Android Good Time Studios - Barzellette, Viking Fight, Aforismi, Swep! e Canzoniere',
        canonical: '/GTSA'
    });
    return (<>
        {metaTags}
        <div className="container px-4 px-lg-5" role="main" aria-label="Canale Good Time Studios App">
            <div className="row gx-4 gx-lg-5 my-5">
                <div className="col-lg-8 mx-auto">
                    <h1 className="mb-4">Good Time Studios App</h1>

                    <section className="mb-4">
                        <h2>Benvenuto nel canale Good Time Studios</h2>
                        <p>
                            <strong>Good Time Studios App</strong> è il mio canale di applicazioni Android,
                            disponibili su Google Play. Ogni app è sviluppata con attenzione alla qualità,
                            all&apos;esperienza utente e al divertimento.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2>Le nostre app</h2>

                        <div className="card mb-3">
                            <div className="card-body">
                                <h3 className="card-title">Barzellette</h3>
                                <p className="card-text">
                                    Raccolta di barzellette e battute sempre aggiornata. Leggi,
                                    condividi e vota le tue barzellette preferite. Interfaccia
                                    semplice e intuitiva per tutte le età.
                                </p>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-body">
                                <h3 className="card-title">Viking Fight</h3>
                                <p className="card-text">
                                    Gioco d&apos;azione a tema vichingo. Combattimenti epici,
                                    potenziamenti e sfide sempre nuove. Un&apos;esperienza di gioco
                                    coinvolgente per gli amanti del genere action.
                                </p>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-body">
                                <h3 className="card-title">Aforismi</h3>
                                <p className="card-text">
                                    Collezione di aforismi, citazioni e pensieri celebri.
                                    Consulta migliaia di frasi di autori famosi, classificate
                                    per categoria. Ideale per trovare ispirazione ogni giorno.
                                </p>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-body">
                                <h3 className="card-title">Swep! - Il Gioco Alcolico</h3>
                                <p className="card-text">
                                    Gioco da tavolo digitale per feste e serate tra amici.
                                    Sfide, prove e mini-giochi per animare le tue serate.
                                    Gioco per maggiorenni, da consumarsi con moderazione.
                                </p>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-body">
                                <h3 className="card-title">Canzoniere: Testi e Accordi</h3>
                                <p className="card-text">
                                    Raccolta di testi e accordi per chitarra. Impara a suonare
                                    le tue canzoni preferite con accordi aggiornati e testi completi.
                                    Strumento indispensabile per musicisti e appassionati.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-4">
                        <h2>Privacy e supporto</h2>
                        <p>
                            La privacy dei nostri utenti è una priorità. Consulta la{" "}
                            <Link to="/gtsa/privacypolicy">Privacy Policy</Link> per
                            informazioni su come trattiamo i dati.
                        </p>
                        <p>
                            <Link to="/playStoreUrl">Elenco completo</Link> di tutte le app
                            con i link diretti al Google Play Store.
                        </p>
                        <p>
                            <Link to="/">Torna alla home</Link>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </>);
}
export default GTSA;