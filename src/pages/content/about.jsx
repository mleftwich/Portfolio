import { Box } from "@mui/system";

import * as React from "react";

import pic from "../../images/profile.png";

const styles = {
  about: {
    display: "block",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Saira Extra Condensed, sans-serif",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.6",
    fontWeight: "bold",
  },
  bodytext: {
    fontFamily: "Saira Extra Condensed, sans-serif",
    fontSize: "1.3rem",
    textAlign: "center",
  },
  picbox: {
    display: "flex",
    justifyContent: "center",
  },
  pic: {
    height: "12rem",
    width: "auto",
    top: "10rem",
    borderRadius: "200px",
    opacity: "90%",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    padding: "2px",
  },
};
export default function About() {
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
          <h1 style={styles.text}>About Me</h1>
          <p style={styles.bodytext}>
            Matthew Leftwich - Innovative web solutions - shift left to go
            right. Full stack web-developer/lateral thinker with a background in
            education and data processing.
            <br />
            <br />
            Previously self-taught, gained Certificate in Full-Stack
            Web-Development from the University of Western Australia, refining
            skills in front and back-end technologies including HTML, CSS,
            JavaScript, MySQL, and the MERN stack.
            <br />
            <br />
            Experience implementing intuitive, functional and responsive UIX, in
            addition to structured, practical back end systems with thoughtful
            end points and comprehensive data-basing to provide optimal
            experience.
            <br />
            <br />
            Goal oriented and result driven, satisfaction is derived from
            implementing creative remedies to solve complex problems.
            Consistently enthusiastic to continue learning and providing quality
            service and solutions to reach objectives.
            <br />
            <br />
            Familiar with SCRUM and agile frameworks, and able to work well
            within a team or individually.
          </p>
          <div style={styles.picbox}>
            <img src={pic} style={styles.pic} alt="Profile" />
          </div>
        </Box>
      </div>
    </div>
  );
}
