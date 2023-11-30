import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Button,
  Link
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { TbWriting } from "react-icons/tb";
import { IoMdSchool } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import myphoto from "../../assets/aboutMePhoto .jpg";

export default function About() {
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("	rgb(130, 11, 138)", "rgb(209, 250, 255)");
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
          {/* <TypeAnimation
            sequence={["ABOUT ME", 500, "ABOUT", 500, "ABOUT ME", 500]}
            style={{ fontSize: "3em" }}
            cursor={false}
          /> */}
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
                // zIndex="-1"
              />
              <LazyLoadImage
                src={myphoto}
                width="100%"
                height="100%"
                alt="Image Alt"
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
                    value="GNDEC, LUDHIANA    "
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="B.TECH."
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Branch"
                    value="Computer Science"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designation"
                    value="Student"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Ahmedgarh , Punjab"
                  />
                  
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English, Hindi, Punjabi"
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
            {"<MY INTERESTS AND HOBBIES/>"}
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
            <Text textAlign="center">Poetry Writing (Punjabi)</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Immerse myself in the rich tapestry of emotions and expressions through the beauty of Punjabi poetry. Crafting verses allows me to connect with my cultural roots and express the intricate nuances of life in a lyrical manner.
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
            <Text textAlign="center">Teaching</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Sharing knowledge and insights with others is a passion that fuels my intellectual curiosity. Whether it's explaining complex concepts or mentoring others, the joy of contributing to someone else's learning journey is truly rewarding.
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
            <Text textAlign="center">Watching Movies</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              A cinephile at heart, I find joy in exploring diverse cinematic landscapes. Whether it's the artistry of storytelling, the visual spectacle, or the emotional resonance, movies provide a unique form of entertainment that inspires and captivates me.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
