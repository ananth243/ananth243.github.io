import { Avatar, Box, color, Heading, HStack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";

function WorkCard({
  url,
  company,
  photo,
  description,
  startDate,
  endDate,
  scaleX,
  index,
}) {
  const bg = useColorModeValue("light.200", "dark.200");
  const color = useColorModeValue("dark.100", "light.100");
  const footer = useColorModeValue("purple.800", "gray.400");
  return (
    index && (
      <Box
        as={motion.div}
        x={scaleX}
        right={index % 2 == 0 ? "0" : ""}
        display="flex"
        padding="4"
      >
        <Box
          as={motion.div}
          cursor="pointer"
          onClick={() => window.open(url, "_blank")}
          transitionDuration="150ms"
          whileHover={{ boxShadow: "2px" }}
          marginTop="2rem"
          borderRadius={"xl"}
          textOverflow="unset"
          padding="4"
          width="46rem"
          backgroundColor={bg}
          color={color}
        >
          <HStack justifyContent="space-between">
            <Avatar name={company} src={photo} size="xl" />
            <Text textTransform={"capitalize"} fontWeight="bold" fontSize="xl">
              {company}
            </Text>
          </HStack>
          <Text fontSize="xl" marginTop="4">
            {description}
          </Text>
          <Text marginTop="2" textAlign="end" color={footer}>
            {format(startDate, "LLLL yyyy")} - {format(endDate, "LLLL yyyy")}
          </Text>
        </Box>
      </Box>
    )
  );
}

export default WorkCard;
