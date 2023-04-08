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
import Resume from "../Resume/Resume_UmairAbbas_23.pdf";

function Navbar() {
  const [navActive, setNavActive] = React.useState("");

  const handleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <div className="nav-bar">
        <ScrollLink to="main" smooth={true} offset={-100}>
          <Typography
            className="web-title"
            variant="h6"
            sx={{ color: "#6c0faa", cursor: "pointer" }}
          >
            Umair Abbas.
          </Typography>
        </ScrollLink>
        <FontAwesomeIcon
          className="nav-icon"
          icon={navActive ? faBarsStaggered : faBars}
          onClick={handleNav}
        />
        <div className="shortcuts">
          <ScrollLink
            to="aboutme"
            smooth={true}
            offset={-180}
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
            offset={-50}
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
          <a href={Resume} target="_blank" rel="noreferrer">
            <Button variant="outlined">Resume</Button>
          </a>
        </div>
      </div>
      <div className={navActive ? "nav-active" : "nav-disable"}>
        <List>
          <ScrollLink to="aboutme" offset={-190} spy={false} smooth={true}>
            <ListItem>
              <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
                About Me
              </Typography>
            </ListItem>
          </ScrollLink>
          <ScrollLink to="projects" offset={-80} smooth={true}>
            <ListItem>
              <Typography
                sx={{ fontWeight: 500, fontSize: 18, color: "white" }}
              >
                Projects
              </Typography>
            </ListItem>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true}>
            <ListItem>
              <Typography
                sx={{ fontWeight: 500, fontSize: 18, color: "white" }}
              >
                Contact
              </Typography>
            </ListItem>
          </ScrollLink>
          <a href={Resume} target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#6c0faa",
                marginLeft: "0.5em",
              }}
            >
              Resume
            </Button>
          </a>
        </List>
      </div>
    </>
  );
}

export default Navbar;
