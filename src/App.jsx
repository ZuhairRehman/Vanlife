import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import "./App.css";
import "./index.css";
import Home from "./pages/Home.jsx";
import Vans from "./pages/Vans.jsx";
import VanDetails from "./pages/VanDetails.jsx";
import Layout from "./components/Layout.jsx";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes element={<Layout />}>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
