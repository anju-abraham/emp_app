
import './App.css';

import { HashRouter, Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import EmpForm from './components/EmpForm';

function App() {
  return (
    <div >
     <HashRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
    <Route path="Home" element={<Home/>}/>
    <Route path="EmpForm" element={<EmpForm/>}/>
     </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
