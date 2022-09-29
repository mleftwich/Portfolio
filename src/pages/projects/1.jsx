import * as React from "react";
import { Box } from "@mui/material";
import screenshot from "../../images/projects/1.png";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poiret One, cursive",
    textAlign: "center",
    color: "#3bbbe0",
  },
  btn: {
    margin: "1rem",
  },
  bodytext: {
    fontFamily: "Bellefair, serif",
    fontSize: "1.3rem",
    textAlign: "center",
  },
};

export default function Project1() {
  return (
    <div>
      <div className="container">
        <h3 style={styles.text}>Project 1</h3>
        <p style={styles.bodytext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit
          porro vitae dolor fuga vero inventore maiores soluta? Provident libero
          perspiciatis, similique corporis voluptas voluptatem quidem qui
          sapiente aut eius!
        </p>
        <div style={styles.body} className="container">
          <Box
            component="img"
            sx={{
              width: {
                xs: 200,
                sm: 250,
                md: 275,
                lg: 400,
                xl: 450,
              },
              opacity: 0.8,
              borderRadius: 3,
              border: "solid",
              borderColor: "rgba(0, 0, 0, 0.3)",
              padding: "2px",
              borderWidth: "1px",
            }}
            alt="Project 1 Image"
            src={screenshot}
          />
        </div>
      </div>
      <div style={styles.body} className="container">
        <ButtonGroup
          variant="outlined"
          aria-label="text button group"
          sx={{ margin: "1rem" }}
        >
          <Button
            href="http://github.shiftleft.net.au"
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            View Repo
          </Button>
          <Button
            href="http://github.shiftleft.net.au"
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
