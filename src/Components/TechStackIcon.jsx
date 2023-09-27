import { Box, Paper, Typography } from "@mui/material";
import React from "react";

function TechStackIcon({ title, icon }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          mb: 2,
          p: 1,
          borderRadius: 10,
          position: "absolute",
          alignItems: "center",
          width: "1em",
          height: "1em",
          justifyContent: "center",
          display: "flex",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            width: "1.3em",
            height: "1.3em",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        {icon}
      </Paper>
      <Typography sx={{ mt: 8 }}>{title}</Typography>
    </Box>
  );
}

export default TechStackIcon;
