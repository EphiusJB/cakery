import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <div className="font-sans bg-[#fff8f0] text-gray-800">
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}
// This is the main App component that renders the entire application.