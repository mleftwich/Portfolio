import logo from "../images/mleftwich.png";
import { Box } from "@mui/material";
import * as React from "react";
//import BottomNavigation from "./nav";
import { Index } from "./content";
import About from "./content/about";
import Contact from "./content/contact";
import Projects from "./content/projects";
import Resume from "./content/resume";
// NAV IMPORTS
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ContactIcon from "@mui/icons-material/Help";
import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from "@mui/icons-material/AccountCircle";
import ProjectsIcon from "@mui/icons-material/Filter";
import { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";

import Footer from "./content/footer";
// INLINE STYLES
const styles = {
  div: {
    display: "flex",
    justifyContent: "center",
    margin: "20%",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
  },
  iconText: {
    fontFamily: "Share, cursive",
  },
};

export default function Home() {
  // HANDLE EVENTS FOR PAGE/ICON CHANGES
  const [value, setValue] = useState("recents");
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // FUNCTION TO RENDER CURRENT PAGE FROM HANDLE EVENTS
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Index />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Portfolio") {
      return <Projects />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  // RENDER PAGES
  return (
    // CONTAINERS
    <div style={styles.div}>
      <div className={styles.nav}>
        {/* NAVIGATION */}
        <BottomNavigation
          sx={{
            width: { xs: 370, sm: 450, md: 500, lg: 595, xl: 670 },
            borderRadius: 3,
            "& .MuiBottomNavigationAction-label": {
              fontFamily: "Smooch Sans, sans-serif",
              fontSize: "1rem",
            },
          }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<HomeIcon />}
            onClick={() => handlePageChange("Home")}
          />
          <BottomNavigationAction
            label="About"
            value="About"
            icon={<AboutIcon />}
            onClick={() => handlePageChange("About")}
          />
          <BottomNavigationAction
            label="Portfolio"
            value="Portfolio"
            icon={<ProjectsIcon />}
            onClick={() => handlePageChange("Portfolio")}
          />
          <BottomNavigationAction
            label="Resume"
            value="Resume"
            icon={<DescriptionIcon />}
            onClick={() => handlePageChange("Resume")}
          />
          <BottomNavigationAction
            label="Contact"
            value="Contact"
            icon={<ContactIcon />}
            onClick={() => handlePageChange("Contact")}
          />
        </BottomNavigation>

        {/* LOGO RENDER */}
        <Box
          component="img"
          sx={{
            width: {
              xs: 370,
              sm: 450,
              md: 500,
              lg: 595,
              xl: 670,
            },

            borderRadius: 3,
            boxShadow: 3,
            opacity: 0.95,
          }}
          alt="Provider icon"
          src={logo}
        />

        {/* CONTENT RENDER */}
        {renderPage()}
        <Footer />
      </div>
    </div>
  );

  // body

  // footer
}
