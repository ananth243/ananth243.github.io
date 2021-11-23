import React from "react";
import Card from "../Card/Card";
import Quickstart from "../../assets/videos/Quickstart.webm";
import Inventory from "../../assets/videos/inventory.mp4";
import Profstats from "../../assets/videos/Profstats.webm";

function Projects() {
  return (
    <div id="projects">
      <p className="text-center text-xl mt-5 font-mono">
        I'm pursuing a B.E in Electronics and Instrumentation in BITS Goa and
        currently in my sophomore year. I am proficient in JS, CSS and Python.
      </p>
      <h5 className="text-center text-xl  font-mono my-5">
        These are my previous projects
      </h5>
      <div className="mx-10 grid grid-cols-auto gap-14">
        <Card
          name={"Quickstart"}
          video={Quickstart}
          github="https://github.com/ananth243/quickstart"
          url="https://bp-gc.in/quickstart"
        />
        <Card
          name={"Inventory"}
          video={Inventory}
          url="https://bp-gc.in/inventory"
          github="https://github.com/ananth243/WebD-Verti-Final"
        />
        <Card
          name={"Profstats"}
          video={Profstats}
          url="https://bp-gc.in/profstats"
          github="https://github.com/ananth243/profstats"
        />
      </div>
    </div>
  );
}

export default Projects;
