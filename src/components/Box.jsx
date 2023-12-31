import React from "react";

const Box = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-[50vh] p-[4rem] gap-2">
      <h1 className="text-5xl text-center">What our users have been saying</h1>
      <div className="bg-gray-100 flex md:flex-row flex-col h-[50vh] p-[4rem] gap-10 ">
        <div className="bg-white w-[700px] flex flex-col justify-between  p-7  gap-7 rounded-xl shadow-xl">
          <h3 className="font-bold">
            "As a early stage startup employee I hardly get time to manage all
            resumes of applicants, SolidHire made it very easy for me"
          </h3>
          <p>Praneet, Revamp Moto</p>
        </div>
        <div className="bg-white w-[700px] flex flex-col justify-between  p-7 gap-10  rounded-xl shadow-xl">
          <h3 className="font-bold">
            "The ability to see all the applicants and their statuses at one
            place helps us make better decisions faster."
          </h3>
          <p>Praneet, Revamp Moto</p>
        </div>
        <div className="bg-white w-[700px] flex flex-col justify-between  p-7 gap-10  rounded-xl shadow-xl">
          <h3 className="font-bold">
            "Having custom career page is much better than having not-so-great
            looking notions page"
          </h3>
          <p>Praneet, Revamp Moto</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
