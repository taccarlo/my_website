import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import packageJson from '../../../package.json';


function Home(){
   return( 
       <>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="My Homepage"/>
            <link rel = "canonical" href = "/" />
            <meta name="robots" content="noindex"/>
        </Helmet>
         <h1>{packageJson.name}</h1>
         <p><Link to="/didattica">Didattica</Link></p>
         <p><Link to="/myGithub">I miei progetti su Github</Link></p>
         <p><Link to="/GTSA">Canale App Android Good Time Studios App</Link></p>
       </>
     ); 
}
export default Home;