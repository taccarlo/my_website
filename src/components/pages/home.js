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

         <h2>Github</h2>
         <h2>GTSA</h2>
         <h2>Didattica</h2>
         <h3>Link a canale Youtube</h3>
         <h3>Educazione civica 23/24</h3>
         <p>Go to <Link to="/about">about</Link></p>
       </div>
     ); 
}
export default Home;