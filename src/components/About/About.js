import React from "react";
import pic from "../../assets/img/campus.jpeg";

function About() {
  return (
    <div id="about">
      <div className="mt-28 text-black flex text-center justify-around absolute top-4 left-8 right-5">
        <p>
          I'm a full stack web developer currently in my sophmore year pursuing
          an Electronics degree in Engineering from BITS Pilani. I'm an avid
          reader of books and I love development. If you like my projects hit me
          up for any gigs. I am proficient in nodejs and python.
        </p>
      </div>
      <div className="flex">
        <img src={pic} className="md:img-fluid" alt="bits" />
      </div>
    </div>
  );
}

export default About;
