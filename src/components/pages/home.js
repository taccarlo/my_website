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
         <p>Go to <Link to="/about">about</Link></p>
       </div>
     ); 
}
export default Home;