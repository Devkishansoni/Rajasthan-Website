import logo from "./logo.svg";
import "./App.css";
import { Route,Routes } from "react-router-dom";
import Main from "./Components/Main Web sites Com/Main";
import Contact from "./Components/Contact Com/Contact";
import HistoryRJ from "./Components/History Of RJ Com/HistoryRJ";
import Ticket from "./Components/Navbar Routes Com/Ticket History Com/Ticket";
import About from "./Components/Navbar Routes Com/About Com/About";
// import Footer from "./Components/Footer Com/Footer";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Main/>}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/about-to-main" element={<Main />} />

      </Routes>
      {/* <HistoryRJ/> */}
      {/* <Ticket /> */}
      {/* <About />
      <Footer/> */}
      {/* <Contact/> */}
    </>
  );
}

export default App;
