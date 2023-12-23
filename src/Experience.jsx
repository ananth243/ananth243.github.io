import { Box, Center, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { work } from "./util/exp";
import WorkCard from "./components/WorkCard";
import { motion } from "framer-motion";

function Experience() {
  return (
    <Center
      paddingTop="4%"
      as={motion.div}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 100, ease: "ease-out" }}
    >
      <UnorderedList
        display="grid"
        gridTemplateColumns="1fr 0.25rem 1fr"
        gridAutoColumns="max-content"
        columnGap="2rem"
        listStyle="none"
        width="min(60rem, 90%)"
        marginInline="auto"
        marginBottom="2rem"
        _before={{
          content: `""`,
          gridColumn: "2",
          gridRow: "1 / span 20",
          background: "teal",
          borderRadius: "0.125rem",
        }}
      >
        {work.map((exp, index) => (
          <WorkCard {...exp} index={index} color="light.200" />
        ))}
      </UnorderedList>
    </Center>
  );
}

export default Experience;
