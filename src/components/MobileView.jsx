import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

function MobileView({ name, photo, description, url }) {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={photo} />
      <Link target="_blank" href={url}>
        {name}
      </Link>
      <Text>{description}</Text>
    </Flex>
  );
}

export default MobileView;
