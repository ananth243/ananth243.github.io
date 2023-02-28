import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Devsoc from "./assets/devsoc.png";
import IRCS from "./assets/ircs.png";
import WorkCard from "./components/WorkCard";
import Sandbox from "./assets/Sandbox.jpg";
function Work() {
  const experience = [
    {
      company: "Developer's Society BITS Goa",
      photo: Devsoc,
      url: "https://github.com/Devsoc-BPGC",
      description:
        "Worked as a senior developer in this group of talented people. Worked mostly on backend development using Nodejs and Typescript with Mongodb and Postgresql as occasional databases. I worked on the backend for CSA times, an app that has over 2000 registered users, Melange and Short Me, a URL Shortner for the university.",
      startDate: new Date(2021, 0),
      endDate: new Date(2022, 9),
    },
    {
      company: "Indian Red Cross Society",
      photo: IRCS,
      url: "https://redcrosskarnataka.org/",
      description:
        "Worked as a summer intern devloping a backend application to facilitate the organisation's needs. Used Django in the process",
      startDate: new Date(2022, 6),
      endDate: new Date(2022, 7),
    },
    {
      company: "Sandbox Committee",
      photo: Sandbox,
      url: "https://bpgc-sandbox.github.io/",
      description:
        "Was part of the student led management committee that maintained the incubation centre of our university. The centre has many equipments such as 3d laser printers, laser cutters, plasma cutters and anything else that fostered innovation.",
      startDate: new Date(2022, 2),
      endDate: new Date(2023, 1),
    },
  ];
  return (
    <Box
      as={motion.div}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 100, ease: "ease-out" }}
      paddingBottom="6"
    >
      {experience.map((exp, index) => (
        <WorkCard {...exp} index={index + 1} key={index} />
      ))}
    </Box>
  );
}

export default Work;
