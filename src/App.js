import "./App.css";
import { Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
import { Container } from "@mui/system";
import Display from "./Images/Display.svg";
import Projects from "./Components/Projects";

function App() {
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
          I love designing and creating user-friendly and creative web
          experiences.
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
          A Front-end Developer from Karachi Pakistan. 📍
          <br />
          I'm Computer Engineering graduate from FAST-NUCES Karachi.📖
        </Typography>
        <div className="socials">
          <a
            id="profile-link"
            href="https://github.com/UmairAbbas78"
            target="_blank"
          >
            <i className="fa-brands fa-square-github"></i>
            <Typography>Git</Typography>
          </a>
          <a
            id="profile-link"
            href="https://www.linkedin.com/in/umair-abbas-aa58a3214/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
            <Typography>Linkedin</Typography>
          </a>
        </div>
        <div className="techstack"></div>
      </Container>
      <Projects />
    </div>
  );
}

export default App;
