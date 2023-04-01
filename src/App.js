import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import EmpForm from './components/EmpForm';

function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/EmpForm' element={<EmpForm/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
