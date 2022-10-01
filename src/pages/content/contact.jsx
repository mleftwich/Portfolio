import * as React from "react";
import { Box } from "@mui/material";
// IMPORTS FOR FORM
import { useState } from "react";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Share, cursive",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.6",
    fontWeight: "bold",
  },
  bodytext: {
    fontFamily: "Saira Extra Condensed, sans-serif",
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

// CONTACT PAGE
export default function Contact() {
  /* INITIALIZING DEFAULT FORM VALUES */


  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  // FUNCTION TO SEND EMAIL
  function Email(name, email, message) {
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };
    const key = "WxkQ-MCMatvvcNM1s";

    emailjs
      .send("service_nal7a9j", "template_wj34n35", templateParams, key)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          showResult(true);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  }

  /* CONTROL STATE */
  const [formValues, setFormValues] = useState(defaultValues);
  const [response, showResult] = useState(false);

  /* HANDLE CHANGE ON FROM INPUT */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  
 
  // FUNCTION TO SHOW SUCCESSFUL EMAIL
  function Response() {
    return (
      <div>
        <p style={styles.bodytext}>Your message has been sent.</p>
      </div>
    );
  }
  setTimeout(() => {
    showResult(false);
  }, 5000);

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
            required
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
            onClick={() =>
              Email(formValues.name, formValues.email, formValues.message)
            }
          >
            Send
          </Button>
        </div>
      </Box>
      {response ? <Response /> : null}
    </div>
  );
}
