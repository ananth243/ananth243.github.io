import React from "react";
import "./Landing.css";
import Typewriter from "typewriter-effect";

function Navbar() {
  return (
    <div
      id="landing"
      className="flex items-center justify-center"
      style={{ height: "100vh" }}
    >
      <p id="intro" className="text-center text-4xl">
        <Typewriter
          options={{
            delay: 50,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Hey there. I'm Ananth Raghav and I'm a full stack developer from BITS Goa."
              )
              .start();
          }}
        />
      </p>
    </div>
  );
}

export default Navbar;
