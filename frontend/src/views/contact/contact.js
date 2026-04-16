import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import {
  Box,
  Text,
  Input,
  Textarea,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import useToast from "../../components/Toasters/toasthook";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { showToast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showToast("info", "Please fill all the fields!");
      return;
    }

    try {
      showToast("loading", "Request in Progress !!!!");

      const response = await fetch(
        "https://sangamportfolio.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        showToast("success", "Form Submitted Successfully");
      } else {
        console.error("Failed to send email");
        showToast("error", "Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("error", "Internal server error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const textColorPrimary = useColorModeValue(
    "rgb(130, 11, 138)",
    "rgb(209, 250, 255)"
  );
  const placeholdercolor = useColorModeValue("teal.500", "teal.300");
  const placeholderbordercolor = useColorModeValue("gray.500", "gray.300");

  return (
    <Box name="contact" h="60vh" px="4" textAlign="center">
      <Navbar displayText={getActiveRoute(routes)} />
      <Box mx="auto" maxW="xl">
        <Text
          color={textColorPrimary}
          fontSize="4xl"
          mt="30px"
          fontWeight="bold"
          borderBottom="4px"
          borderColor="#00FFCA"
          display="inline-block"
        >
          Contact
        </Text>
        <Text color={textColorPrimary} py="2">
          Submit the form below or reach out directly.
        </Text>
        <Text color={textColorPrimary} py="1">
          Email:{" "}
          <Text color={textColorPrimary} as="span" fontWeight="bold">
            arorasam2109@gmail.com
          </Text>
        </Text>
        <Box>
          <form>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              mb="4"
              px="2"
              rounded="md"
              variant="filled"
              _placeholder={{ opacity: 1, color: placeholdercolor }}
              focusBorderColor={placeholderbordercolor}
              focusBorderWidth="2"
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              variant="filled"
              value={formData.email}
              onChange={handleChange}
              mb="4"
              px="2"
              rounded="md"
              _placeholder={{ opacity: 1, color: placeholdercolor }}
              focusBorderColor={placeholderbordercolor}
              focusBorderWidth="2"
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              mb="4"
              variant="filled"
              px="2"
              rounded="md"
              _placeholder={{ opacity: 1, color: placeholdercolor }}
              focusBorderColor={placeholderbordercolor}
              focusBorderWidth="2"
              placeholder="Message"
              rows="5"
            ></Textarea>
          </form>
        </Box>

        <Box mt="2">
          <Button
            onClick={handleSubmit}
            px="6"
            py="1"
            mb="2"
            rounded="full"
            fontWeight="semibold"
            bgGradient="linear(to-r, #23c483, #1a8d73)"
            _hover={{
              bgGradient: "linear(to-r, #23c483, #1a8d73)",
              shadow: "md",
              color: "white",
              transform: "translateY(-3px)"
            }}
            _active={{ transform: "translateY(-1px)" }}
          >
            Send Message
            <IoSendSharp ml="4" />
          </Button>
          {isSubmitted && (
            <Text color="green.500">
              Message submitted successfully!
              {setTimeout(() => setIsSubmitted(false), 5000)}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
