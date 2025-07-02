import React from 'react'
import { useState } from "react";

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
