import Home from "./Components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {

  return (
    <>
    <BrowserRouter>
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
