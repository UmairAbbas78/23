import { Typography, Paper, Button } from "@mui/material";
import React from "react";

function ProjectLeft(props) {
  return (
    <Paper
      elevation={10}
      sx={{ padding: "2em", border: "solid #6c0faa 5px", borderRadius: "10px" }}
      className="project-left-container"
    >
      <div className={"project-text"}>
        <Typography variant="h4" sx={{ color: "#6c0faa" }}>
          {props.title}
        </Typography>
        <Typography variant="h6" sx={{ padding: "1em" }}>
          {props.description}
        </Typography>
        <a href={props.liveLink} target="_blank" rel="noreferrer">
          <Button
            variant="contained"
            sx={{
              padding: "0.5em",
              marginTop: "1em",
              marginBottom: "1em",
              "@media screen and (max-width:700px)": {
                marginLeft: "20%",
              },
            }}
          >
            Open Live
          </Button>
        </a>
        {props.codeLink ? (
          <a href={props.codeLink} target="_blank" rel="noreferrer">
            <Button
              variant="outlined"
              sx={{
                padding: "0.5em",
                marginLeft: "3em",
                marginTop: "1em",
                marginBottom: "1em",
              }}
            >
              Open Code
            </Button>
          </a>
        ) : (
          <Button
            variant="contained"
            disabled="true"
            sx={{
              padding: "0.5em",
              marginLeft: "3em",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            Code Private
          </Button>
        )}
      </div>
      <div className={`project-image ${props.animClass}`}></div>
    </Paper>
  );
}

export default ProjectLeft;
