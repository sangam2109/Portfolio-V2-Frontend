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
import Calculator from "../../assets/project/sgpaCalculator.jpg"
import Training from "../../assets/project/training-tracker.png"
import hukamnama  from "../../assets/project/hukamnama.png"


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
            aboutProject={"This is web and app based solution for flexible Athletic mett registeration for Guru Nanak Dev Engineering College . This consist of Attendance marking via manually with help of buttons as well as QR scan method , Dynamic Certificate Generation , Export Functionalities etc etc.. "}
            techStack={"EXPRESS JS, NODE JS, IONIC , MONGODB, MATERIAL UI"}
            projectLiveLink="https://sports2024.vercel.app/"
            projectLink="https://github.com/Vansh1190/Sports22"
          />
          <ProjectCard
            projectImage={Training}
            projectName={"Training Tracker GNDEC"}
            aboutProject={"This MERN stack project facilitates comprehensive management of student training and placement data. It enables students to input their training records, such as TR_101, TR_102, based on their academic year. The admin panel empowers teachers to view, lock, and export data with various filters, including certificates and reports, while ensuring secure authentication throughout the system."}
            techStack={"REACT JS,  MATERIAL UI , NODE JS , MONGODB, EXPRESS JS"}
            projectLiveLink="https://training-tracker-gndec.vercel.app/login"
            projectLink="https://github.com/whogurdevil/training-tracker-gndec"
          />
          <ProjectCard
            projectImage={hukamnama}
            projectName={"HUKAMNAMA TO IMAGE WINDOW APP"}
            aboutProject={"This Electron JS application, built with TypeScript, provides a seamless solution for exporting daily Hukamnama Sahib as PNG images. Users can access the application to generate and save Hukamnama Sahib images effortlessly. The combination of Electron JS and TypeScript ensures efficient development and robust performance."}
            techStack={"ELECTRON JS, TYPESCRIPT"}
            projectLiveLink="Coming Soon!"
            projectLink="https://github.com/whogurdevil/HukamNama"
          />
          <ProjectCard
            projectImage={Calculator}
            projectName={"GPA Calculator"}
            aboutProject={"GPA calculator tailored for GNDEC students, allowing them to input their marks, view results instantly, and generate detailed reports. With built-in support for various branches, the tool efficiently computes semester-wise grades, aiding students in tracking their academic progress seamlessly."}
            techStack={"REACT JS,  MATERIAL UI"}
            projectLiveLink="https://www.sgpacalculator.tech/"
            projectLink="https://github.com/sangam2109/SgpaCalculator"
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
            projectLiveLink="Coming  Soon!"
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
