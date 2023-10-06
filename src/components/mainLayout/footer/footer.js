
import CookieConsent from "react-cookie-consent";
import packageJson from '../../../../package.json';
function Footer(){
    return( 
        <>
        <nav style = { {  position: 'absolute',  bottom:0, right:10}} className="navbar navbar-light">
          <p>{packageJson.name} V. {packageJson.version}</p>
        </nav>
        <CookieConsent buttonText="OK" >Questo sito utilizza cookies per migliorare la tua esperienza utente.</CookieConsent>
        </>
      ); 
}
export default Footer;