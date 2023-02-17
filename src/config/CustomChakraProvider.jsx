import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  "light-white": "FAFBFD",
  "light-blue": "B1D0CF",
  dark: "0E0E0E",
  "dark-gray": "5E5E5F",
  "light-grey": "9FA0A0",
  brown: "54392E",
  "light-brown": "C48E64",
};

const styles = {
  global: (props) => ({
    "html, body": {
      //     color: props.colorMode === "dark" ? "light-white" : "light-white",
      backgroundColor: props.colorMode === "dark" ? "dark" : "light-white",
      transitionProperty: "all",
      transitionDuration: "normal",
    },
  }),
};

const theme = extendTheme({
  colors,
  styles,
  config: {
    disableTransitionOnChange: false,
  },
});

export default function CustomChakraProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
