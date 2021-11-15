import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Explore from "./Explore";
import "./Explores.css";

const Explores = () => {
  const [lipsticks, setLipsticks] = useState([]);

  useState(() => {
    fetch("https://ancient-beyond-64067.herokuapp.com/Lipistics")
      .then((res) => res.json())
      .then((data) => setLipsticks(data));
  }, []);
  return (
    <div>
      <Header></Header>

      <div id="lipsticks" className="container">
        <h6 className="banner-qutes mt-5">
          Our Colors <span className="banner-span ">Matching</span> Your Moods{" "}
          <span>....</span>{" "}
        </h6>

        <h2 className="banner-title my-5">
          Supper Lastrous <span className="banner-span">Lipsticks</span>
        </h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {lipsticks.map((lipstick) => (
            <Explore key={lipstick._id} lipstick={lipstick}></Explore>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Explores;
