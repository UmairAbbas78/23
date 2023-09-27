import { Typography } from "@mui/material";
import React from "react";
import ProjectLeft from "./ProjectLeft";
import projects from "./Additional/projects.json";

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
      {projects.map((project) => {
        return (
          <ProjectLeft
            animClass={project.animClass}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        );
      })}
    </div>
  );
}

export default Projects;
