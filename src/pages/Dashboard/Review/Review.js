import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://ancient-beyond-64067.herokuapp.com/reviews", data)
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
        Please Give Your <span className="banner-span">Reviews</span>{" "}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 my-4 g-4">
        <div className="col">
          <div className="card h-100  add-lipstick-Imgcard">
            <div className="card-body">
              <img
                src="https://i.ibb.co/606HFXK/review-icon-12.png"
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
                <input
                  defaultValue={user.displayName}
                  {...register("name", { required: true })}
                />
                {errors.userName && <span>This field is required</span>}
                <input
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}

                <textarea
                  {...register("description")}
                  placeholder="Description"
                />
                <input
                  //   type="formattedValue"
                  type="number"
                  {...register("rating")}
                  placeholder="Rating"
                  min="0"
                  max="5"
                />

                <input className="add-Lip-btn" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="add-car my-5">
    //   <h2 className="car-2nd-title">
    //     Welcome to <span className="wb-name"> The car land </span>{" "}
    //   </h2>

    //   <h2 className="car-2nd-title">
    //     Please Provide Your Valueable <span>Feedbacks.</span>
    //   </h2>
    //   <div className="container my-5">
    //     <div className="row">
    //       <div className="col-12 col-md-5">
    //         {" "}
    //         <img
    //           className="w-100"
    //           src="https://i.ibb.co/606HFXK/review-icon-12.png"
    //           alt=""
    //         />
    //       </div>

    //       <div className="col-12 col-md-7 review-form">
    //         <form onSubmit={handleSubmit(onSubmit)} className="review-input">
    //           <input
    //             defaultValue={user.displayName}
    //             {...register("name", { required: true })}
    //           />
    //           {errors.userName && <span>This field is required</span>}
    //           <input
    //             defaultValue={user.email}
    //             {...register("email", { required: true })}
    //           />
    //           {errors.email && <span>This field is required</span>}

    //           <textarea
    //             {...register("description")}
    //             placeholder="Description"
    //           />
    //           <input
    //             //   type="formattedValue"
    //             type="number"
    //             {...register("rating")}
    //             placeholder="Rating"
    //             min="0"
    //             max="5"
    //           />

    //           <input className="form-btn" type="submit" />
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Review;
