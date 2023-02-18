import React from "react";
import { motion } from "framer-motion";
import { Box, Center } from "@chakra-ui/react";
import Devsoc from "./assets/devsoc.png";
import IRCS from "./assets/ircs.png";
import WorkCard from "./components/WorkCard";
import Sandbox from "./assets/Sandbox.jpg";

function Work() {
  const experience = [
    {
      company: "Developer's Society BITS Goa",
      photo: Devsoc,
      description:
        "Worked as a senior developer in this group of talented people. Worked mostly on backend development using Nodejs and Typescript with Mongodb and Postgresql as occasional databases. I worked on the backend for CSA times, an app that has over 2000 registered users, Melange and Short Me, a url shortner for the university.",
      startDate: new Date(2021, 0),
      endDate: new Date(2022, 9),
    },
    {
      company: "Indian Red Cross Society",
      photo: IRCS,
      description:
        "Worked as a summer intern devloping a backend application to facilitate the organisation's needs",
      startDate: new Date(2022, 6),
      endDate: new Date(2022, 7),
    },
    {
      company: "Sandbox Committee",
      photo: Sandbox,
      description:
        "Was part of the student led management committee that maintained the incubation centre of our university",
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
    >
      <Center
        passing="10"
        display="flex"
        flexDirection="column"
      >
        {experience.map((exp, index) => (
          <WorkCard {...exp} index={index+1} key={index} />
        ))}
      </Center>
    </Box>
  );
}

export default Work;
