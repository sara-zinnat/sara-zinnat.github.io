import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/certification' element={<Certification />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
