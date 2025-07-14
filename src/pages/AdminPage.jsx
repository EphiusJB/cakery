import { useState } from "react";
import GalleryManager from "./GalleryManager";
import MenuManager from "./MenuManager";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const [view, setView] = useState("gallery");
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-cream text-chocolate">
      {/* Top Nav */}
      <div className="flex justify-between items-center px-6 py-4 bg-chocolate text-white shadow">
        <h1 className="text-xl font-bold">Mika's Cakery Admin</h1>
        <button onClick={logout} className="text-sm underline">
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 justify-center my-6">
        <button
          onClick={() => setView("gallery")}
          className={`px-4 py-2 rounded ${
            view === "gallery"
              ? "bg-orangeAccent text-white"
              : "bg-white text-chocolate"
          }`}
        >
          Manage Gallery
        </button>
        <button
          onClick={() => setView("menu")}
          className={`px-4 py-2 rounded ${
            view === "menu"
              ? "bg-orangeAccent text-white"
              : "bg-white text-chocolate"
          }`}
        >
          Manage Menu
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-10">
        {view === "gallery" ? <GalleryManager /> : <MenuManager />}
      </div>
    </div>
  );
}
