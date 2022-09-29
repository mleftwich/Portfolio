import * as React from "react";
import { Box } from "@mui/system";
const styles = {
  home: {
    display: "block",
    justifyContent: "center",
    marginTop: "4rem",
  },
  text: {
    fontFamily: "Poiret One, cursive",
    textAlign: "center",
  },
  bodytext: {
    fontFamily: "Poiret One, cursive",
    textAlign: "center",
    color: "#3bbbe0",
  },
  name: {
    fontFamily: "Bellefair, serif",
    color: "grey",
    textAlign: "center",
    fontSize: "1.3rem",
  },
};

// LANDING
export function Index() {
  return (
    <Box
      sx={{
        width: { xs: 370, sm: 450, md: 500, lg: 595, xl: 670 },
        backgroundColor: "rgb(255, 255, 255, 0.6)",
        borderRadius: 3,
      }}
    >
      <div style={styles.home} className="container">
        <h2 style={styles.text}>Here For The Journey</h2>

        <p style={styles.name}>Matt Leftwich - Full Stack Web Developer</p>
      </div>
    </Box>
  );
}
