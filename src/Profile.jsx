import React, { useState } from "react";
import {
  Avatar,
  Center,
  Text,
  Stack,
  Button,
  Icon,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import photo from "./assets/img/photo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { motion } from "framer-motion";
import { EmailIcon } from "@chakra-ui/icons";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errors, setErrors] = useState({ email: false });
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function formSubmit() {
    try {
      let data = new FormData();
      data.append("email", email);
      data.append("message", message);
      await fetch(import.meta.env.VITE_FORM_LINK, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      setEmail("");
      setMessage("");
      onClose();
      toast({
        title: "Message Sent",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding="5">
            <InputGroup marginTop="8">
              <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
              <Input
                type="email"
                placeholder="Email Address"
                errorBorderColor="crimson"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={errors.email}
              />
            </InputGroup>
            <Textarea
              placeholder="Send a message . . ."
              marginTop="8"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              height="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={formSubmit}>
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        as={motion.div}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        height="100vh"
        scrollSnapAlign="center"
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

        <Center marginTop="4rem" gap="8" flexDirection="column">
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
          <Button onClick={onOpen} leftIcon={<Icon as={BiMessageRounded} />}>
            Contact Me
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default Profile;
