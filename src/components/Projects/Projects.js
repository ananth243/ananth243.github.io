import React from "react";
import Card from "../Card/Card";
import Quickstart from "../../assets/img/Quickstart.webm";
import Inventory from "../../assets/img/Inventory.m4v";
import Profstats from "../../assets/img/Profstats.webm";

function Projects() {
  return (
    <div id="projects">
      <h5 className="text-center text-xl  font-mono my-5">
        These are my previous projects
      </h5>
      <div className="mx-10 grid grid-cols-auto gap-14">
        <Card
          name={"Quickstart"}
          video={Quickstart}
          url="https://bp-gc.in/quickstart"
        />
        <Card
          name={"Inventory"}
          video={Inventory}
          url="https://bp-gc.in/inventory"
        />
        <Card
          name={"Profstats"}
          video={Profstats}
          url="https://bp-gc.in/profstats"
        />
      </div>
    </div>
  );
}

export default Projects;
