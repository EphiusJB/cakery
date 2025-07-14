import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../firebase";

export default function MenuManager() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    category: "",
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openModal = (product = null) => {
    if (product) {
      setForm({
        category: product.category,
        name: product.name,
        price: product.price,
        description: product.description,
        image: null,
      });
      setEditingId(product.id);
    } else {
      setForm({
        category: "",
        name: "",
        price: "",
        description: "",
        image: null,
      });
      setEditingId(null);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setForm({
      category: "",
      name: "",
      price: "",
      description: "",
      image: null,
    });
    setEditingId(null);
    setModalOpen(false);
  };

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = null;
      if (form.image) {
        const imgRef = ref(
          storage,
          `products/${Date.now()}-${form.image.name}`
        );
        await uploadBytes(imgRef, form.image);
        imageUrl = await getDownloadURL(imgRef);
      }

      if (editingId) {
        const docRef = doc(db, "products", editingId);
        await updateDoc(docRef, {
          category: form.category,
          name: form.name,
          price: form.price,
          description: form.description,
          ...(imageUrl && { imageUrl }),
        });
        setEditingId(null);
      } else {
        await addDoc(collection(db, "products"), {
          category: form.category,
          name: form.name,
          price: form.price,
          description: form.description,
          imageUrl,
          createdAt: serverTimestamp(),
        });
      }

      fetchProducts();
      closeModal();
    } catch (err) {
      alert("Error saving product.");
    }

    setUploading(false);
  };

  const handleEdit = (product) => {
    setForm({
      category: product.category,
      name: product.name,
      price: product.price,
      description: product.description,
      image: null,
    });
    setEditingId(product.id);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id, imageUrl) => {
    if (!confirm("Delete this product?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      if (imageUrl) {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef).catch(() => {}); // might fail if from previous deploy
      }
      fetchProducts();
    } catch (err) {
      alert("Error deleting.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Menu Products</h2>
        <button
          onClick={() => openModal()}
          className="bg-orangeAccent text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              className="w-full h-48 object-cover rounded"
            />
            <h4 className="font-bold mt-2">{p.name}</h4>
            <p className="text-sm text-chocolate/70">{p.description}</p>
            <p className="text-orangeAccent font-semibold">K{p.price}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => openModal(p)}
                className="text-sm px-3 py-1 bg-orangeAccent text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p.id, p.imageUrl)}
                className="text-sm px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-chocolate hover:text-orangeAccent"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">
              {editingId ? "Edit Product" : "Add Product"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="w-full border p-1 rounded"
                value={form.category}
                onChange={handleInput}
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border p-1 rounded"
                value={form.name}
                onChange={handleInput}
                required
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="w-full border p-1 rounded"
                value={form.price}
                onChange={handleInput}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                className="w-full border p-1 rounded"
                value={form.description}
                onChange={handleInput}
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleInput}
                className="w-full border p-1 rounded"
              />
              <button
                type="submit"
                className="bg-orangeAccent text-white px-6 py-2 rounded hover:bg-orangeAccent/90 w-full"
              >
                {editingId
                  ? "Update Product"
                  : uploading
                  ? "Uploading..."
                  : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
