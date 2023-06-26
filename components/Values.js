import React from "react";
// import Contact from './Contact'

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        WHY CHOOSE US
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Our Values
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Technologies</p>
          <p className="text-gray-500 text-center">
            Technologies We Cover <br />
            We deliver best-in-class corporate training for <br /> employees
            working at different levels on emerging technologies like Cloud, AI
            & ML, Big Data, Blockchain, etc.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-semibold">
            Capability Development Framework
          </p>
          <p className="text-gray-500 text-center">
            Our holistic learning solution <br /> called Capability Development
            Framework helps companies build a <br /> cloud-savvy workforce
            within 1- 60 days.
          </p>
        </div>{" "}
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Experiential Learning</p>
          <p className="text-gray-500 text-center">
            Are you not sure whether your <br />
            employees are deployable or billable? <br />
            CloudThat’s Experiential learning program can help test the project
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Values;
