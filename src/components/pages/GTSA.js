import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function GTSA(){
    return (<>
        <Helmet>
            <title>Canale di app Android</title>
            <meta name="description" content="Parte relativa al canale di App"/>
            <link rel = "canonical" href = "/GTSA" />
        </Helmet>
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