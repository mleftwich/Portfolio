import * as React from "react";
import { Box } from "@mui/material";
import screenshot from "../../images/projects/2.png";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Share, cursive",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.6",
    fontWeight: "bold",
  },
  btn: {
    margin: "1rem",
  },
  bodytext: {
    fontFamily: "Saira Extra Condensed, sans-serif",
    fontSize: "1.3rem",
    textAlign: "center",
  },
  languages: {
    fontFamily: "Share, cursive",
    textAlign: "center",
    fontSize: ".9rem",
    color: "gray",
  },
};

export default function Project2() {
  return (
    <div>
      <div className="container">
        <h2 style={styles.text}>Inspired Eats</h2>

        <p style={styles.bodytext}>
          Provides food for thought in the way of a quirky quote and generates a
          random recipe based on the users location, dependant on the weather
          conditions. Utilises APIs.
        </p>
        <div style={styles.body} className="container">
          <a href="https://navneet-birdi.github.io/Inspired-Eats/">
            <Box
              component="img"
              sx={{
                width: {
                  xs: 150,
                  sm: 150,
                  md: 200,
                  lg: 250,
                  xl: 250,
                },
                opacity: 0.7,
                borderRadius: 100,
                border: "1px solid rgba(0, 0, 0, 0.2)",
                padding: "2px",
                borderWidth: "1px",
              }}
              alt="Project 1 Image"
              src={screenshot}
            />
          </a>
        </div>
        <div style={styles.body}>
          <BuildCircleIcon sx={{ paddingTop: "1rem" }} />
        </div>
        <p style={styles.languages}>HTML // CSS // JS</p>
      </div>
      <div style={styles.body} className="container">
        <ButtonGroup
          variant="outlined"
          aria-label="text button group"
          sx={{ margin: "1rem" }}
        >
          <Button
            href="https://github.com/Navneet-Birdi/Inspired-Eats"
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            View Repo
          </Button>
          <Button
            href="https://navneet-birdi.github.io/Inspired-Eats/"
            target="_blank"
            startIcon={<LanguageIcon />}
          >
            View Project
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
