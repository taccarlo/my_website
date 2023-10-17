import { Helmet } from "react-helmet-async";
import jsonString from "../../data/edCivica.json";
function EdCivica() {
  console.log(JSON.stringify(jsonString));
  return (
    <>
      <Helmet>
        <title>Educazione Civica</title>
        <meta
          name="description"
          content="Parte relativa all'educazione civica"
        />
        <link rel="canonical" href="/didattica/edCivica" />
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
                    con un documento formato powerpoint.
                  </li>
                  <li>
                    Gli elaborati andranno consegnati sul registro elettronico
                    entro la fine delle vacanze di natale.
                  </li>
                  <li>
                    Nel documento dovranno essere inserite alcune immagini
                  </li>
                  <li>
                    Le sezioni del documento dovranno essere ben delineate
                  </li>
                  <li>
                    Lo stile che il documento dovrà seguire è a cura dello
                    studente ma dovrà essere coerente in tutta la sua interezza
                    come tipologie di font e dimensione dei caratteri
                  </li>
                  <li>
                    Dovranno essere presenti animazioni tra slide e sugli
                    elementi specifici.
                  </li>
                  <li>
                    L’esposizione totale delle slide dovrà durare circa da 5 a 7
                    minuti
                  </li>
                  <li>
                    Dovrà essere presente nel documento un link ad un video che
                    parla dell’argomento
                  </li>
                  <li>
                    Le informazioni citate dovranno essere corredate da
                    opportuna sitografia o bibliografia
                  </li>
                  <li>Per qualsiasi questione potete inviarmi una email.</li>
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
              <li>Abuso di sostanze</li>
              <li>
                Catfishing e amore sui social (si può citare anche il caso
                Roberto Zaccaria)
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
              <li>
                Donne e materie stem, la matematica piace solo agli uomini?
              </li>
              <li>Afghanistan e diritti delle donne</li>
            </ul>
            <h3>Temi su lotta al cambiamento climatico:</h3>
            <ul>
              <li>Carne coltivata in laboratorio ed ecosostenibilità </li>
              <li>
                Impatto della carne a livello ecologico, differenze ambientali
                tra tipi di carne
              </li>
              <li>Sparizione delle biodiversità </li>
              <li>Risparmio energetico</li>
              <li>Riscaldamento Globale</li>
              <li> Negazionismo in scienza e politica</li>
              <li> Api e biodiversità: l'importanza degli impollinatori</li>
              <li>Il nucleare come energia pulita, pro e contro</li>{" "}
            </ul>
            <h3>Temi su città e comunità sostenibili</h3>
            <ul>
              <li>
                Condivisione di video e immagini senza il consenso dei
                protagonisti (si può citare il caso Tiziana Cantone)
              </li>
              <li>Mobbing sul posto di lavoro </li>
              <li>La shitstorm e il fenomeno degli haters</li>
              <li>Utilizzo corretto dei social</li>
              <li>
                Differenza tra informazione e disinformazione, la cura delle
                fonti e fenomeno delle Fake news{" "}
              </li>
              <li>Influenze Post pandemia in ambito sociale </li>
              <li>Difesa e valorizzazione patrimonio culturale</li>
              <li>Contrasto alle mafie</li>
              <li>Internet e frenesia della vita</li>
              <li>
                Negazionismo e complottismo Denatalità in italia: problema
                economico o culturale?
              </li>
              <li>
                Sostenibilità sociale, ambientale ed economica di un’azienda
              </li>
              <li> Greenwashing</li>
            </ul>
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
/*

/*
Razzismo ieri e oggi: Esamina la storia e le forme contemporanee di razzismo nel mondo.

La black face negli Stati Uniti: Analizza la pratica dell'imitazione delle persone di colore e le sue implicazioni.

White washing: Tratta il fenomeno di appropriazione culturale e la rappresentazione inadeguata delle minoranze.

Barriere architettoniche e mentali per la disabilità fisica: Esplora gli ostacoli sia fisici che sociali affrontati dalle persone con disabilità.

Diritti costituzionali: Discussione sui diritti fondamentali garantiti dalle costituzioni.

Diritti LGBT: Analisi dei diritti delle persone LGBT e delle sfide che affrontano.

Morti nel Mar Mediterraneo a causa del fenomeno migratorio: Esamina le sfide legate all'immigrazione e alle morti in mare.

Inclusività e utilizzo della schwa: Tratta l'importanza dell'inclusione e dell'uso del linguaggio neutro.

Situazione carceri in Italia e nel mondo: Discussione sulla sovraffollamento carcerario e il sistema penitenziario.

Whitewashing: Approfondimento sul lavaggio di denaro e il riciclaggio di capitali illegali.

Abuso di sostanze: Esplora le conseguenze dell'abuso di droghe e alcol sulla salute e sulla società.

Catfishing e amore sui social (si può citare anche il caso Roberto Zaccaria): Discute il fenomeno del catfishing e le relazioni online ingannevoli.

Bullismo e cyberbullismo: Analisi del bullismo tradizionale e delle forme online di aggressione.

I tipi di bullismo: verbale, fisico e sociale: Esamina le diverse modalità di bullismo e i danni che provocano.

Smart working, pro e contro: Valutazione dei vantaggi e svantaggi del lavoro intelligente.

Ergonomia, computer e salute: Esplora l'importanza dell'ergonomia nella prevenzione di problemi di salute legati all'uso del computer.

Ansia in contesto scolastico: Discussione sull'ansia legata agli studi e alle pressioni accademiche.

Differenza tra tristezza e depressione: Confronto tra la tristezza comune e la depressione clinica.

Educazione alla salute: il fumo: Tratta le conseguenze del fumo e l'importanza dell'educazione alla salute.

Accettazione del proprio corpo: Anoressia e obesità: Esamina le sfide legate all'immagine corporea e i disturbi alimentari.

Il body shaming: Analisi delle critiche al corpo e dei pregiudizi basati sull'aspetto fisico.

Educazione alla salute: l’abuso di alcool: Discute i problemi legati all'abuso di alcol e l'importanza dell'educazione alla salute.

Parità di genere: Tratta la lotta per l'uguaglianza di genere e i progressi compiuti.

Femminicidio: Analizza il grave problema degli omicidi di donne basati sul genere.

Discriminazione di genere: Esamina le manifestazioni di discriminazione basate sul genere.

Donne e materie STEM, la matematica piace solo agli uomini?: Discute gli stereotipi di genere nelle discipline STEM.

Afghanistan e diritti delle donne: Analisi dei diritti delle donne in Afghanistan e le sfide che affrontano.

Carne coltivata in laboratorio ed ecosostenibilità: Esplora l'agricoltura sostenibile e la produzione di carne in laboratorio.

Impatto della carne a livello ecologico, differenze ambientali tra tipi di carne: Analizza l'impatto ambientale della produzione di carne.

Sparizione delle biodiversità: Discussione sulla perdita di biodiversità e le sue implicazioni.

Risparmio energetico: Tratta le strategie per il risparmio energetico e la sostenibilità.

Riscaldamento Globale: Esamina le cause e gli effetti del riscaldamento globale.

Negazionismo in scienza e politica: Analizza le sfide della negazione scientifica e politica.

Api e biodiversità: l'importanza degli impollinatori: Discute l'importanza delle api nell'ecosistema.

Il nucleare come energia pulita, pro e contro: Valuta l'energia nucleare, i suoi vantaggi e svantaggi.

Condivisione di video e immagini senza il consenso dei protagonisti (si può citare il caso Tiziana Cantone): Discute la privacy online e le conseguenze della diffusione non autorizzata di contenuti.

Mobbing sul posto di lavoro: Tratta il bullismo sul luogo di lavoro e le sue conseguenze.

La shitstorm e il fenomeno degli haters: Esamina l'odio online e le reazioni violente.

Utilizzo corretto dei social: Discussione sull'uso responsabile dei social media.

Differenza tra informazione e disinformazione, la cura delle fonti e fenomeno delle Fake news: Esplora la distinzione tra informazione e disinformazione e l'importanza di fonti affidabili.

Influenze Post pandemia in ambito sociale: Analizza le trasformazioni sociali dovute alla pandemia di COVID-19.

Difesa e valorizzazione patrimonio culturale: Discute la conservazione del patrimonio culturale e artistico.

Contrasto alle mafie: Tratta la lotta contro le organizzazioni criminali.

Internet e frenesia della vita: Analizza l'impatto di Internet sulla nostra vita quotidiana.

Negazionismo e complottismo Denatalità in Italia: problema economico o culturale?: Esplora le teorie del complotto e le sfide demografiche.

Sostenibilità sociale, ambientale ed economica di un’azienda: Discussione sulla sostenibilità aziendale a livello sociale, ambientale ed economico.

Greenwashing: Esamina il fenomeno di un'immagine sostenibile falsa o ingannevole da parte delle aziende.


*/