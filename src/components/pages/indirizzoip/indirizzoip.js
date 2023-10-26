import { Helmet } from "react-helmet-async";
import CardYoutube from "../../card/Card_binario";
function IndirizziIP() {
  return (
    <>
      <Helmet>
        <title>Indirizzi IP</title>
        <meta name="description" content="Indirizzi IP" />
        <link rel="canonical" href="/didattica/binario" />
      </Helmet>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <h1>Indirizzi IPv4 CLASSLESS e CLASSFUL</h1>
          </div>
          <div className="row gx-4 gx-lg-5 my-5">
            <CardYoutube
              youtubeID="r-_QDisHWI8"
              cardText="Indirizzamento Classful IPv4"
              youtubeLink="https://www.youtube.com/watch?v=r-_QDisHWI8"
            />
            <CardYoutube
              youtubeID="zDOqyAqmEnk"
              cardText="Indirizzamento Classless IPv4"
              youtubeLink="https://www.youtube.com/watch?v=zDOqyAqmEnk"
            />
          <h1>Esercizio su indirizzi Classful</h1>
            <h5>Classe A</h5>
            <table>
              <tr>
                <th>Net-ID</th>
                <th colspan={3}>Host-ID</th>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </table>
            <h5>Classe B</h5>
            <table>
              <tr>
                <th colspan={2}>Net-ID</th>
                <th colspan={2}>Host-ID</th>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </table>
            <h5>Classe C</h5>
            <table>
              <tr>
                <th colspan={3}>Net-ID</th>
                <th colspan={1}>Host-ID</th>
              </tr>
              <tr>
                <td colspan={1}>1</td>
                <td colspan={1}>2</td>
                <td colspan={1}>3</td>
                <td colspan={1}>4</td>
              </tr>
            </table>
            <h5>Classe D</h5>
            <table>
              <tr>
                <th colspan={4}>Host-ID</th>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </table>
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
              <table>
                <tr>
                  <th>Classe</th>
                  <th>Bit più significativi</th>
                </tr>
                <tr>
                  <td>A</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>110</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>1110</td>
                </tr>
                <tr>
                  <td>E</td>
                  <td>11111</td>
                </tr>
              </table>
            </div>
          <h3>
            Individuare classe di appartenenza indirizzo IPv4 e suo indirizzo
            Host
          </h3>
          <p>Individuiamo la classe di appartenenza dell’indirizzo IP 30.50.18.45
          indicando l’indirizzo di rete e di host. </p><p>Come prima operazione,
          traduciamo da decimale a binario il primo ottetto, ottenendo 3010 =
          0001 1110 in base 2: dato che il primo bit è uguale a 0, siamo in presenza di
          un indirizzo di <b>classe A</b>: l’indirizzo di rete è quindi composto da 7
          bit: 001 1110 in base 2;</p> <p>L’indirizzo dell’host è composto da 24 bit: 50.18.45 in base 10 = 00110010.0010010.00101101 in base 2</p>
          </div>
          <div className="row gx-4 gx-lg-5 align-items-center my-3">
          <h1>Esercizio su indirizzi Classless</h1>
            
          <h3>
            Individuare l'indirizzo IP partendo da una maschera qualsiasi
          </h3>
          <p>In questo esempio vogliamo calcolare l’indirizzo della rete di appartenenza di un host, partendo dall’indirizzo IP e dalla subnet mask. Prendiamo in esame il seguente indirizzo IP di un determinato host:170.223.75.16/18 cioè con subnet 255.255.192.0
            </p><p>Per prima cosa  trasformiamo i valori, sia dell’indirizzo IP che della maschera, in base binaria:</p>

              <p>170.223.75.16 (10101010.11011111. 01001011.00010000)</p>
              <p>255.255.192.0 (11111111.11111111.11000000.00000000)</p>
              <p>
              Adesso dobbiamo eseguire una AND logica, bit a bit, tra due numeri, dell’indirizzo IP e della subnet:
              </p>
              <p>
              10101010.11011111 .01001011.00010000 <br/>
              AND<br/>
              11111111.11111111.11000000.00000000 <br/>
              diventa<br/>10101010.11011111.01000000.00000000 <br/><p>Otteniamo come indirizzo di rete: <br/>170.223.64.0</p>
              </p>
          </div>
        </div>
    </>
  );
}
export default IndirizziIP;
