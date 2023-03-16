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
import { Link as ScrollLink } from "react-scroll";

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
          <ScrollLink
            to="aboutme"
            smooth={true}
            offset={100}
            duration={500}
            spy={true}
          >
            <MUILink
              className="nav-link"
              sx={{ textDecorationLine: "none", color: "black" }}
            >
              About Me
            </MUILink>
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            offset={10}
            duration={500}
            spy={true}
          >
            <MUILink
              className="nav-link"
              sx={{ textDecorationLine: "none", color: "black" }}
            >
              Projects
            </MUILink>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={100}
            duration={500}
            spy={true}
          >
            <MUILink
              className="nav-link"
              sx={{ textDecorationLine: "none", color: "black" }}
            >
              Contact
            </MUILink>
          </ScrollLink>
          <Button variant="outlined">Resume</Button>
        </div>
      </div>
      <div className={navActive ? "nav-active" : "nav-disable"}>
        <List>
          <ScrollLink
            to="aboutme"
            smooth={true}
            offset={10}
            duration={500}
            spy={true}
          >
            <ListItem>
              <Typography
                sx={{ fontWeight: 500, fontSize: 18, color: "white" }}
              >
                About Me
              </Typography>
            </ListItem>
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            offset={100}
            duration={500}
            spy={true}
          >
            <ListItem>
              <Typography
                sx={{ fontWeight: 500, fontSize: 18, color: "white" }}
              >
                Projects
              </Typography>
            </ListItem>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={100}
            duration={500}
            spy={true}
          >
            <ListItem>
              <Typography
                sx={{ fontWeight: 500, fontSize: 18, color: "white" }}
              >
                Contact
              </Typography>
            </ListItem>
          </ScrollLink>
        </List>
      </div>
    </>
  );
}

export default Navbar;
