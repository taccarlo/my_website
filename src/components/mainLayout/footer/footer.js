
import CookieConsent from "react-cookie-consent";
import packageJson from '../../../../package.json';

function Footer(){
    return( 
        <> 
        
        <nav className="py-2 bg-dark fixed-bottom ">
          <div className="container px-4 px-lg-5">
            <p className="m-0 text-center text-white">{packageJson.name} - V. {packageJson.version}</p>
          </div>
        </nav>
        
        <CookieConsent buttonText="OK" >Questo sito utilizza cookies per migliorare la tua esperienza utente.</CookieConsent>
        </>
      ); 
}
export default Footer;