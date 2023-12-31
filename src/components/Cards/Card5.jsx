import React from "react";

import card5x1 from "./assets/Add-a-subheading-p-800.png";

const Card5 = () => {
  return (
    <div className="flex md:text-left text-center md:flex-row flex-col-reverse md:py-[100px] py-[60px] md:mx-[150px] mx-4 justify-center gap-10 items-center">
      <div className="flex flex-col gap-3">
        <p>Stats</p>
        <h2 className="text-4xl font-bold">
          Track progress with the help of Graphs
        </h2>
        <p>
          Get Stats that helps to visualize the data generated by your
          activities on Solidhire.
        </p>
      </div>
      <div>
        <img src={card5x1} alt="" />
      </div>
    </div>
  );
};

export default Card5;
