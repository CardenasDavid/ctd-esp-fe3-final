
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"


function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
