// ICONS AND LAYOUT IMPORTS
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as React from "react";

const styles = {
  btngroup: {
    display: "flex",
    justifyContent: "center",
  },
};

// FOOTER
export default function Footer() {
  return (
    <div className="container">
      <Box
        sx={{
          width: { xs: 370, sm: 450, md: 500, lg: 595, xl: 670 },
          backgroundColor: "rgb(255, 255, 255, 0.9)",
          borderRadius: 3,
          transition: "ease in",
        }}
      >
        <div style={styles.btngroup} className="container">
          <ButtonGroup variant="text" aria-label="text button group">
            <Button
              href="http://linkedin.shiftleft.net.au"
              target="_blank"
              startIcon={<LinkedInIcon />}
            >
              Linkedin
            </Button>
            <Button
              href="http://github.shiftleft.net.au"
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
            <Button
              href="https://twitter.com/MattLefty"
              target="_blank"
              startIcon={<TwitterIcon />}
            >
              Twitter
            </Button>
          </ButtonGroup>
        </div>
      </Box>
    </div>
  );
}
