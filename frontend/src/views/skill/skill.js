import React, { useEffect } from 'react';
import {
    Box,
    Flex,
    SimpleGrid,
    
    useStyleConfig,
    Text,
    useColorModeValue,
    useColorMode,
    
    Button,
    Link
} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Skills } from '../../utils/HandleSkills';
// import { Fade } from 'react-awesome-reveal';
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import gitlab from "../../assets/icons/gitlab.svg";
import cpp from "../../assets/icons/c++.png";
import express from "../../assets/icons/express.svg";
import GitHubCalendar from "react-github-calendar";
import python from '../../assets/icons/python.svg'
import sql from '../../assets/icons/sql.svg'
import postgressql from '../../assets/icons/postgresql.svg'
import flask from '../../assets/icons/flask.svg'
import numpy from '../../assets/icons/numpy.svg'
import panda from '../../assets/icons/panda.svg'
import scipy from '../../assets/icons/scipy.svg'

const Skill = () => {
    useEffect(() => {
        AOS.init();
    }, []);
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

    return (
       <Box>
        <Navbar displayText={getActiveRoute(routes)} />
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt='30px'
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY SKILLSET/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          
          <TechStackCard imagepath={python} />
          <TechStackCard imagepath={flask} />
          <TechStackCard imagepath={numpy} />
          <TechStackCard imagepath={panda} />
          <TechStackCard imagepath={scipy} />
          <TechStackCard imagepath={react} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={typescript} />
          <TechStackCard imagepath={cpp} />
          <TechStackCard imagepath={node} />
          <TechStackCard imagepath={mongo} />
          <TechStackCard imagepath={express} background="white" />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={gitlab} />
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
          <TechStackCard imagepath={sql} />
          <TechStackCard imagepath={postgressql} />
          
        </SimpleGrid>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY GITHUB CONTRIBUTIONS/>"}
          </Text>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <GitHubCalendar
            username="sangam2109"
            colorScheme={colorMode === "light" ? "light" : "dark"}
            year="last"
          />
        </Box>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          {colorMode === "light" ? (
            <LazyLoadImage
              src="https://streak-stats.demolab.com?user=sangam2109&theme=dark&hide_border=true"
              alt="GitHub Streak"
              effect="blur"
            />
          ) : (
            <LazyLoadImage
                            src="https://github-readme-stats.vercel.app/api?username=sangam2109&theme=vue-dark&show_icons=true&hide_border=true&count_private=true"
              alt="GitHub Streak"
              effect="blur"
            />
          )}
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
                <Link href="https://github.com/sangam2109" target="blank">
            <Button variant="darkBrand" fontSize="sm" fontFamily="DM Sans">
              Visit Github
            </Button>
          </Link>
        </Flex>
        </Box>
    );
};

export default Skill;
