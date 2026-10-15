import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/navbar" element={<NavBar/>}/>
    <Route path="/hero" element={<Hero/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
