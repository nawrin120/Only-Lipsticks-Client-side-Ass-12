import React from "react";

const ManageOrder = (props) => {
  const { _id, status, name, img, price } = props.allOrder;
  const { handleOrderDeletion, handleUpdateStatus } = props;
  return (
    <div>
      <div className="col">
        <div className="card h-100 order-card">
          <div className="row order-body">
            <div className="col-12 col-md-5 order-img">
              <img src={img} className="card-img-top" alt="..." />
            </div>

            <div className="col-12 col-md-5 card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Status : {status} </p>
              <div className="">
                <p>Price : ${price}</p>

                <button
                  className="remove-order me-3"
                  onClick={() => {
                    handleOrderDeletion(_id);
                  }}
                >
                  <i className="fas fa-trash-alt"></i> Remove Order
                </button>

                <button
                  className="confirmBtn my-2 "
                  onClick={() => {
                    handleUpdateStatus(_id);
                  }}
                >
                  <i className="fas fa-clipboard-check"></i> Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
