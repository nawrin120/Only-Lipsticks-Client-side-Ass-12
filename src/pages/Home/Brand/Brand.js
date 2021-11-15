import React from "react";
import "./Brand.css";

const Brand = () => {
  return (
    <div>
      <div className=" brand-bg">
        <h2 className="brand-title py-5">OUR BRANDS</h2>
        <div className="row">
          <div className="col-12 col-md-9 ps-4">
            <div className="row row-cols-1 row-cols-md-2 g-4 ">
              <div className="col">
                <div className="card h-100 brand-card">
                  <div className="card-body">
                    <img
                      src="https://i.ibb.co/bXBKg21/lp1.png"
                      className="card-img-top  brand-img"
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 brand-card">
                  <div className="card-body">
                    <img
                      src="https://i.ibb.co/XjqjtNW/lp2.png"
                      className="card-img-top brand-img"
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 brand-card">
                  <div className="card-body">
                    <img
                      src="https://i.ibb.co/ypmb4WY/lp3.png"
                      className="card-img-top  brand-img"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 brand-card">
                  <div className="card-body">
                    <img
                      src="https://i.ibb.co/JFvKwXY/lp4.png"
                      className="card-img-top  brand-img"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
