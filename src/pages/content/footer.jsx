// ICONS AND LAYOUT IMPORTS
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as React from "react";
import resume from '../../assets/Resume(2022).pdf'

const styles = {
   
    btngroup: {
      display: "flex",
      justifyContent: "center",
    }
  };

  // FOOTER
export default function Footer() {
    return (
     
        <div className="container">
      <Box sx={{ width: { xs: 370, sm: 450, md: 500, lg: 595, xl: 670 }, backgroundColor: 'rgb(255, 255, 255, 0.9)', borderRadius: 3, transition: "ease in"}}>
      <div style={styles.btngroup} className="container">
       <ButtonGroup variant="text" aria-label="text button group">

        <Button href={resume} download="Resume" target='_blank' startIcon={<DescriptionIcon />}>Resume</Button>
 
            <Button href="http://linkedin.shiftleft.net.au" startIcon={<LinkedInIcon />}>Linkedin</Button>
            <Button href="http://github.shiftleft.net.au" startIcon={<GitHubIcon />}>GitHub</Button>
            </ButtonGroup>

</div>
</Box>
</div>
    )
}

