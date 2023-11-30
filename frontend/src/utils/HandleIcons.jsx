import MongodbLogo from "../assets/Logos/MongodbLogo";
import ExpressLogo from "../assets/Logos/ExpressLogo";
import ReactLogo from "../assets/Logos/ReactLogo";
import NodeLogo from "../assets/Logos/NodeLogo";
import Tailwind from "../assets/Logos/Tailwind";
import Bootstrap from "../assets/Logos/Bootstrap";
import Ionic from "../assets/Logos/Ionic";
import Flask from "../assets/Logos/Flask";
import Panda from "../assets/Logos/Panda";
import Python from "../assets/Logos/Python";
import HTML from "../assets/Logos/HTML";
import CSS from "../assets/Logos/CSS";
import Javascript from "../assets/Logos/Javascipt";

const HandleTechIcon = (tech) => {
    if (tech === "React JS") return <ReactLogo size={"h-5 md:h-6"} />;
    else if (tech === "Mongo DB") return <MongodbLogo size={"h-5 md:h-6"} />;
    else if (tech === "Express JS") return <ExpressLogo size={"h-5 md:h-6"} />;
    else if (tech === "Node JS") return <NodeLogo size={"h-5 md:h-6"} />;
    else if (tech === "Tailwind CSS") return <Tailwind size={"h-5 md:h-6"} />;
    else if (tech === "Bootstrap") return <Bootstrap size={"h-5 md:h-6"} />;
    else if (tech === "Ionic") return <Ionic size={"h-5 md:h-6"} />;
    else if (tech === "Panda") return <Panda size={"h-5 md:h-6"} />;
    else if (tech === "Flask") return <Flask size={"h-5 md:h-6"} />;
    else if (tech === "Python") return <Python size={"h-5 md:h-6"} />;
    else if (tech === "HTML") return <HTML size={"h-5 md:h-6"} />;
    else if (tech === "CSS") return <CSS size={"h-5 md:h-6"} />;
    else if (tech === "Javascript") return <Javascript size={"h-5 md:h-6"} />;
    // else if (tech === "Python") return <Python size={"h-5 md:h-6"} />;
    else return console.log(`error, ${tech} icon not found`);
};

export default HandleTechIcon;