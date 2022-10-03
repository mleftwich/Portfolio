import * as React from "react";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import CircularProgress from '@mui/material/CircularProgress';
// IMPORTS FOR FORM
import { useState } from "react";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import validator from "email-validator";
const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Saira Extra Condensed, sans-serif",
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

  // FUNCTION TO CHECK IF VALID EMAIL
  function checkEmail(email) {
    if (validator.validate(email) === false) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  }

  // FUNCTION TO CHECK REQUIRED FIELDS
  function checkNameField(name) {
    if (!name) {
      checkName(true);
    } else {
      checkName(false);
    }
  }
  function checkMsgField(msg) {
    if (!msg) {
      checkMsg(true);
    } else {
      checkMsg(false);
    }
  }

  // FUNCTION TO SEND EMAIL
  function Email(name, email, message) {
    if (!name) {
      validate(true);
      return;
    } else if (!email) {
      validate(true);
      return;
    } else if (!message) {
      validate(true);
      return;
    } else {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };
      const key = "WxkQ-MCMatvvcNM1s";
      loading(true)
      emailjs
        .send("service_nal7a9j", "template_wj34n35", templateParams, key)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            loading(false)
            showResult(true);
          },
          function (err) {
            console.log("FAILED...", err);
          }
        );
    }
  }

  /* CONTROL STATE */
  const [formValues, setFormValues] = useState(defaultValues);
  const [response, showResult] = useState(false);
  const [email, setEmail] = useState(false);
  const [userName, checkName] = useState(false);
  const [userMsg, checkMsg] = useState(false);
  const [valid, validate] = useState(false);
  const [load, loading] = useState(false);
  /* HANDLE CHANGE ON FROM INPUT */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    checkEmail(formValues.email);
    checkMsgField(formValues.message);
    checkNameField(formValues.name);
  };

  // FUNCTION TO SHOW SUCCESSFUL EMAIL
  function Response() {
    return (
      <div>
        <p style={styles.bodytext}>Your message has been sent.</p>
      </div>
    );
  }


  // TIME OUT ALERTS
  setTimeout(() => {
    validate(false);
  }, 5000);

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
        <h1 style={styles.text}>Contact</h1>

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
            onBlur={() => checkNameField(formValues.name)}
            helperText={userName ? "Please provide a name" : null}
          />

          <TextField
            id="email-input"
            required
            name="email"
            label="Your Email"
            type="text"
            value={formValues.email}
            onChange={handleInputChange}
            onBlur={() => checkEmail(formValues.email)}
            style={styles.input}
            helperText={email ? "Please provide a valid email" : null}
          />
        </div>
        <div style={styles.body}>
          <TextField
            id="msg-input"
            name="message"
            label="Message"
            type="text"
            required
            value={formValues.message}
            onChange={handleInputChange}
            style={styles.msg}
            multiline={true}
            rows={5}
            onBlur={() => checkMsgField(formValues.message)}
            helperText={userMsg ? "Please provide a message" : null}
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
      <div style={styles.body}>
      {load ? <CircularProgress /> : null}
      </div>
      {response ? <Response /> : null}
      {valid ? (
        <Alert variant="outlined" severity="info">
          You must fill out all fields.
        </Alert>
      ) : null}
    </div>
  );
}
