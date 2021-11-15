import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="container">
        <div className="row">
          <div className=" col-12 col-lg-6">
            <div className="banner-left">
              <img
                className="w-25 mb-5"
                src="https://i.ibb.co/YWBTHwJ/makeup.png"
                alt=""
              />
              <h2 className="banner-title">
                Shades <span className="banner-span">Of</span> Love
              </h2>
              <h5 className="banner-qutes">Believe In the</h5>

              <h5 className="banner-qutes">
                Power of <span className="banner-span">Lipstick</span>{" "}
              </h5>
            </div>
          </div>
          <div className="col-12 col-md-6 banner-png">
            <img src="https://i.ibb.co/BVK0zKC/b2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
