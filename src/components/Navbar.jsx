import React, { createContext, useContext, useReducer } from "react";
import {
  HStack,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ColorMode } from "./ColorMode";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Resume from "../assets/Dev.pdf";

const defaultState = {
  home: false,
  personal: false,
  work: false,
};

const NavContext = createContext();

export function useNavState() {
  return useContext(NavContext);
}

function Navbar({ children }) {
  function reducer(state, action) {
    switch (action) {
      case "home":
        return { ...defaultState, home: true };
      case "work":
        return { ...defaultState, work: true };
      case "personal":
        return { ...defaultState, personal: true };
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
            opacity={state.work ? "1" : "0.7"}
            onClick={() => dispatch("work")}
            as={motion.li}
            whileHover={{ scale: 1.2 }}
          >
            Work
          </ListItem>
          <ListItem
            cursor={"pointer"}
            opacity={state.personal ? "1" : "0.7"}
            onClick={() => dispatch("personal")}
            as={motion.li}
            whileHover={{ scale: 1.2 }}
          >
            Personal
          </ListItem>
          <ListItem
            cursor={"pointer"}
            opacity="0.7"
            as={motion.li}
            onClick={() => window.open(Resume, "_blank")}
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
