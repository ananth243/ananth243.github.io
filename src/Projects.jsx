// Photos from https://citizenofnowhe.re/lines-of-the-city
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Project from "./components/Project";
import { projects } from "./util/exp";
import AnimateName from "./components/AnimateName";
import { useEffect, useState } from "react";

export default function Projects() {
  const footerBackground = useColorModeValue("dark.100", "light.100");
  const { scrollYProgress } = useScroll();
  const [sign, setSign] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest==1) setSign(true);
    else setSign(false);
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {projects.map((project, index) => (
        <Project index={index} key={index} {...project} />
      ))}
      <Box
        as={motion.div}
        background={footerBackground}
        style={{
          scaleX,
          position: "fixed",
          left: 0,
          right: 0,
          height: "5px",
          bottom: "100px",
        }}
      />
      {sign && (
        <Box position={"fixed"} style={{ right: "5px", bottom: "20px" }}>
          <AnimateName />
        </Box>
      )}
    </Box>
  );
}
