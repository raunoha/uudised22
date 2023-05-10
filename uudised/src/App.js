import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import Avaleht from './pages/Avaleht' ;
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Lisa  from './pages/Lisa uudis';
import Halda from './pages/Halda uudiseid';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/Uudised">
        <button>Uudised</button>
      </Link>
      <Link to="/Kontakt">
        <button>Kontakt</button>
      </Link>
      <Link to="/Meist">
        <button>Meist</button>
      </Link>
      <Link to="/Lisa uudis">
        <button>Lisa uudis</button>
      </Link>
      <Link to="/Halda uudiseid">
        <button>Halda uudiseid</button>
      </Link>

      <Routes>
      <Route path="" element={ <Avaleht /> } />
      <Route path="Uudised" element={ <Uudised /> } />
      <Route path="Kontakt" element={ <Kontakt  /> } />
      <Route path="Meist" element={ <Meist /> } />
      <Route path="Lisa uudis" element={ <Lisa uudis /> } />
      <Route path="Halda uudiseid" element={ <Halda uudiseid /> } />
      </Routes>
    </div>
  );
}

export default App;
