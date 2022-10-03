import * as React from "react";
import { Box } from "@mui/material";
import screenshot from "../../images/projects/5.png";
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
    fontFamily: "Saira Extra Condensed, sans-serif",
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

export default function Project5() {
  return (
    <div>
      <div className="container">
        <h1 style={styles.text}>Employee CMS</h1>
        <p style={styles.bodytext}>
          This is an command line interface, employee content management system. 
          View departments, roles and employee records and edit them accordingly.
          Add entries, update roles and view the available budget. This is a 
          backend app with no deployed version, but you can view a demonstration 
            <br /><Button variant="outlined" size="small" href="https://drive.google.com/file/d/1RPCd4coSRzBDYQkhY5-suuFZGRCekF9r/view">here</Button>
        </p>

        <div style={styles.body} className="container">
          <a href="https://drive.google.com/file/d/1RPCd4coSRzBDYQkhY5-suuFZGRCekF9r/view">
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
      </div>
      <div style={styles.body}>
        <BuildCircleIcon sx={{ paddingTop: "1rem" }} />
      </div>
      <p style={styles.languages}>HTML // JS // NODE.JS</p>
      <div style={styles.body} className="container">
        <ButtonGroup
          variant="outlined"
          aria-label="text button group"
          sx={{ margin: "1rem" }}
        >
          <Button
            href="https://github.com/mleftwich/EmployeeCMS"
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            View Repo
          </Button>
          <Button
            href="https://drive.google.com/file/d/1RPCd4coSRzBDYQkhY5-suuFZGRCekF9r/view"
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
