import { Avatar, Box, color, Heading, HStack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";

function WorkCard({
  url,
  company,
  photo,
  description,
  startDate,
  endDate,
  index,
}) {
  const bg = useColorModeValue("light.200", "dark.200");
  const color = useColorModeValue("dark.100", "light.100");
  const footer = useColorModeValue("purple.800", "gray.400");
  return (
    index && (
      <Box
        as={motion.div}
        initial={{ x: 0 }}
        cursor="pointer"
        onClick={() => window.open(url, "_blank")}
        boxShadow="rgba(0, 0, 0, 0.15) 1rem 1rem rem 1rem"
        animate={{ x: index % 2 == 1 ? "-60%" : "50%" }}
        transitionDuration="150ms"
        whileHover={{ boxShadow: "2px" }}
        marginTop="2rem"
        borderRadius={"xl"}
        padding="4"
        width="40%"
        backgroundColor={bg}
        color={color}
      >
        <HStack justifyContent="space-between">
          <Avatar name={company} src={photo} size="xl" />
          <Text textTransform={"capitalize"} fontWeight='bold' fontSize="xl">
            {company}
          </Text>
        </HStack>
        <Text fontSize="xl">{description}</Text>
        <Text marginTop="2" textAlign="end" color={footer}>
          {format(startDate, "LLLL yyyy")} - {format(endDate, "LLLL yyyy")}
        </Text>
      </Box>
    )
  );
}

export default WorkCard;
