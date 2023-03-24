import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import AnimateName from "./components/AnimateName";
import { projects } from "./util/exp";

function MobileView() {
  useEffect(() => {
    document.querySelector("html").style.scrollSnapType = "y mandatory";
    return () => (document.querySelector("html").style.scrollSnapType = "none");
  }, []);
  const footerBackground = useColorModeValue("dark.100", "light.100");
  const { scrollYProgress } = useScroll();
  const [sign, setSign] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest == 1) setSign(true);
    else setSign(false);
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Box
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {projects.map(({ name, photo, url, description }) => (
          <Flex
            flexDirection="column"
            scrollSnapAlign="center"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            padding="4"
          >
            <Image src={photo} borderRadius="xl" />
            <Flex alignItems="center" flexDirection="column">
              <Link fontSize="2xl" target="_blank" href={url}>
                {name}
              </Link>
              <Text fontSize="xl" textAlign={"center"}>
                {description}
              </Text>
            </Flex>
          </Flex>
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
        {sign && <AnimateName sign={sign} />}
      </Box>
    </>
  );
}

export default MobileView;
