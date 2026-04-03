import {Link} from 'react-router-dom';
import useMetaTags from '../../hooks/useMetaTags';

function About(){
    useMetaTags({
        title: 'Chi Sono',
        description: 'Scopri di più su Carlo Tacchella. Insegnante di informatica, sviluppatore software e creatore di contenuti didattici per studenti delle superiori.',
        canonical: '/about',
        keywords: 'Carlo Tacchella, insegnante, informatica, sviluppatore, didattica',
        author: 'Carlo Tacchella',
        ogTitle: 'Chi Sono - Carlo Tacchella',
        ogDescription: 'Scopri la storia e i progetti di Carlo Tacchella'
    });

    return( 
        <>
            <h1>Chi Sono</h1>
            <p>Go to <Link to="/">home</Link></p>
        </>
      ); 
}
export default About;