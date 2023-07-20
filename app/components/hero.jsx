import React from "react";

const Hero = ({ text, backgroundImage }) => {
  return (
    <div
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative z-10 text-4xl text-white">{text}</h1>
    </div>
  );
};

export default Hero;
