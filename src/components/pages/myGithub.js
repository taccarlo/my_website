import useMetaTags from '../../hooks/useMetaTags';
function MyGithub() {
  const metaTags = useMetaTags({
    title: 'Progetti GitHub',
    description: 'Progetti software open source di Carlo Tacchella - LudicApp, strumenti didattici e applicazioni web',
    canonical: '/myGithub',
    keywords: 'GitHub, progetti, open source, Carlo Tacchella, software'
  });
  return (
    <>
      {metaTags}
      <h1>I miei progetti su Github</h1>
      <h3>Link a github</h3>
      <h3>LudicApp</h3>
      <h3>taccarlo web</h3>
    </>
  );
}
export default MyGithub;
