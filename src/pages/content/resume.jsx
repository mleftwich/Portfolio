import * as React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import resume from "../../assets/Resume(2022).pdf";
import DescriptionIcon from "@mui/icons-material/Description";
import languages from "../../images/languages.png";
const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poiret One, cursive",
    textAlign: "center",
    color: "black",
    opacity: 1,
  },
  btn: {
    margin: "1rem",
  },
};

export default function Resume() {
  return (
    <div>
      <div className="container">
        <Box
          sx={{
            width: { xs: 370, sm: 450, md: 500, lg: 595, xl: 670 },
            backgroundColor: "rgb(255, 255, 255, 0.88)",
            borderRadius: 3,
            transition: "ease in",
          }}
        >
          <div style={styles.body}>
            <Box
              component="img"
              sx={{
                width: {
                  xs: 275,
                  sm: 300,
                  md: 350,
                  lg: 350,
                  xl: 400,
                },
                opacity: 0.88,
              }}
              alt="Proficincies"
              src={languages}
            />
          </div>

          <div style={styles.body}>
            <Button
              variant="outlined"
              href={resume}
              download="Resume"
              target="_blank"
              style={styles.btn}
              startIcon={<DescriptionIcon />}
            >
              Download Resume
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
