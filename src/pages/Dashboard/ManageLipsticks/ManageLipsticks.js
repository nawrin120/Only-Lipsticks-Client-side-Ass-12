import React, { useEffect, useState } from "react";
import ManageLipstick from "./ManageLipstick";

const ManageLipsticks = () => {
  const [lipsticks, setLipsticks] = useState([]);

  useEffect(() => {
    fetch("https://ancient-beyond-64067.herokuapp.com/Lipistics")
      .then((res) => res.json())
      .then((data) => setLipsticks(data));
  }, [lipsticks]);

  const handleDeleteLipstick = (id) => {
    const url = `https://ancient-beyond-64067.herokuapp.com/Lipistics/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Do you want to delete?");
          const remaining = lipsticks.filter(
            (lipstick) => lipstick?._id !== id
          );
          setLipsticks(remaining);
        }
      });
  };

  return (
    <div>
      <div id="lipsticks" className="container">
        <h2 className="banner-title">
          Shades <span className="banner-span">Of</span> Love
        </h2>

        <h5 className="banner-qutes">
          Mange All <span className="banner-span">Lipsticks</span>{" "}
        </h5>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {lipsticks.map((lipstick) => (
            <ManageLipstick
              key={lipstick._id}
              lipstick={lipstick}
              handleDeleteLipstick={handleDeleteLipstick}
            ></ManageLipstick>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageLipsticks;
