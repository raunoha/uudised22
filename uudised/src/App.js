import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import Avaleht from './pages/Avaleht' ;
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';

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
      <Routes>
      <Route path="" element={ <Avaleht /> } />
      <Route path="Uudised" element={ <Uudised /> } />
      <Route path="Kontakt" element={ <Kontakt  /> } />
      <Route path="Meist" element={ <Meist /> } />
      </Routes>
    </div>
  );
}

export default App;
