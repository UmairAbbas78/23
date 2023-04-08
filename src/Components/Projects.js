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
      <ProjectLeft
        animClass="project-image-2"
        title="Mark-Down Previewer"
        description="I developed this React app as part of my FreeCodeCamp.org certification program. The app is a Markdown previewer that utilizes React Markdown to render Markdown code into an easy-to-read format. Despite its simplicity, the app demonstrates my proficiency in using React and showcases my ability to create functional and user-friendly applications."
        liveLink="https://umairabbas78.github.io/MarkDownPreviewer/"
        codeLink="https://github.com/UmairAbbas78/MarkDownPreviewer/blob/master/src/App.js"
      />
      <ProjectLeft
        animClass="project-image-3"
        title="Quote Generation App"
        description="As part of my FreeCodeCamp certification program, I created this React app that generates random quotes from the Quotable API and also allows users to post them directly to Twitter. This project demonstrates my skills in working with both Quotable and Twitter APIs, in addition to showcasing my proficiency in React. I enjoyed developing this project as it challenged me to think creatively and build a functional app that integrates with external APIs."
        liveLink="https://umairabbas78.github.io/quotegenapp/"
        codeLink="https://github.com/UmairAbbas78/quotegenapp"
      />
    </div>
  );
}

export default Projects;
