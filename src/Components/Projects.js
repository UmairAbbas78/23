import { Typography } from "@mui/material";
import React from "react";
import ProjectLeft from "./ProjectLeft";

function Projects() {
  return (
    <div className="project-container" id="projects">
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          fontSize: 30,
          marginTop: "1em",
          marginBottom: "1em",
          "@media screen and (min-width:700px)": {
            color: "#6c0faa",
            textAlign: "left",
            fontSize: 50,
          },
        }}
        variant="h3"
      >
        Here Are Some Of My Projects
      </Typography>
      <ProjectLeft
        animClass="project-image-1"
        title="Energy Generation and Take-Offs Monitoring App"
        description="For my Final Year Project, I developed a MERN stack app to monitor power generation and Take-off units. I utilized the recharts library to create real-time graphs for easy analysis. This project reflects my knowledge and skills in web development and data visualization and I am grateful for the opportunity to showcase it."
        liveLink="https://artisticems.netlify.app/"
      />
    </div>
  );
}

export default Projects;
