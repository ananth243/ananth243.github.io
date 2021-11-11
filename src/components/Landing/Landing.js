import React from "react";
import "./Landing.css";
import Typewriter from "typewriter-effect";

function Navbar() {
  setTimeout(() => {
    document.getElementById("landing").style.height = 0;
    document.getElementById("landing").style.display = "none";
  }, 14000);
  return (
    <div
      id="landing"
      className="flex items-center justify-center"
      style={{ height: "100vh" }}
    >
      <p id="intro" className="text-center text-4xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Hey there. My name is Ananth Raghav and I'm a full stack developer from BITS Goa."
              )
              .start();
          }}
        />
      </p>
    </div>
  );
}

export default Navbar;
