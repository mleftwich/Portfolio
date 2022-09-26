import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as React from "react";
import resume from "../../assets/Resume(2022).pdf";
import pic from "../../images/profile.jpg";

const styles = {
  about: {
    display: "block",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poiret One, cursive",
    textAlign: "center",
    color: "black",
    opacity: 1,
  },
  bodytext: {
    fontFamily: "Bellefair, serif",
    fontSize: "1.3rem",
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
    padding: "5px",
    borderWidth: "2px",
    borderColor: "black",
    borderStyle: "dotted",
    margin: '10px',
  },
};
export default function About() {
  return (
    
    <div>
      
        
      <div style={styles.about} className="container">
  
        <h1 style={styles.text}>About</h1>
      </div>
      
      
    
      <div className="container">
       
        <Box
          sx={{
            width: { xs: 300, sm: 400, md: 500, lg: 590, xl: 670 },
            backgroundColor: "rgb(255, 255, 255, 0.9)",
            borderRadius: 3,
            transition: "ease in",
          }}
        >
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
