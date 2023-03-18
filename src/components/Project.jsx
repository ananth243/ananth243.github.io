import { Image, Center, Flex, Text, Box, Link } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Project({ name, photo, description, url }) {
  const [clicked, setClicked] = useState(false);
  const flexVariants = {
    click: {
      gap: "1rem",
      paddingRight: "3",
      borderRadius: "1rem",
      transition: {
        duration: 1,
      },
    },
    default: {},
  };

  const imgVariants = {
    click: {
      borderRadius: "1rem",
      flexShrink: "0",
      minWidth: "100%",
      minHeight: "100%",
      cursor: "auto",
      transition: {
        duration: 1,
      },
    },
    default: {},
  };

  const divVariants = {
    default: {
      cursor: "pointer",
    },
    click: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "auto",
      height: "auto",
      width: "auto",
      transition: {
        duration: 1,
      },
    },
  };

  const h2Variants = {
    default: {
      margin: 0,
      position: "absolute",
      right: "40%",
      top: "100%",
    },
    click: {
      all: "unset",
      cursor: "pointer",
      fontSize: "48px",
    },
  };

  return (
    <>
      <Center height="100vh">
        <Flex
          width={clicked ? "60%" : "auto"}
          as={motion.div}
          style={{ position: "relative" }}
          variants={flexVariants}
          animate={clicked ? "click" : "default"}
          justifyContent="space-around"
          alignItems="center"
          scrollSnapAlign="center"
        >
          <Box
            onClick={() => setClicked(true)}
            variants={divVariants}
            animate={clicked ? "click" : "default"}
            cursor="pointer"
            overflow="hidden"
            maxHeight="400px"
            maxWidth="500px"
          >
            <Image
              src={photo}
              as={motion.img}
              variants={imgVariants}
              animate={clicked ? "click" : "default"}
            />
          </Box>
          <Box>
            <Link
              as={motion.a}
              href={url}
              target="_blank"
              variants={h2Variants}
              animate={clicked ? "click" : "default"}
            >
              {name}
            </Link>
            {clicked && (
              <Text
                as={motion.p}
                initial={{ opacity: 0 }}
                fontSize="xl"
                animate={{
                  opacity: [0.2, 0.4, 0.6, 0.8, 1],
                  transition: {
                    duration: 1,
                  },
                }}
              >
                {description}
              </Text>
            )}
          </Box>
        </Flex>
      </Center>
    </>
  );
}
