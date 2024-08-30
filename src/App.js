import './App.css';
import 'leaflet/dist/leaflet.css';
import MainScreen from './screens/MainScreen/MainScreen';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <div className="flex items-center justify-center h-screen bg-gray-100">
    //     <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
    //   </div>

    // </div>

    <>
      <MainScreen />
    </>
  );
}

export default App;
