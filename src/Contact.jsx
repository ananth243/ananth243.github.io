import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <Box
      as={motion.div}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 100, ease: "ease-out" }}
    >
      Contact
    </Box>
  );
}

export default Contact;
