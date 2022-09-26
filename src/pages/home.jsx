import logo from "../images/mleftwich.png";
import { useMediaQuery } from "react-responsive";
import { Box } from "@mui/material";
import * as React from "react";
import BottomNavigation from "./nav";
import { useState } from "react";
import  About  from "./content/about"
import  Contact  from "./content/contact"
import  Projects  from "./content/projects"

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
};

export default function Home() {
  
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div style={styles.div}>
      <div className={styles.nav}>
        <BottomNavigation />

        <Box
          component="img"
          sx={{
            width: {
              xs: 300,
              sm: 400,
              md: 500,
              lg: 595,
              xl: 670,
            },

            borderRadius: 3,
            boxShadow: 3,
          }}
          alt="Provider icon"
          src={logo}
        />
      </div>
    </div>
  );

  // body

  // footer
}
