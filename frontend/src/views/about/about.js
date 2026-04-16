import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  Icon
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { TbWriting } from "react-icons/tb";
import { IoMdSchool } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import myphoto from "../../assets/aboutMePhoto.jpg";

export default function About() {
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue(
    "rgb(130, 11, 138)",
    "rgb(209, 250, 255)"
  );
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
              />
              <LazyLoadImage
                src={myphoto}
                width="100%"
                height="100%"
                alt="Sangam Arora"
                effect="blur"
                style={{ height: "100%" }}
              />
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="Guru Nanak Dev Engineering College, Ludhiana"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="B.Tech in Computer Science and Engineering"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Graduation"
                    value="June 2025"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designation"
                    value="Programmer Analyst"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Gandhinagar, Gujarat"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English, Hindi, Punjabi"
                  />
                </SimpleGrid>
                <SimpleGrid marginTop={5}>
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Career Snapshot"
                    value={(
                      <>
                        CGPA: 9.74 with university rank 1 across semesters 1-5
                        and 8.
                        <br />
                        Working across React, Java, Spring Boot, PostgreSQL,
                        Node.js, TypeScript, and MongoDB.
                        <br />
                        Strong DSA foundation with 300+ LeetCode problems
                        solved.
                      </>
                    )}
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<ACHIEVEMENTS AND LEADERSHIP/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={TbWriting}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Academic Excellence</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Silver Medalist with university rank 1 across all engineering
              branches in semesters 1-5 and 8, maintaining a CGPA of 9.74.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={IoMdSchool}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Leadership</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Co-Founded and served as Convener of the Causmic Club, coordinated
              placement drives, and led large cross-functional student teams for
              flagship campus events.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdLocalMovies}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Competitive Problem Solving</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Solved 300+ LeetCode problems, secured runner-up in a national
              hackathon, and participated twice in Smart India Hackathon.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
