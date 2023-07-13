import { Navbar, Footer } from "./components/index";
import {
  Homepage,
  Aboutus,
  Products,
  Careers,
  PageNotFound,
} from "./components/pages";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import "./styles/main.css";

function App() {
  return (
    <div className="font">
      <Navbar />
      {/* <Homepage/> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
