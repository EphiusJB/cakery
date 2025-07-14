import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AdminPage from "./pages/AdminPage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="font-sans bg-[#fff8f0] text-gray-800">
      <Router>
        <Routes>
          {/** Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="login" element={<Login />} />

          {/** Admin/Protected routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
// This is the main App component that renders the entire application.
