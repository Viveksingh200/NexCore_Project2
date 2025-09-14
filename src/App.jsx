import Home from "./Components/HomePage/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Support from "./Components/Support";
import ProductPage from "./Components/products/ProductPage";


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
      <Route path="/support" element={<Support/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App