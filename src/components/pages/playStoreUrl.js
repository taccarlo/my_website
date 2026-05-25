import useMetaTags from '../../hooks/useMetaTags';

function PlayStoreUrl() {
  const metaTags = useMetaTags({
    title: 'App Android',
    description: 'Elenco completo delle app Android Good Time Studios disponibili su Google Play',
    canonical: '/playStoreUrl'
  });
  const data = {
    "apps": [
      {
        "package": "com.goodtimestudiosapps.namegenerator",
        "title": "Name Generator",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=com.goodtimestudiosapps.namegenerator"
      },
      {
        "package": "com.GoodTimeStudiosApps.VikingFight",
        "title": "Viking Fight",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=com.GoodTimeStudiosApps.VikingFight"
      },
      {
        "package": "com.goodtimestudiosapps.drinkinggame",
        "title": "Swep! - The Drinking Game",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=com.goodtimestudiosapps.drinkinggame"
      },
      {
        "package": "goodtimestudiosapps.lovetest",
        "title": "Love Test",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=goodtimestudiosapps.lovetest"
      },
      {
        "package": "com.barzellettiere.barzellette",
        "title": "Jokes",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=com.barzellettiere.barzellette"
      },
      {
        "package": "goodtimestudiosapps.canzoniere",
        "title": "Chords",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=goodtimestudiosapps.canzoniere"
      },
      {
        "package": "goodtimeapps.aforismi",
        "title": "Aphorisms",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=goodtimeapps.aforismi"
      }
    ]
  };

  return <>{metaTags}<pre>{JSON.stringify(data, null, 2)}</pre></>;
}

export default PlayStoreUrl;