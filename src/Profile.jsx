import {
  Avatar,
  Center,
  Text,
  Stack,
  Button,
  Icon,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import photo from "./assets/photo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import melange from "./assets/Melange.png";
function Profile() {
  const projects = [
    {
      name: "Melange",
      url: null,
      description: "",
      company: "DEVSOC BITS Goa",
      image: melange,
    },
    {
      name: "Melange",
      url: null,
      description: "",
      company: "",
      image: melange,
    },
    {
      name: "Melange",
      url: null,
      description: "",
      company: "",
      image: melange,
    },
    {
      name: "Melange",
      url: null,
      description: "",
      company: "",
      image: melange,
    },
    {
      name: "Cab Joint",
      url: "https://github.com/ananth243",
      description: "",
      company: "",
      image: melange,
    },
    {
      name: "Code Share",
      url: "https://github.com/ananth243",
      description: "",
      company: "",
      image: melange,
    },
  ];

  return (
    <Box
      as={motion.div}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 100, ease: "ease-out" }}
    >
      <Center paddingTop={"20"}>
        <Stack alignItems="center">
          <Avatar name="Ananth Raghav" size="2xl" src={photo} />
          <Text fontSize="xl">Hi I'm Ananth 👋</Text>
          <Text fontSize="4xl" textAlign="center">
            Developing Software
            <br />
            Products, Brands and <br />
            User Experience.
          </Text>
        </Stack>
      </Center>
      <Center marginTop="1rem">
        <Text textAlign="center" fontSize="xl" alignItems="center">
          A software and budding backend developer.
          <br />I specialize in backend development including server side
          <br />
          infrastructure and user experience.
        </Text>
      </Center>

      <Center marginTop="4rem">
        <Button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ananth-raghav-2151a9200/",
              "_blank"
            )
          }
          leftIcon={<Icon as={FaLinkedin} />}
        >
          Let's Connect!
        </Button>
      </Center>
      <Box padding="5rem">
        <SimpleGrid marginTop="2rem" minChildWidth="20rem" spacing="10rem">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Profile;
