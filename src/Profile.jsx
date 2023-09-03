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
  Card,
  Image,
  CardBody,
  CardFooter,
  Link,
  Stat,
  StatHelpText,
  StatLabel,
  CardHeader,
  useColorMode,
} from "@chakra-ui/react";
import Skills from "./components/Skills";
import { isEmail } from "validator";
import { motion } from "framer-motion";
import photo from "./assets/img/photo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { EmailIcon } from "@chakra-ui/icons";
import a2z from "./assets/img/a2z.png";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errors, setErrors] = useState({ email: false, message: false });
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();
  const { colorMode } = useColorMode();

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
        <Center
          marginTop="4rem"
          flexDirection="column"
          gap="2rem"
          paddingBottom="3rem"
        >
          <Text fontSize="4xl">Work Experience</Text>
          <Card
            background={colorMode === "light" ? "light.100" : "dark.200"}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            maxWidth={"60%"}
            border={"rounded"}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={a2z}
              alt="Amazon Logo"
            />
            <Stack>
              <CardHeader paddingBottom="0">
                <Stat>
                  <StatLabel fontSize={"md"}>
                    <Link
                      href="https://www.aboutamazon.com/about-us"
                      target="_blank"
                    >
                      Amazon.com
                    </Link>
                  </StatLabel>
                  <StatHelpText>Software Dev Engineer Intern</StatHelpText>
                  <StatHelpText>July 2023 - Dec 2023</StatHelpText>
                </Stat>
              </CardHeader>
              <CardBody>
                <Text>
                  Worked under the larger team of Amazon Payments where
                  I leveraged AWS into development and learnt a thing or two
                  about card based payments on a much higher level. Absolutely
                  loved the environment and work culture in the team and learnt
                  a lot about Amazon leadership principles. The internship
                  brought me closer to AWS services such as Lambda,
                  Cloudformation and many more.
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Center>
      </Box>
    </Box>
  );
}

export default Profile;
