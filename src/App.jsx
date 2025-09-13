import Home from "./Components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import About from "./Components/About";


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App