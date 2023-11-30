import React from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import sportsmeet from "../../assets/project/sportsmeet.png";
import ques from "../../assets/project/question.jpg";
import todo from "../../assets/project/todo1.jpg";
import dictionary from "../../assets/project/dictionary.jpg";
import bootcamp from "../../assets/project/bootcamp.jpg";
import portfolio from "../../assets/project/portfolio.jpg";
import interactivecard from "../../assets/project/interactivecard.jpg";



export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
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
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={sportsmeet}
            projectName={"Athletic Meet Registeration"}
            aboutProject={"This is web and app based solution for flexible Athletic mett registeration for colleges and schools"}
            techStack={"EXPRESS JS, NODE JS, IONIC , MONGODB, MATERIAL UI"}
            projectLiveLink="https://sports2024.vercel.app/"
            projectLink="https://github.com/Vansh1190/Sports22"
          />
          <ProjectCard
            projectImage={bootcamp} // Replace virtualLabImage with the actual image source
            projectName={"Virtual Lab with IIT Roorkee"}
            aboutProject={"Collaborative project with IIT Roorkee for basic electrical engineering virtual lab. Demonstrated practical simulations using HTML, CSS, JavaScript, and libraries like jsPlumb."}
            techStack={"HTML, CSS, JavaScript, jsPlumb"}
            projectLiveLink="https://sangam2109.github.io/Kirchooff-Law/Webpage/index.html" // Replace with the actual live link
            projectLink="https://github.com/sangam2109/Kirchooff-Law" // Replace with the actual GitHub repository link
          />

          <ProjectCard
            projectImage={ques}
            projectName={"Questener:NLP based questgen generator"}
            aboutProject={"Generating a question based on data entered by used using Natural Language Processing"}
            techStack={"FLASK, SPICY , NLTK , PANDA , TRANSFORMER , NUMPY , PYTHON"}
            projectLiveLink=""
            projectLink="https://github.com/sangam2109/hackathon"
          />
          <ProjectCard
            projectImage={todo}
            projectName={"Todo Web App"}
            aboutProject={
              "A website which is used for making todolist having drag and drop feature also"
            }
            techStack={
              "JAVASCRIPT, REACT JS , BOOTSTRAP, CSS, REDUX"
            }
            projectLiveLink="https://todo-react-app-delta-one.vercel.app/"
            projectLink="https://github.com/sangam2109/Todo-React-App"
          />
          <ProjectCard
            projectImage={dictionary}
            projectName={"Dicitionary Website"}
            aboutProject={"A web based solution for Dictionary which is fetching data from Api"}
            techStack={"JAVASCRIPT , HTML , CSS "}
            projectLiveLink="https://dictionary-website-alpha.vercel.app/"
            projectLink="https://github.com/sangam2109/Dictionary-website"
          />
          <ProjectCard
            projectImage={portfolio} // Replace portfolioImage with the actual image source
            projectName={"Portfolio with React and Chakra UI"}
            aboutProject={"Personal portfolio showcasing skills and projects. Built using ReactJS, Chakra UI, JavaScript, etc."}
            techStack={"ReactJS, Chakra UI, JavaScript"}
            projectLiveLink="https://sangam--portfolio.vercel.app" // Replace with the actual live link
            projectLink="https://github.com/sangam2109/Portfolio-V2" // Replace with the actual GitHub repository link
          />

          <ProjectCard
            projectImage={interactivecard} // Replace interactiveCardImage with the actual image source
            projectName={"Interactive Card"}
            aboutProject={"A visually appealing interactive card resembling a credit card. Developed using HTML, CSS, and JavaScript."}
            techStack={"HTML, CSS, JavaScript"}
            projectLiveLink="https://sangam2109.github.io/Frontend-Interactive-Card/" // Replace with the actual live link
            projectLink="https://github.com/sangam2109/Frontend-Interactive-Card" // Replace with the actual GitHub repository link
          />

        </SimpleGrid>
        
      </Box>
    </Box>
  );
}
