import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`https://ancient-beyond-64067.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleOrderDeletion = (id) => {
    const url = `https://ancient-beyond-64067.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Do you want to delete?");
          const remaining = orders.filter((order) => order?._id !== id);
          setOrders(remaining);
        }
      });
  };

  useEffect(() => {
    const foundMyOrders = orders.filter((order) => order.email == email);
    setOrder(foundMyOrders);
  }, [orders]);

  return (
    <div>
      <h2 className="banner-title mt-5">
        Shades <span className="banner-span ">Of</span> Love
      </h2>

      <h5 className="banner-qutes">
        Orders Of <span className="banner-span">{user.displayName}</span>{" "}
      </h5>
      <div className="row row-cols-1 my-5 g-4">
        {order.map((myOrder) => (
          <Order
            key={myOrder._id}
            myOrder={myOrder}
            handleOrderDeletion={handleOrderDeletion}
          ></Order>
        ))}
      </div>
    </div>
  );
};

export default Orders;
