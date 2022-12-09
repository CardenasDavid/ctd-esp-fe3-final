
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { useGlobalStates } from "./Components/utils/global.context";

function App() {
  const{state}=useGlobalStates()
  return (
      <div className="App" id={state.theme}>
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
