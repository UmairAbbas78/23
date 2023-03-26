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
        <Typography variant="h6">{props.description}</Typography>
        <Button
          variant="contained"
          sx={{
            padding: "1em",
            marginTop: "1em",
            marginBottom: "1em",
            "@media screen and (max-width:700px)": {
              marginLeft: "25%",
            },
          }}
        >
          Open Live
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: "1em",
            marginLeft: "5em",
            marginTop: "1em",
            marginBottom: "1em",
          }}
        >
          Open Code
        </Button>
      </div>
      <div className={`project-image ${props.animClass}`}></div>
    </Paper>
  );
}

export default ProjectLeft;
