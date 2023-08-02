import { Navbar, Footer } from "./components/index";
import {
  Homepage,
  Aboutus,
  Products,
  Careers,
  PageNotFound,
  Faqs,
  Contact,
  Downloads,
} from "./components/pages";
import { Route, Routes } from "react-router-dom";
import "./styles/main.css";
import "./index.css";

function App() {
  return (
    <div className="font">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
