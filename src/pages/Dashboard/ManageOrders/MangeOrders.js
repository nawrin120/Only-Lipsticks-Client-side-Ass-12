import React, { useEffect, useState } from "react";
import ManageOrder from "./ManageOrder";

const MangeOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://ancient-beyond-64067.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

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

  const handleUpdateStatus = (id) => {
    const updateSataus = { status: "Approved" };

    fetch(`https://ancient-beyond-64067.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSataus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Status updated.");
          // window.location.reload();
        }
      });
  };

  return (
    <div>
      <h2 className="banner-title">
        Shades <span className="banner-span">Of</span> Love
      </h2>

      <h5 className="banner-qutes">
        Mange All <span className="banner-span">Orders</span>{" "}
      </h5>
      <div className="row row-cols-1 g-4">
        {orders.map((allOrder) => (
          <ManageOrder
            key={allOrder._id}
            allOrder={allOrder}
            handleOrderDeletion={handleOrderDeletion}
            handleUpdateStatus={handleUpdateStatus}
          ></ManageOrder>
        ))}
      </div>
    </div>
  );
};

export default MangeOrders;
