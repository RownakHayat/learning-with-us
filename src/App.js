// import Register from './Register';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Register from './components/Pages/Register';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes className="text-center">
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;