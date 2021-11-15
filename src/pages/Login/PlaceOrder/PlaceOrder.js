import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

import Header from "../../Shared/Header/Header";

const PlaceOrder = () => {
  const { id } = useParams();
  const [lipstipck, setlipstick] = useState([]);
  console.log(lipstipck);

  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://ancient-beyond-64067.herokuapp.com/Lipistics/${id}`)
      .then((res) => res.json())
      .then((data) => setlipstick(data));
  }, []);

  const onSubmit = (data) => {
    const orderdetails = {
      ...data,
      ...lipstipck,
    };
    delete orderdetails._id;

    axios
      .post("https://ancient-beyond-64067.herokuapp.com/orders", orderdetails)
      .then((res) => {
        alert("Added successfully");
        reset();
      })
      .then((result) => {
        if (result?.insertedId) {
          alert("Order processed successfully");

          reset();
        }
      });
  };

  return (
    <div>
      <Header></Header>

      <div className="conteiner px-5">
        <div className="add-lipstick-container my-5">
          <h2 className="banner-title">
            Shades <span className="banner-span">Of</span> Love
          </h2>

          <h5 className="banner-qutes">
            Purches Your <span className="banner-span">Order</span>{" "}
          </h5>
          <div className="row row-cols-1 my-5 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100  add-lipstick-Imgcard">
                <img
                  src={lipstipck.img}
                  className="card-img-top w-50 mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h4>{lipstipck.name}</h4>
                  <p>
                    <small>{lipstipck.des}</small>
                  </p>
                  <p>Cost : {lipstipck.price}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 add-lipstick-Imgcard">
                <div className="card-body">
                  <form
                    className="addLipstick-form pt-3"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      defaultValue={user.displayName}
                      {...register("userName", { required: true })}
                    />
                    {errors.userName && <span>This field is required</span>}
                    <input
                      defaultValue={user.email}
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}

                    <input
                      defaultValue="Pending"
                      {...register("status", { required: true })}
                    />

                    {errors.status && <span>This field is required</span>}

                    <input placeholder="Address" {...register("address")} />
                    <input placeholder="City" {...register("city")} />
                    <input placeholder="Phone Number" {...register("Phone")} />

                    <input className="add-Lip-btn" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
