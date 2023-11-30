import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { AiFillGithub, AiFillHeart } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const textColor = useColorModeValue("rgb(130, 11, 138)", "rgb(209, 250, 255)");

  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row"
      }}
      alignItems={{
        base: "center",
        xl: "start"
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "40px" }}
      pb="30px"
      mt="20px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start"
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={{
          base: "10px",
          md: "15px",
          xl: "20px"
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        {" "}
        &copy; {1900 + new Date().getYear()}
        {"</>"} with <AiFillHeart /> by Sangam Arora • All Rights Reserved
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link href="https://github.com/sangam2109" target="blank">
            <AiFillGithub />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link href="https://leetcode.com/arorasam2109/" target="blank">
            <SiLeetcode />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link href="https://www.linkedin.com/in/sangam-arora-5078b6223/" target="blank">
            <BiLogoLinkedin />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link href="https://instagram.com/urs_sangam2122" target="blank">
            <BsInstagram />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
