import * as React from "react";
import { Box } from "@mui/material";
import screenshot from "../../images/projects/4.png";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { borderRadius } from "@mui/system";

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
    fontFamily: "Bellefair, serif",
    fontSize: "1.3rem",
    textAlign: "center",
  },
  languages: {
    fontFamily: "Share, cursive",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.4",
  },
};

export default function Project3() {
  return (
    <div>
      <div className="container">
        <h2 style={styles.text}>Weather Dashboard</h2>
        <p style={styles.languages}>HTML // CSS // JS</p>
        <div style={styles.body} className="container">
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

              padding: "1px",
              borderWidth: "1px",
            }}
            alt="Project 1 Image"
            src={screenshot}
          />
        </div>
        <p style={styles.bodytext}>
          A website that makes organizing a trip easier with a full 5
          day forecast. Search for a city and get it's current weather
          conditions, and the expected forecast for the next 5 days, including
          temp, conditions, humidity, wind speed and UV rating.
        </p>
      </div>
      <div style={styles.body} className="container">
        <ButtonGroup
          variant="outlined"
          aria-label="text button group"
          sx={{ margin: "1rem" }}
        >
          <Button
            href="https://github.com/mleftwich/WeatherForecast"
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            View Repo
          </Button>
          <Button
            href="https://mleftwich.github.io/WeatherForecast/"
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
