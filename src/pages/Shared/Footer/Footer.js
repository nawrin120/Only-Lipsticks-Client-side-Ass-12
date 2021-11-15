import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <div className="card h-100 mx-auto footer-card">
              <img
                className="header-logo mx-auto"
                src="https://i.ibb.co/YWBTHwJ/makeup.png"
                alt=""
              />
              <div className="card-body">
                <h4 className="banner-title">
                  Shades <span className="banner-span">Of</span> Love
                </h4>
                <h6 className="banner-qutes">Believe In the</h6>

                <h5 className="banner-qutes">
                  Power of <span className="banner-span">Lipstick</span>{" "}
                </h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 footer-card ">
              <div className="card-body text-start ps-4">
                <h5 className="card-title">Contact Us</h5>
                <p>
                  <i className="fas fa-map-marker-alt me-2"></i>{" "}
                  <span>2nd Floor Polowel Market, Shonirakhra , Dahaka</span>
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i> <span>01995-67890</span>
                </p>
                <p>
                  <i className="fas fa-envelope me-4"></i>{" "}
                  <span>shadesof@loves.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 footer-card">
              <div className="card-body text-start ps-4">
                <h5 className="card-title">Information</h5>
                <p>
                  <i className="fas fa-info me-2"></i> Delivery Information{" "}
                </p>
                <p>
                  {" "}
                  <i className="fas fa-plane-arrival me-2"></i>Privacy Policy
                </p>
                <p>
                  <i className="fas fa-meteor me-2"></i>Manufactures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="mb-4">FOLLOW US ON SOCIAL MEDIA</h4>
        <div className="social-media">
          <Link to="#">
            {" "}
            <i className="fab fa-facebook"></i>{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fab fa-twitter"></i>{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fab fa-whatsapp"></i>{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fab fa-instagram"></i>{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fab fa-youtube"></i>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
