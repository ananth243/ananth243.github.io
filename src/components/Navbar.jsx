import React from "react";
import {
  HStack,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ColorMode } from "./ColorMode";
import { FaEnvelope } from "react-icons/fa";

function Navbar({ children }) {
  return (
    <>
      <HStack justifyContent="space-around" padding="2.5">
        <HStack>
          <IconButton as={FaEnvelope} size="sm" />
          <Text>raghavananth02@gmail.com</Text>
          <ColorMode />
        </HStack>
        <UnorderedList
          display="flex"
          listStyleType={"none"}
          justifyContent="space-evenly"
          width={"80"}
        >
          <ListItem>Work</ListItem>
          <ListItem>Resume</ListItem>
          <ListItem>Personal</ListItem>
          <ListItem>Contact</ListItem>
        </UnorderedList>
      </HStack>
      {children}
    </>
  );
}

export default Navbar;
