import { Avatar, Box, HStack, ListItem, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";

function WorkCard({ company, role, description, index }) {
  return (
    <ListItem
      gridColumn={index % 2 == 0 ? "1" : "3"}
      marginInline="1.5rem"
      gridRow={index == 1 ? "2/4" : "span 2"}
      display="grid"
      gridTemplateRows="min-content min-content min-content"
      style={{ "--accent-color": "#4CADAD" }}
      _notLast={{ marginBottom: "2rem" }}
    >
      <Title index={index}>{company}</Title>
      <Role>{role}</Role>
      <Description>{description}</Description>
    </ListItem>
  );
}

function Title({ children, index }) {
  let before = {
    content: `""`,
    width: "1.5rem",
    aspectRatio: "1",
    background: "#4CADAD",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent)",
    position: "absolute",
    top: "100%",
    clipPath:
      index % 2 == 0
        ? "polygon(0 0, 100% 0, 100% 100%)"
        : "polygon(0 0, 100% 0, 0 100%)",
    right: "0",
  };
  let after = {
    content: `""`,
    position: "absolute",
    width: "2rem",
    aspectRatio: "1",
    background: "rgba(245, 245, 245)",
    border: "0.3rem solid #4CADAD",
    borderRadius: "50%",
    top: "50%",
    transform:
      index % 2 == 0 ? "translate(-50%, -50%)" : "translate(50%, -50%)",
    right: "calc(100% + 2rem + 0.125rem)",
  };
  if (index % 2 == 0) {
    before = { ...before, left: 0 };
    after = { ...after, left: "calc(100% + 2rem + 0.125rem)" };
  }
  return (
    <Box
      height="3rem"
      marginInline="-1.5rem"
      textAlign="center"
      backgroundColor="#4CADAD"
      color="white"
      fontSize="1.25rem"
      fontWeight="700"
      display="grid"
      placeContent="center"
      position="relative"
      borderRadius={index % 2 != 0 ? "1.5rem 0 0 1.5rem" : "0 1.5rem 1.5rem 0"}
      _before={before}
      _after={after}
    >
      {children}
    </Box>
  );
}

function Role({ children }) {
  return (
    <Box
      overflow="hidden"
      paddingBlockStart="1.5rem"
      paddingBlockEnd="1rem"
      fontWeight="500"
      backgroundColor="rgba(245, 245, 245)"
      position="relative"
      paddingInline="1.5rem"
      _before={{
        content: `""`,
        position: "absolute",
        width: "90%",
        height: "0.5rem",
        background: "rgba(0, 0, 0, 0.5)",
        left: "50%",
        borderRadius: "50%",
        filter: "blur(4px)",
        transform: "translate(-50%, 50%)",
        bottom: "calc(100% + 0.125rem)",
      }}
    >
      {children}
    </Box>
  );
}

function Description({ children }) {
  return (
    <Box
      backgroundColor="rgba(245, 245, 245)"
      position="relative"
      paddingInline="1.5rem"
      paddingBlockEnd="1.5rem"
      fontWeight="300"
      _before={{
        content: `""`,
        position: "absolute",
        width: "90%",
        height: "0.5rem",
        background: "rgba(0, 0, 0, 0.5)",
        left: "50%",
        borderRadius: "50%",
        filter: "blur(4px)",
        transform: "translate(-50%, 50%)",
        zIndex: "-1",
        bottom: "0.25rem",
      }}
    >
      {children}
    </Box>
  );
}

export default WorkCard;
