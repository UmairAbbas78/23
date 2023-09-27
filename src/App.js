import "./App.css";
import { Box, Divider, Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
import { Container } from "@mui/system";
import Projects from "./Components/Projects";
import TechStackIcon from "./Components/TechStackIcon";
import skills from "./Components/Additional/skills.json";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import {
  SiExpress,
  SiMysql,
  SiPhpmyadmin,
  SiSequelize,
  SiMui,
  SiPostman,
} from "react-icons/si";

function App() {
  const icons = [
    <FaReact />,
    <FaNodeJs />,
    <SiExpress />,
    <BiLogoMongodb />,
    <SiMysql />,
    <SiPhpmyadmin />,
    <SiSequelize />,
    <SiMui />,
  ];
  const toolIcons = [<TbBrandVscode />, <SiPostman />, <BsGit />, <FaGithub />];

  return (
    <div>
      <Navbar />
      <Container className="main" id="main">
        <Typography sx={{ marginBottom: "1em", color: "#6c0faa" }} variant="h3">
          Designer & Front-end Developer.
        </Typography>
        <div className="profile-container" />

        <Typography
          sx={{
            color: "rgb(63, 62, 62)",
            marginTop: "2em",
            "@media screen and (min-width:700px)": {
              fontSize: "28px",
            },
          }}
          variant="h6"
        >
          A Front-end Developer from Karachi Pakistan. 📍
        </Typography>
      </Container>
      <hr />

      <Container className="aboutme" id="aboutme">
        <Typography sx={{ color: "#6c0faa", marginTop: "1em" }} variant="h3">
          I'm Umair
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            "@media screen and (min-width:700px)": {
              fontSize: "30px",
            },
          }}
        >
          I'm Computer Engineering graduate from FAST-NUCES Karachi.📖
          <br />
          Full-Stack developer with a passion for software engineering and a
          strong foundation in programming principles. I also have a knack for
          UI/UX design.
        </Typography>
        <div className="socials">
          <a
            id="profile-link"
            href="https://github.com/UmairAbbas78"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-github"></i>
            <Typography>Git</Typography>
          </a>
          <a
            id="profile-link"
            href="https://www.linkedin.com/in/umair-abbas-aa58a3214/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
            <Typography>Linkedin</Typography>
          </a>
          <a
            id="profile-link"
            href="https://okradev.itch.io/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-itch-io"></i>
            <Typography>Itch.io</Typography>
          </a>
        </div>
        <Divider />
        <Box>
          {/*  */}
          <Typography sx={{ color: "#6c0faa", marginTop: "1em" }} variant="h4">
            Tech Stack
          </Typography>
          <Box
            sx={{
              fontSize: 40,
              mt: 3,
              display: "flex",
              justifyContent: "center",
              gap: 5,
              "@media screen and (max-width:850px)": {
                fontSize: "30px",
                display: "grid",
                gridTemplateColumns: "repeat(4,2fr)",
                columnGap: 0,
                rowGap: 4,
              },
            }}
          >
            {skills.techstack.map((item, idx) => {
              return <TechStackIcon title={item.name} icon={icons[idx]} />;
            })}
          </Box>
        </Box>
        <Divider />
        <Box>
          {/*  */}
          <Typography sx={{ color: "#6c0faa", marginTop: "1em" }} variant="h4">
            Tools
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            gap={5}
            sx={{
              fontSize: 40,
              mt: 3,
            }}
          >
            {skills.tools.map((item, idx) => {
              return <TechStackIcon title={item.name} icon={toolIcons[idx]} />;
            })}
          </Box>
        </Box>
      </Container>
      <Projects />
    </div>
  );
}

export default App;
