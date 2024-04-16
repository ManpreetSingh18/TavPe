
import './App.css'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Navbar} from "./components/Navbar"
const App= () =>{
  return(
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
           
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
