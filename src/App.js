import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Oction from "./pages/Oction";
import Service from "./Components/Service";
import Detail from "./Components/Detail";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Service/>} />
        <Route path="/Detail" element={<Detail/>} />
        <Route path="/oction" element={<Oction />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quote" element={<Quote />} />

      </Routes>{" "}
    </div>
  );
}

export default App;
