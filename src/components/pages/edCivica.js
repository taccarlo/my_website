import { Helmet } from "react-helmet-async";
function EdCivica() {
  return (
    <>
      <Helmet>
        <title>Educazione Civica</title>
        <meta
          name="description"
          content="Parte relativa all'educazione civica"
        />
        <link rel="canonical" href="/edCivica" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h1>Educazione civica 22/23</h1>

          <div className="card text-white bg-secondary my-5 py-4 ">
            <div className="card-body">
              <p className="text-white m-0">
                <h3>Istruzioni</h3>
                <ul>
                  <li>
                    Gli studenti dovranno fare un elaborato sui seguenti temi
                    con un documento formato word.
                  </li>
                  <li>
                    Gli elaborati andranno consegnati sul registro elettronico
                    entro la fine delle vacanze di natale ( Formato pdf).
                  </li>
                  <li>
                    Per qualsiasi questione mi trovate potete inviarmi una
                    email.
                  </li>
                  <li>
                    Nel documento dovranno essere inserite alcune immagini
                  </li>
                  <li>
                    I capitoli del documento dovranno essere ben delineati
                  </li>
                  <li>
                    Lo stile che il documento dovrà seguire è a cura dello
                    studente ma dovrà essere coerente in tutta la sua interezza
                    come tipologie di font e dimensioni caratteri (si usi come
                    esempio questo stesso documento)
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <p>
            <h3>Temi sulla riduzione delle disuguaglianze: </h3>
            <ul>
              <li>Razzismo ieri e oggi </li>
              <li>la black face negli stati uniti </li>
              <li>White washing </li>
              <li>
                Barriere architettoniche e mentali che la società pone nei
                confronti della disabilità fisica{" "}
              </li>
              <li>Diritti costituzionali</li>
              <li>Diritti lgbt</li>
              <li>
                Morti nel Mar Mediterraneo a causa del fenomeno migratorio
              </li>
              <li>Inclusività e utilizzo della schwa</li>
              <li>Situazione carceri in italia e nel mondo</li>
              <li>Whitewashing </li>
            </ul>
            <h3>Temi su salute e benessere mentale: </h3>
            <ul>
              <li>
                Abuso di sostanze Catfishing e amore sui social (si può citare
                anche il caso Roberto Zaccaria)
              </li>
              <li> Bullismo e cyberbullismo</li>
              <li> I tipi di bullismo: verbale fisico e sociale </li>
              <li>Smart working, pro e contro</li>
              <li> Ergonomia, computer e salute </li>
              <li> Ansia in contesto scolastico</li>
              <li> Differenza tra tristezza e depressione </li>
              <li>Educazione alla salute: il fumo </li>
              <li>Accettazione del proprio corpo: Anoressia e obesità </li>
              <li>Il body shaming </li>
              <li> Educazione alla salute: l’abuso di alcool</li>
            </ul>
            <h3>Temi su parità di genere:</h3>
            <ul>
                <li>Parità di genere</li> 
                <li>Femminicidio</li> 
                <li>Discriminazione di genere </li>
                <li>donne e materie stem, la matematica piace solo agli uomini?</li> 
                <li>Afghanistan e diritti delle donne</li>
            </ul>
            <h3>Temi su lotta al cambiamento climatico:</h3>
            <ul>
            <li>Carne coltivata in laboratorio ed ecosostenibilità </li>
            <li>Impatto della carne a livello ecologico, differenze ambientali tra tipi di carne</li>
            <li>Sparizione delle biodiversità </li>
            <li>Risparmio energetico</li>
            <li>Riscaldamento Globale</li>
            <li> Negazionismo in scienza e politica</li>
            <li> Api e biodiversità: l'importanza degli impollinatori</li>
            <li>Il nucleare come energia pulita, pro e contro</li> </ul>
            <h3>Temi su città e comunità sostenibili</h3>
            <ul>
            <li>Condivisione di video e immagini senza il consenso dei protagonisti (si può citare il caso Tiziana Cantone)</li>
            <li>Mobbing sul posto di lavoro </li>
            <li>La shitstorm e il fenomeno degli haters</li>
            <li>Utilizzo corretto dei social</li> 
            <li>Differenza tra informazione e disinformazione, la cura delle fonti e fenomeno delle Fake news </li>
            <li>Influenze Post pandemia in ambito sociale </li>
            <li>Difesa e valorizzazione patrimonio culturale</li>
            <li>Contrasto alle mafie</li>
            <li>Internet e frenesia della vita</li>
            <li>Negazionismo e complottismo Denatalità in italia: problema economico o culturale?</li>
            <li>
              Sostenibilità sociale, ambientale ed economica di un’azienda
            </li>
            <li> Greenwashing</li></ul> 
          </p>

          <div className="card text-white bg-secondary my-5 py-4 ">
            <div className="card-body">
              <p className="text-white m-0">
                <h3>Struttura del documento:</h3>
                <ul>
                  <li>Introduzione al tema</li>
                  <li>Presentazione dell’argomento</li>
                  <li>Elaborazione del tema</li>
                  <li>Riflessioni personali</li>
                  <li>Conclusioni</li>
                  <li>
                    Bibliografia e Sitografia (ossia da dove avete preso le
                    fonti){" "}
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EdCivica;
