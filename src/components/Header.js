import React from "react";
import background from "../assets/hawaii_resting.jpg";
import Navbar from "../components/Navbar";

function Header({ title, subTitle }) {
  return (
    <header
      className="relative h-[667px] bg-cover bg-center"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-7xl font-bold">{title}</h1>
        {subTitle && <h2 className="text-3xl font-bold">{subTitle}</h2>}
      </div>
    </header>
  );
};

export default Header;
