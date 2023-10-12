import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function About(){
    return( 
        <>
            <Helmet>
                <title>About</title>
                <meta name="description" content="About myself"/>
                <link rel = "canonical" href = "/about" />
            </Helmet>
            <h1>My About Page</h1>
            <p>Go to <Link to="/">home</Link></p>
        </>
      ); 
}
export default About;