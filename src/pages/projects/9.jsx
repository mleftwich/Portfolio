import * as React from "react";
import { Box } from "@mui/material";
import screenshot from "../../images/projects/gh.png";


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

export default function Project9() {
  return (
    <div>
      <div className="container">
        <h1 style={styles.text}>More Work</h1>

        <p style={styles.bodytext}>
        More work and examples available at my GitHub page, for any questions please reach out via the contact section.
        
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
       </div>
    
   
    </div>
  );
}
