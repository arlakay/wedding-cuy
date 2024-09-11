import './App.css';
import 'leaflet/dist/leaflet.css';
import MainScreen from './screens/MainScreen/MainScreen';
import { Helmet } from 'react-helmet';

import favicon3 from '../src/assets/favico/favicon512.png';


function App() {

  return (
    <>
      <Helmet>
        <meta name="description" content="Undangan pernikahan mempelai Dara & Asta" />
        <meta property="og:title" content="Dara & Asta Wedding" />
        <meta property="og:description" content="Undangan pernikahan mempelai Dara & Asta" />
        <meta property="og:image" content={favicon3} />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dara & Asta Wedding" />
        <meta name="twitter:description" content="Undangan pernikahan mempelai Dara & Asta" />
        <meta name="twitter:image" content={favicon3} />
      </Helmet>
      <MainScreen />
    </>
  );
}

export default App;
