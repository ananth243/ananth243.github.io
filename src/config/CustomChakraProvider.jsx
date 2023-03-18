import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {colors} from '../config/colors'

const styles = {
  global: (props) => ({
    "html, body": {
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
