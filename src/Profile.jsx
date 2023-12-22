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
  useToast,
  FormControl,
  FormErrorMessage,
  Heading,
  UnorderedList,
} from "@chakra-ui/react";
import Skills from "./components/Skills";
import { isEmail } from "validator";
import { motion } from "framer-motion";
import photo from "./assets/img/photo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { EmailIcon } from "@chakra-ui/icons";
import { work } from "./util/exp";
import WorkCard from "./components/WorkCard";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errors, setErrors] = useState({ email: false, message: false });
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  async function formSubmit() {
    try {
      if (isEmail(email)) {
        if (message.length === 0) setErrors({ email: false, message: true });
        else {
          setErrors({ email: false, message: false });
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
        }
      } else if (message.length === 0)
        setErrors({ email: true, message: true });
      else setErrors({ email: true, message: false });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding="5">
            <FormControl isInvalid={errors.email}>
              <InputGroup marginTop="8">
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon />}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={errors.email}
                />
              </InputGroup>
              {errors.email && (
                <FormErrorMessage>Email is required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.message}>
              <Textarea
                placeholder="Send a message . . ."
                marginTop="8"
                value={message}
                errorBorderColor="crimson"
                onChange={(e) => setMessage(e.target.value)}
                height="sm"
              />
              {errors.message && (
                <FormErrorMessage>Don't have anything to say?</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => {
                setEmail("");
                setMessage("");
                setErrors({ email: false, message: false });
                onClose();
              }}
            >
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
            <Heading fontSize="4xl" fontWeight="normal" marginTop="6">
              Hi I'm Ananth 👋
            </Heading>
            <Heading fontSize="3xl" fontWeight="normal" textAlign="center">
              Developing Software
              <br />
              Products, Brands and <br />
              User Experience.
            </Heading>
          </Stack>
        </Center>
        <Center marginTop="1rem">
          <Text textAlign="center" fontSize="xl" alignItems="center">
            A software and budding backend developer.
            <br />I specialize in backend development including server side
            <br />
            infrastructure and scalability.
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
        <Skills />
        <Text marginTop="2rem" textAlign="center" fontSize="3xl">
          Experience
        </Text>
        <Center marginTop="2rem">
          <UnorderedList
            display="grid"
            gridTemplateColumns="1fr 0.25rem 1fr"
            gridAutoColumns="max-content"
            columnGap="2rem"
            listStyle="none"
            width="min(60rem, 90%)"
            marginInline="auto"
            marginBottom="2rem"
            _before={{
              content: `""`,
              gridColumn: "2",
              gridRow: "1 / span 20",
              background: "rgb(225, 225, 225)",
              borderRadius: "0.125rem",
            }}
          >
            {work.map((exp, index) => (
              <WorkCard {...exp} index={index} />
            ))}
          </UnorderedList>
        </Center>
      </Box>
    </Box>
  );
}

export default Profile;
