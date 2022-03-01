import React from "react";
import Card from "../Card/Card";
import Quickstart from "../../assets/videos/Quickstart.webm";
import Backend from "../../assets/videos/backend.webm";
import Profstats from "../../assets/videos/Profstats.webm";

function Projects() {
  return (
    <div id="projects">
      <p className="text-center text-xl mt-5 font-mono">
        I'm pursuing a B.E in Electronics and Instrumentation in BITS Goa and
        currently in my sophmore year.I'm more inclined towards backend development.
      </p>
      <h5 className="text-center text-xl  font-mono my-5">
        These are some of my previous projects
      </h5>
      <div className="mx-10 grid grid-cols-auto gap-14">
        <Card
          name={"Quickstart"}
          video={Quickstart}
          github="https://github.com/ananth243/quickstart"
          url="https://bp-gc.in/quickstart"
        />
        <Card
          name={"Backend Practice Questions"}
          video={Backend}
          github="https://github.com/ananth243/web-dev-concepts"
          url="https://backend.ananth243.xyz"
        />
        <Card
          name={"Profstats"}
          video={Profstats}
          github="https://github.com/ananth243/profstats"
        />
      </div>
    </div>
  );
}

export default Projects;
