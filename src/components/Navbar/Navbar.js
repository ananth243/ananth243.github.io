import React from "react";
import image from "../../assets/img/me.jpg";

function Navbar() {
  return (
    <div className="relative bg-extra-dark" style={{ minWidth: "100%" }}>
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={image}
            alt="Profile pic"
            className="mx-2 rounded-full h-28"
          />
        </div>
        <ul className=" flex justify-around items-center mx-6 w-80">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
