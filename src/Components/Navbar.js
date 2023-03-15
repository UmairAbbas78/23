import { Container } from "@mui/system";
import {
  Typography,
  List,
  ListItem,
  Link as MUILink,
  Button,
} from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [navActive, setNavActive] = React.useState("");

  const handleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <div className="nav-bar">
        <Typography
          className="web-title"
          variant="h6"
          sx={{ color: "#6c0faa" }}
        >
          Umair Abbas.
        </Typography>
        <FontAwesomeIcon
          className="nav-icon"
          icon={navActive ? faBarsStaggered : faBars}
          onClick={handleNav}
        />
        <div className="shortcuts">
          <ScrollLink>
            <MUILink
              className="nav-link"
              sx={{ textDecorationLine: "none", color: "black" }}
            >
              About Me
            </MUILink>
          </ScrollLink>
          <MUILink
            className="nav-link"
            sx={{ textDecorationLine: "none", color: "black" }}
          >
            Projects
          </MUILink>
          <MUILink
            className="nav-link"
            sx={{ textDecorationLine: "none", color: "black" }}
          >
            Contact
          </MUILink>
          <Button variant="outlined">Resume</Button>
        </div>
      </div>
      <div className={navActive ? "nav-active" : "nav-disable"}>
        <List>
          <ListItem>
            <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
              About Me
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
              Projects
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
              Contact
            </Typography>
          </ListItem>
        </List>
      </div>
    </>
  );
}

export default Navbar;
