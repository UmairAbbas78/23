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
        description="This is my Final Year Project. I made a MERN stack app that monitors
          power generations and all Take-off units of that power, And then all
          the data is displayed in real-time with the use of intuitive graphs
          that I made using recharts Library."
        title="Energy Generation and Take-offs Monitoring System"
      />
    </div>
  );
}

export default Projects;
