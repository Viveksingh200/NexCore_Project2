import Home from "./Components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Footer from "./Components/Footer";


function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
