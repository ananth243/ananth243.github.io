import { Avatar, Box, color, Heading, HStack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";

function WorkCard({ company, photo, description, startDate, endDate, index }) {
  console.log(index);
  return (
    index && (
      <Box
        marginTop="2rem"
        borderRadius={"xl"}
        padding="2"
        width="40%"
        backgroundColor={index % 2 == 0 ? "dark.100" : "light.100"}
        color={index % 2 == 0 ? "light.100" : "dark.100"}
      >
        <HStack justifyContent="space-between">
          <Avatar name={company} src={photo} size="xl" />
          <Text>{company}</Text>
        </HStack>
        <Text fontSize='xl'>{description}</Text>
        <Text marginTop='2' textAlign='end'>
          {format(startDate, "LLLL yyyy")} - {format(endDate, "LLLL yyyy")}
        </Text>
      </Box>
    )
  );
}

export default WorkCard;
