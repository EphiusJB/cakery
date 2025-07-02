import React from 'react'
import { useState } from "react";
import ReviewForm from "./ReviewForm";

const initialReviews = [
  {
    name: "Chanda M.",
    review: "The red velvet cupcakes were heavenly! Will definitely order again.",
    rating: 5,
  },
  {
    name: "Tamara K.",
    review: "Beautiful cakes and the taste is even better than they look!",
    rating: 5,
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <section id="reviews" className="bg-strawberry py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-10">
          Customer Reviews
        </h2>

        <div className="space-y-6 mb-10">
          {reviews.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-chocolate font-semibold">{item.name}</p>
              <p className="text-gray-700 mt-1 italic">"{item.review}"</p>
              {item.rating && (
                <p className="text-yellow-600 mt-2">⭐ {item.rating}/5</p>
              )}
            </div>
          ))}
        </div>

        <ReviewForm onSubmit={addReview} />
      </div>
    </section>
  );
}
