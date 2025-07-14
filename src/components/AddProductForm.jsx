import React from "react";
import { useState } from "react";
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function AdminPage(props) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.image || !form.name || !form.price) return;

    setUploading(true);

    try {
      const imageRef = ref(
        storage,
        `products/${Date.now()}-${form.image.name}`
      );
      await uploadBytes(imageRef, form.image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "products"), {
        name: form.name,
        price: form.price,
        description: form.description,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Product uploaded successfully!");
      setForm({ name: "", price: "", description: "", image: null });
    } catch (err) {
      console.error("Error uploading:", err);
      alert("Upload failed.");
    }

    setUploading(false);
  };


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow my-10">
      <h2 className="text-2xl font-bold mb-6 text-chocolate text-center">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Cake Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={uploading}
          className="bg-orangeAccent text-white w-full py-2 rounded hover:bg-orangeAccent/90"
        >
          {uploading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
