import * as React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
// IMPORT PROJECTS
import Project1 from "../projects/1";
import Project2 from "../projects/2";
import Project3 from "../projects/3";
import Project4 from "../projects/4";
import Project5 from "../projects/5";
import Project6 from "../projects/6";

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

export default function Projects() {
  // HANDLE CHANGE FUNCTIONS
  const [currentPage, setCurrentPage] = useState(1);

  // PAGE UP
  const handlePageChangeUp = (page) => {
    if (page < 6) {
      const newPage = page + 1;
      setCurrentPage(newPage);
    }
  };
  // PAGE DOWN
  const handlePageChangeDown = (page) => {
    if (page > 1) {
      const newPage = page - 1;
      setCurrentPage(newPage);
    }
  };

  // FUNCTION TO RETURN CORRECT PROJECT
  const renderPage = () => {
    if (currentPage === 1) {
      return <Project1 />;
    } else if (currentPage === 2) {
      return <Project2 />;
    } else if (currentPage === 3) {
      return <Project3 />;
    } else if (currentPage === 4) {
      return <Project4 />;
    } else if (currentPage === 5) {
      return <Project5 />;
    } else if (currentPage === 6) {
      return <Project6 />;
    }
  };

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
          <div style={styles.body}></div>

          <div style={styles.body} className="container">
            <Button
              onClick={() => handlePageChangeDown(currentPage)}
              startIcon={<SkipPreviousIcon />}
            ></Button>

            {renderPage()}

            <Button
              onClick={() => handlePageChangeUp(currentPage)}
              startIcon={<SkipNextIcon />}
            ></Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
