import { findByLabelText } from "@testing-library/react";
import * as React from "react";
const styles = {
    home: {
        display: 'block',
        justifyContent: 'center',
        marginTop: '3rem'
    },
    text: {
        fontFamily: 'Poiret One, cursive', 
        textAlign: 'center',
    }
}
export function Index() {
    return (
        <div style={styles.home}>
            <h1 style={styles.text}>Everybody Has Their Story</h1>
      
            <h3 style={styles.text}>Everyone Has Their Journey</h3> 
            </div>
    )
}