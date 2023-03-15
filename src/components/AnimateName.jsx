import React from "react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";
function AnimateName() {
  const {colorMode} = useColorMode();
  // const svgVariants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   reached: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //     },
  //   },
  // };
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    reached: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <motion.svg
        width="66"
        height="58"
        viewBox="0 0 66 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="reached"
          exit="hidden"
          d="M5.62701 56.4592C1.23272 56.4592 16.4401 40.8863 18.9286 37.1534C24.0329 29.497 29.6004 21.3622 33.8929 13.229C34.8266 11.46 38.3399 0.943081 38.7886 2.51383C40.7759 9.46928 41.2981 18.2193 42.9454 25.5145C44.5843 32.7725 43.0515 38.1145 47.1945 44.4508C49.0781 47.3317 50.8818 54.199 45.5318 51.1016C38.8376 47.226 33.6718 41.942 26.226 38.9085C21.4791 36.9746 16.7601 34.9928 12.0007 33.0891C10.6692 32.5564 1.16078 29.4019 1.83974 29.0247C6.91165 26.2069 18.7495 25.9323 24.6557 25.2374C33.285 24.2222 44.6254 20.5041 53.1063 21.6349C57.2454 22.1868 64.416 21.6309 63.452 21.912C58.0924 23.4752 54.6116 26.7675 50.1504 29.856C44.3078 33.9009 5.93203 57.0693 5.62701 56.4592Z"
          stroke={colorMode==="dark"?"white":"black"}
          stroke-width="10"
          stroke-linecap="round"
        />
      </motion.svg>
    </>
  );
}

export default AnimateName;
