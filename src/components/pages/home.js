import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


function Home(){
   return( 
       <div>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="My Homepage"/>
            <link rel = "canonical" href = "/" />
            <meta name="robots" content="noindex"/>
        </Helmet>
         <h1>My Home Page v. 0.0.1</h1>

         <h2>Didattica</h2>
         <h3>Link a canale Youtube</h3>
         <h3>Educazione civica 23/24</h3>
         <h2>I miei progetti su Github</h2>
         <h3>LudicApp</h3>
         <h3>taccarlo web</h3>
         <h2>GTSA</h2>
         <h3>Barzellette</h3>
         <h3>Viking Fight</h3>
         <h3>Aforismi</h3>
         <h3>Swep! il gioco alcolico</h3>
         <h3>Canzoniere: Testi e Accordi</h3>
         <p>Go to <Link to="/about">about</Link></p>
       </div>
     ); 
}
export default Home;