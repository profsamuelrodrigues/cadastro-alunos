import './App.css';

//Router
import { BrowserRouter, Routes, Route, navigate, Navigate } from "react-router-dom"

//Pages
import Home from './pages/home/Home'
import Register from './pages/register/Register'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
