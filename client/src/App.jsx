import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/menu/Menu";
import { Toaster } from "react-hot-toast";
import MenuItem from "./pages/menu/MenuItem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster position="top-center" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuItem />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
