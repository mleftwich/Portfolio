import * as React from "react";
import { Box } from "@mui/material";
import screenshot from "../../images/projects/10.png";
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
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: ".9rem",
  },
};

export default function Project8() {
  return (
    <div>
      <div className="container">
        <h1 style={styles.text}>E-Commerce Server</h1>

        <p style={styles.bodytext}>
        Fully functional backend E-Commerce server. Configured endpoints allow CRUD operations using restful API. View demonstration
        <br /><Button variant="outlined" size="small" href="https://drive.google.com/file/d/1bMHmhgoEOasy-vn-zCpnMp2ROC2BvCbk/view">here</Button>
        </p>
        <div style={styles.body} className="container">
          <a href="https://drive.google.com/file/d/1bMHmhgoEOasy-vn-zCpnMp2ROC2BvCbk/view">
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
        <p style={styles.languages}>HTML // CSS // JS // NODE.JS // SEQUELIZE</p>
      </div>
      <div style={styles.body} className="container">
        <ButtonGroup
          variant="outlined"
          aria-label="text button group"
          sx={{ margin: "1rem" }}
        >
          <Button
            href="https://github.com/mleftwich/eCommServer"
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            View Repo
          </Button>
          <Button
            href="https://drive.google.com/file/d/1bMHmhgoEOasy-vn-zCpnMp2ROC2BvCbk/view"
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
