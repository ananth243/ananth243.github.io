import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  light: {
    100: "#FAFBFD",
    200: "#f2f2f2",
    300: "#9FA0A0",
  },
  dark: {
    100: "#0E0E0E",
    200: "#0E1216",
    300: "#5E5E5F",
  },
  brown: "#54392E",
  "light-brown": "#C48E64",
};

const styles = {
  global: (props) => ({
    "html, body": {
      //     color: props.colorMode === "dark" ? "light-white" : "light-white",
      backgroundColor: props.colorMode === "dark" ? "dark.100" : "light.100",
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
