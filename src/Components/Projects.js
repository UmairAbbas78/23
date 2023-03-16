import { Typography } from "@mui/material";
import React from "react";

function Projects() {
  return (
    <div className="project-container" id="projects">
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          fontSize: 30,
          marginTop: "1em",
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
    </div>
  );
}

export default Projects;
