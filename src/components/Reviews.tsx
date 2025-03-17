import React from "react";

const reviews = [
  {
    id: 1,
    text: "Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable’s customer service helped me answer all the questions that I needed to switch.",
    author: "K Oiwake",
  },
  {
    id: 2,
    text: "The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!",
    author: "E Berhe",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      {/* Rating Display */}
      <div className="rating">4.8</div>

      {/* Reviews Section */}
      <div className="reviews-wrapper">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <span className="quote-icon">❝</span>
            <p>{review.text}</p>
            <hr />
            <span className="author">— {review.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
