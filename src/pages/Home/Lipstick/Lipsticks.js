import React, { useState } from "react";
import Lipstick from "./Lipstick";
import "./Lipsticks.css";

const Lipsticks = () => {
  const [lipsticks, setLipsticks] = useState([]);

  useState(() => {
    fetch("https://ancient-beyond-64067.herokuapp.com/Lipistics")
      .then((res) => res.json())
      .then((data) => setLipsticks(data.slice(0, 6)));
  }, []);
  return (
    <div id="lipsticks" className="container my-5">
      <h2 className="banner-title">
        New <span className="banner-span">Arrivals</span>
      </h2>
      <h5 className="banner-qutes">
        Just <span className="banner-span">In</span> Now{" "}
      </h5>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {lipsticks.map((lipstick) => (
          <Lipstick key={lipstick._id} lipstick={lipstick}></Lipstick>
        ))}
      </div>
    </div>
  );
};

export default Lipsticks;
