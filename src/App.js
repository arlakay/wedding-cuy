import './App.css';
import 'leaflet/dist/leaflet.css';
import MainScreen from './screens/MainScreen/MainScreen';
import { Helmet } from 'react-helmet';

import favicon3 from '../src/assets/favico/favicon512.png';


function App() {

  return (
    <>
      <Helmet>
        <title>The Wedding of Bride & Groom</title>
        <meta name="description" content="You're invited" />
        <meta property="og:title" content="The Wedding of Bride & Groom" />
        <meta property="og:description" content="You're invited" />
        <meta property="og:image" content={favicon3} />
        <meta property="og:url" content="https://groomnbridewedding.site/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Wedding of Bride & Groom" />
        <meta name="twitter:description" content="You're invited" />
        <meta name="twitter:image" content={favicon3} />
      </Helmet>
      <MainScreen />
    </>
  );
}

export default App;
