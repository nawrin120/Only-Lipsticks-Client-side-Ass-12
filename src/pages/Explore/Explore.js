import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";
const Explore = ({ lipstick }) => {
  const { _id, img, name, description, price, skintone } = lipstick;
  return (
    <div className="col home-lip-col mb-5">
      <div className="card h-100 home-lip ">
        <img src={img} className="card-img-top p-5" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <p>
            <small>{description}</small>
          </p>
          <p className="card-text">Skintone : {skintone}</p>
          <p className="card-text">Price: ${price}</p>
          <Link to={`/placeorder/${_id}`}>
            <button className="mb-3 booking-btn ms-3">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
