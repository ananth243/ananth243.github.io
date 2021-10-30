import React from "react";
import image from "../../assets/img/me.jpg";

function Profile() {
  return (
    <div className="bg-gray-600" style={{ minWidth: "100vw" }}>
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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
