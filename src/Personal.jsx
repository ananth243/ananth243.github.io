import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

function Personal() {
  return (
    <Box
      as={motion.div}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 100 }}
    >
      Contact Projects Interests in sports, talk about your university
    </Box>
  );
}

export default Personal;
