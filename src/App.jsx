import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import "./App.css";
import "./index.css";
import Home from "./pages/Home.jsx";
import Vans from "./pages/Vans.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <div className="nav-section-left">
            <Link className="header-link" to="/">
              #VANLIFE
            </Link>
          </div>

          <div className="nav-section-right">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
