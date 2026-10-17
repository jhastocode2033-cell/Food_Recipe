import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/navbar" element={<NavBar/>}/>
    <Route path="/hero" element={<Hero/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
