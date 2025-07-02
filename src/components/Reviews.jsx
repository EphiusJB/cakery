import React from 'react'
import { useState } from "react";
import ReviewForm from "./ReviewForm";

/*
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
*/


const reviewsData = [
  {
    name: "Sarah Mwale",
    text: "Absolutely stunning cake design! It looked even better than the photo I sent and tasted divine.",
    stars: 5,
  },
  {
    name: "James Banda",
    text: "Mika’s cupcakes are a family favorite — always fresh, moist, and beautifully decorated.",
    stars: 4,
  },
  {
    name: "Loveness Tembo",
    text: "I ordered a last-minute birthday cake and they still delivered on time with amazing quality. Highly recommend!",
    stars: 5,
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(reviewsData);

  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <section className="bg-white py-20 px-6 text-chocolate" id="reviews">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid gap-6 md:grid-cols-2 mb-12 text-left">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-cream p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
              <div className="flex gap-1 mb-2">
                {Array(review.stars)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-orangeAccent text-xl">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-sm text-chocolate/80 italic">“{review.text}”</p>
            </div>
          ))}
        </div>

        {/* Separate Review Form */}
        <ReviewForm onSubmit={addReview} />
      </div>
    </section>
  );
}
