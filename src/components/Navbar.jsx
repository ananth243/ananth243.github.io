import React, { createContext, useContext, useReducer } from "react";
import {
  HStack,
  IconButton,
  ListItem,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { ColorMode } from "./ColorMode";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Resume from "../assets/Dev.pdf";

const defaultState = {
  home: false,
  projects: false,
  experience: false,
};

const NavContext = createContext();

export function useNavState() {
  return useContext(NavContext);
}

function Navbar({ children }) {
  const toast = useToast();
  function reducer(state, action) {
    switch (action) {
      case "home":
        return { ...defaultState, home: true };
      case "projects":
        return { ...defaultState, projects: true };
      case "experience":
        return { ...defaultState, experience: true };
      default:
        return defaultState;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    ...defaultState,
    home: true,
  });

  return (
    <NavContext.Provider value={state}>
      <HStack
        justifyContent="space-around"
        padding="2.5"
        position={"fixed"}
        width="100%"
      >
        <HStack gap="8">
          <IconButton
            cursor="pointer"
            as={FaEnvelope}
            size="sm"
            onClick={() => {
              navigator.clipboard.writeText("raghavananth02@gmail.com");
              toast({
                title: "Email copied",
                status: "success",
                duration: 4000,
                position: "top",
                isClosable: true,
              });
            }}
          />
          <ColorMode />
        </HStack>
        <UnorderedList
          display="flex"
          listStyleType={"none"}
          justifyContent="space-evenly"
          width={"24rem"}
        >
          <ListItem
            cursor={"pointer"}
            opacity={state.home ? "1" : "0.7"}
            onClick={() => dispatch("home")}
            as={motion.li}
            whileHover={{ scale: 1.2 }}
          >
            Home
          </ListItem>
          <ListItem
            cursor={"pointer"}
            opacity={state.projects ? "1" : "0.7"}
            onClick={() => dispatch("projects")}
            as={motion.li}
            whileHover={{ scale: 1.2 }}
          >
            Projects
          </ListItem>
          <ListItem
            cursor={"pointer"}
            opacity="0.7"
            as={motion.li}
            onClick={() => window.open(Resume, "Download")}
            whileHover={{ opacity: 0.9, scale: 1.2 }}
          >
            Resume
          </ListItem>
        </UnorderedList>
      </HStack>
      {children}
    </NavContext.Provider>
  );
}

export default Navbar;
