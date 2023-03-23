import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../config/colors";

const styles = {
  global: (props) => ({
    "html, body": {
      backgroundColor: props.colorMode === "dark" ? "dark.100" : "light.100",
      transitionProperty: "all",
      transitionDuration: "normal",
    },
  }),
};

const components = {
  Modal: {
    baseStyle: (props) => ({
      dialog: {
        bg: props.colorMode === "dark" ? "dark.200" : "light.200",
      },
    }),
  },
};

const config = {
  disableTransitionOnChange: false,
};

const theme = extendTheme({
  colors,
  styles,
  config,
  components
});

export default function CustomChakraProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
