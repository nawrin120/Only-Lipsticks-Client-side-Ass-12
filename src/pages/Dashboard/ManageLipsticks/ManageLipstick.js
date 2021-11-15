import React from "react";

const ManageLipstick = ({ lipstick, handleDeleteLipstick }) => {
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
          <button
            className="remove-order me-3"
            onClick={() => {
              handleDeleteLipstick(_id);
            }}
          >
            <i className="fas fa-trash-alt"></i> Remove Lipstick
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageLipstick;
