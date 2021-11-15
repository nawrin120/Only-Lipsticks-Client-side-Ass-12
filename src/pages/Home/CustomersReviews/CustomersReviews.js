import React, { useEffect, useState } from "react";
import CustomersReview from "./CustomersReview";
import "./CustomersReviews.css";

const CustomersReviews = () => {
  const [rewiews, setReviews] = useState([]);
  console.log(rewiews);
  useEffect(() => {
    fetch("https://ancient-beyond-64067.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="review-container">
      <div className="container">
        <h2 className="brand-title">REVIEWS</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {rewiews.map((review) => (
            <CustomersReview key={review._id} review={review}></CustomersReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersReviews;
