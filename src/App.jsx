import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Signup' element={<Signup/>}/>
          </Routes>
    </div>
  )
}

export default App;
