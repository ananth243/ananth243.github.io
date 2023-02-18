import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

function CustomSVG() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <Box position="absolute" height={"100%"}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 800 800"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          strokeWidth="1rem"
          strokeLinecap="round"
          fill="transparent"
          x1="400"
          y1="90"
          x2="400"
          y2="790"
          stroke="#00cc88"
          variants={draw}
          custom={2.5}
        />
      </motion.svg>
    </Box>
  );
}

export default CustomSVG;
