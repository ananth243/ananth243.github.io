import React from "react";
import { motion } from "framer-motion";
import { Box, Link, Text, Image, Center } from "@chakra-ui/react";

function ProjectCard({ index, name, url, description, company, image }) {
  return (
    <Box background="dark.200">
      <Image src={image} />
      <Center flexDirection='column'>
        {" "}
        <Link href={url} target="_blank">
          {name}
        </Link>
        <Text>{company}</Text>
      </Center>
      <Text>{description}</Text>
    </Box>
  );
}

export default ProjectCard;
