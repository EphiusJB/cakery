import React from 'react'
import { useState } from "react";

/*
export default function ReviewForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review) return;
    onSubmit({ name, review, rating });
    setName("");
    setReview("");
    setRating("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow"
    >
      <h3 className="text-xl font-semibold text-chocolate mb-4">
        Leave a Review
      </h3>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border p-2 mb-4 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your Review"
        className="w-full border p-2 mb-4 rounded h-24 resize-none"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <input
        type="number"
        max="5"
        min="1"
        placeholder="Rating (1–5)"
        className="w-full border p-2 mb-4 rounded"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orangeAccent text-white py-2 px-4 rounded hover:bg-orangeAccent/90 transition"
      >
        Submit
      </button>
    </form>
  );
}
*/


export default function ReviewForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", text: "", stars: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;

    onSubmit(form);
    setForm({ name: "", text: "", stars: 5 });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cream p-6 rounded-xl shadow-md space-y-4 max-w-lg mx-auto text-left"
    >
      <h3 className="text-xl font-semibold mb-2 text-center">Leave a Review</h3>

      <input
        type="text"
        placeholder="Your name"
        className="w-full px-4 py-2 rounded border border-chocolate/30"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <textarea
        placeholder="Your review"
        className="w-full px-4 py-2 rounded border border-chocolate/30"
        value={form.text}
        onChange={(e) => setForm({ ...form, text: e.target.value })}
        required
      />

      <div className="flex items-center gap-2">
        <label htmlFor="stars" className="text-sm">
          Rating:
        </label>
        <select
          id="stars"
          className="px-2 py-1 border border-chocolate/30 rounded"
          value={form.stars}
          onChange={(e) => setForm({ ...form, stars: parseInt(e.target.value) })}
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 && "s"}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-orangeAccent text-white px-6 py-2 rounded hover:bg-orangeAccent/90 w-full"
      >
        Submit Review
      </button>
    </form>
  );
}
