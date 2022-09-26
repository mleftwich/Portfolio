import { findByLabelText } from "@testing-library/react";
import * as React from "react";
import { Box } from "@mui/system";
const styles = {
    home: {
        display: 'block',
        justifyContent: 'center',
        marginTop: '4rem'
    },
    text: {
        fontFamily: 'Poiret One, cursive', 
        textAlign: 'center',
    },
    bodytext: {
        fontFamily: 'Bellefair, serif',
        fontSize: '1rem',
        color: 'grey',
        textAlign: 'center',
      },
     
}
export function Index() {
    return (
        <Box sx={{ width: { xs: 300, sm: 400, md: 500, lg: 590, xl: 670 }, backgroundColor: 'rgb(255, 255, 255, 0.9)', borderRadius: 3}}>
        <div style={styles.home} className="container">
          
            <h2 style={styles.text}>Everybody Has Their Story</h2>
            <h1 style={styles.text}>Everyone Has Their Journey</h1> 
            <p style={styles.bodytext}>I'm Matt Leftwich - Full-Stack Web Developer, Here To Help Along The Way</p>
            </div>
            </Box>
    )
}