import useMetaTags from '../../hooks/useMetaTags';
import { Link } from 'react-router-dom';

function GTSA(){
    const metaTags = useMetaTags({
        title: 'Good Time Studios App',
        description: 'Canale di app Android Good Time Studios - Barzellette, Viking Fight, Aforismi, Swep! e Canzoniere',
        canonical: '/GTSA'
    });
    return (<>
        {metaTags}
        <h1>Canale App Android Good Time Studios App</h1>
        <h3>Barzellette</h3>
        <h3>Viking Fight</h3>
        <h3>Aforismi</h3>
        <h3>Swep! il gioco alcolico</h3>
        <h3>Canzoniere: Testi e Accordi</h3>
        <hr />
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <p>
                <Link to="/gtsa/privacypolicy" style={{ color: '#007bff', textDecoration: 'none', fontSize: '1rem' }}>
                    📋 Privacy Policy
                </Link>
            </p>
        </div>
    </>);
}
export default GTSA;