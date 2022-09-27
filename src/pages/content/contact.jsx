import * as React from "react";
import { Box } from "@mui/material";
// IMPORTS FOR FORM
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

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
  bodytext: {
    fontFamily: "Bellefair, serif",
    fontSize: "1.3rem",
    textAlign: "center",
  },
  input: {
    width: "15rem",
    margin: "1rem",
  },
  msg: {
    width: "30rem",
  },
};

export default function Contact() {
  {/* INITIALIZING DEFAULT FORM VALUES */}
    const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  {/* CONTROL STATE */}
  const [formValues, setFormValues] = useState(defaultValues);

  {/* HANDLE CHANGE */}
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    // LAYOUT BOX AND WRAPPER
    <div className="container">
      <Box
        sx={{
          width: { xs: 370, sm: 450, md: 500, lg: 595, xl: 670 },
          backgroundColor: "rgb(255, 255, 255, 0.88)",
          borderRadius: 3,
          transition: "ease in",
        }}
      >
        <h2 style={styles.text}>Contact Me</h2>

        {/* START OF FORM */}
        <div style={styles.body}>
          <TextField
            id="name-input"
            name="name"
            label="Your Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            style={styles.input}
          />

          <TextField
            id="email-input"
            name="email"
            label="Your Email"
            type="text"
            value={formValues.email}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.body}>
          <TextField
            id="msg-input"
            name="message"
            label="Message"
            type="text"
            value={formValues.msg}
            onChange={handleInputChange}
            style={styles.msg}
            multiline={true}
            rows={5}
          />
        </div>
        
        {/* SUBMIT BUTTON */}
        <div style={styles.body}>
          <Button
            variant="outlined"
            style={styles.input}
            onClick={console.log(formValues)}
          >
            Send
          </Button>
        </div>
      </Box>
    </div>
  );
}
