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

const fonts = {
  body: "Montserrat",
  heading:"Cormorant Garamond"
};

const config = {
  disableTransitionOnChange: false,
  initialColorMode: 'dark'
};

const theme = extendTheme({
  colors,
  styles,
  config,
  fonts,
  components,
});

export default function CustomChakraProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
