import { Helmet } from 'react-helmet-async';

function Testbench(){
    return (<>
        <Helmet>
            <title>Testbench</title>
            <meta name="description" content="Spazio web usato per testare funzionalità che servono per l'attività di sviluppo"/>
            <link rel="canonical" href="/testbench" />
        </Helmet>
        <h1>Testbench</h1>
        <p>Spazio web usato per testare funzionalità che servono per l'attività di sviluppo.</p>
    </>);
}

export default Testbench;
