import React from "react";
import image from "../../assets/img/me.jpg";

function Profile() {
  return (
    <div className="bg-gray-600 rounded-b-md fixed top-0" style={{width:'100vw'}}>
      <div className="flex justify-between">
       <div className="flex">
       <img src={image} alt="Profile pic" className="mx-2 rounded-full h-28" />
       </div>
        <ul className="text-white flex justify-around items-center w-80">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
