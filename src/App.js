import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Certifications from "./components/Certifications";
import Courses from "./components/Courses";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <NavBar />
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/post/:slug' element={<SinglePost />} />
        <Route path='/post' element={<Post />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/certifications' element={<Certifications />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  )
}

export default App;
