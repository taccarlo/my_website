
import CookieConsent from "react-cookie-consent";
import packageJson from '../../../../package.json';
import '../../../style/style.css';

function Footer(){
    return( 
        <> 
        
        <nav className="py-5 bg-dark">
          <div className="container px-4 px-lg-5">
            <p className="m-0 text-center text-white">{packageJson.name} V. {packageJson.version}</p>
          </div>
        </nav>
        
        <CookieConsent buttonText="OK" >Questo sito utilizza cookies per migliorare la tua esperienza utente.</CookieConsent>
        </>
      ); 
}
export default Footer;