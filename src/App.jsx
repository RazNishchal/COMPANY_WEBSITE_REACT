import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import SoftwareDev from "./pages/SoftwareDev";
import WebDev from "./pages/WebDev";
import GraphicDesign from "./pages/GraphicDesign";
import MobileDev from "./pages/MobileDev";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/services/software-development"
            element={<SoftwareDev />}
          />
          <Route path="/services/web-development" element={<WebDev />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/mobile-development" element={<MobileDev />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
