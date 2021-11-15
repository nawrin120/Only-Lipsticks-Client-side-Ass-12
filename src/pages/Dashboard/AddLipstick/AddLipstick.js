import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddLipstick.css";

const AddLipstick = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://ancient-beyond-64067.herokuapp.com/Lipistics", data)
      .then((res) => {
        alert("Added successfully");
        reset();
      });
  };

  return (
    <div className="add-lipstick-container my-5">
      <h2 className="banner-title">
        Shades <span className="banner-span">Of</span> Love
      </h2>

      <h5 className="banner-qutes">
        Add New<span className="banner-span">Lipsticks</span>{" "}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100  add-lipstick-Imgcard">
            <div className="card-body">
              <img
                src="https://i.ibb.co/RT7wqJT/new.png"
                className="card-img-top w-75"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 add-lipstick-Imgcard">
            <div className="card-body">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="addLipstick-form"
              >
                <input {...register("img")} placeholder="Image Url" />
                <input
                  {...register("name", { required: true, maxLength: 40 })}
                  placeholder="Name"
                />
                <textarea
                  className="addLip-text"
                  {...register("description")}
                  placeholder="Description"
                />
                <input
                  type="text"
                  {...register("finish")}
                  placeholder="Finish"
                />
                <input
                  type="text"
                  {...register("skintone")}
                  placeholder="Skintone"
                />
                <input type="text" {...register("price")} placeholder="Price" />

                <input className="add-Lip-btn" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLipstick;
