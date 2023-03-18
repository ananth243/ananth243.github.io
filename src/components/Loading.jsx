import { Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";

function Loading() {
  return (
    <Center alignItems={"center"} height="100vh">
      <Spinner
        thickness="4px"
        speed="1s"
        emptyColor="light.100"
        color="dark.100"
        size="xl"
      />
    </Center>
  );
}

export default Loading;
