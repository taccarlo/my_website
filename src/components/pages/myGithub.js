import { Helmet } from 'react-helmet-async';
function MyGithub(){
    return (<>
        <Helmet>
            <title>Github</title>
            <meta name="description" content="I miei progetti github"/>
            <link rel = "canonical" href = "/myGithub" />
            <meta name="robots" content="noindex"/>
        </Helmet><h1>I miei progetti su Github</h1>
    <h3>Link a github</h3>
    <h3>LudicApp</h3>
    <h3>taccarlo web</h3></>);
}
export default MyGithub;