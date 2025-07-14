import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <>
    <div className="max-w-5xl h-screen mx-auto p-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mt-10 mb-6 text-chocolate">
          Mika’s Cakery
        </h2>
      <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-20 bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold mb-4 text-chocolate text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="w-full bg-orangeAccent text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
    </>
    
  );
}
// This component provides a simple login form for the admin to access the admin page.