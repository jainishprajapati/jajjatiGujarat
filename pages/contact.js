import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import classes from "./css/contact.module.scss";
import { KeyboardArrowRight } from "@mui/icons-material";
import Map from "../components/Map";
import axios from "axios";

const Contact = () => {
  const images = [
    {
      url: "https://janjatigujarat.org/wp-content/uploads/2022/12/whatwedobanner.png",
    },
  ];

  const [formValues, setFormValues] = useState({
    firstName: {
      value: "",
      error: false,
      errorMessage: "You must enter a first name",
    },
    lastName: {
      value: "",
      error: false,
      errorMessage: "You must enter a last name",
    },
    address: {
      value: "",
      error: false,
      errorMessage: "You must enter a address",
    },
    country: {
      value: "",
      error: false,
      errorMessage: "You must enter a country",
    },
    contact: {
      value: "",
      error: false,
      errorMessage: "You must enter a phone",
    },
    email: {
      value: "",
      error: false,
      errorMessage: "You must enter a email",
    },
    message: {
      value: "",
      error: false,
      errorMessage: "You must enter a Message",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === "") {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true,
          },
        };
      }
    }

    axios({
      method: "post",
      url: "http://localhost:5000/api/v1/contacts",
      // responseType: "stream",
      data: {
        firstName: newFormValues.firstName.value,
        lastName: newFormValues.lastName.value,
        email: newFormValues.email.value,
        contact: newFormValues.contact.value,
        address: newFormValues.address.value,
        country: newFormValues.country.value,
        message: newFormValues.message.value,
        countryCode: "+91",
      },
    })
      .then(function (response) {
        newFormValues.firstName.value = "";
        newFormValues.lastName.value = "";
        newFormValues.email.value = "";
        newFormValues.contact.value = "";
        newFormValues.address.value = "";
        newFormValues.country.value = "";
        newFormValues.message.value = "";
        setFormValues(newFormValues);
        // alert(JSON.stringify(response.data));
        // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
      })
      .catch((error) => {
        alert(error);

        setFormValues(newFormValues);
      });
  };

  return (
    <>
      <Box sx={{ width: "100%", marginBottom: "50px" }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <SimpleImageSlider
              width={"100%"}
              height={"400PX"}
              images={images}
            />
          </Grid>

          <Grid item xs={6} className={classes.gridAccordion}>
            <Container className={classes.container}>
              <form noValidate onSubmit={handleSubmit}>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  Janjati Kalyan Ashram Gujarat
                </Typography>

                <Grid container rowSpacing={1} columnSpacing={4}>
                  <Grid item xs={6}>
                    <TextField
                      placeholder="Enter your Firstname"
                      label="First Name"
                      name="firstName"
                      variant="outlined"
                      fullWidth
                      required
                      // className={classes.field}
                      value={formValues.firstName.value}
                      onChange={handleChange}
                      error={formValues.firstName.error}
                      helperText={
                        formValues.firstName.error &&
                        formValues.firstName.errorMessage
                      }
                      style={{ marginTop: "2em" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      placeholder="Enter your Last Name"
                      label="Last Name"
                      name="lastName"
                      variant="outlined"
                      fullWidth
                      required
                      // className={classes.field}
                      value={formValues.lastName.value}
                      onChange={handleChange}
                      error={formValues.lastName.error}
                      helperText={
                        formValues.lastName.error &&
                        formValues.lastName.errorMessage
                      }
                      style={{ marginTop: "2em" }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  placeholder="Enter your Address"
                  label="Address"
                  name="address"
                  variant="outlined"
                  fullWidth
                  required
                  // className={classes.field}
                  value={formValues.address.value}
                  onChange={handleChange}
                  error={formValues.address.error}
                  helperText={
                    formValues.address.error && formValues.address.errorMessage
                  }
                  style={{ marginTop: "2em" }}
                />
                <Grid container rowSpacing={1} columnSpacing={4}>
                  <Grid item xs={6}>
                    <TextField
                      placeholder="Enter your Country"
                      label="Country"
                      name="country"
                      variant="outlined"
                      fullWidth
                      required
                      // className={classes.field}
                      value={formValues.country.value}
                      onChange={handleChange}
                      error={formValues.country.error}
                      helperText={
                        formValues.country.error &&
                        formValues.country.errorMessage
                      }
                      style={{ marginTop: "2em" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      placeholder="Enter your Contact"
                      label="Contact"
                      name="contact"
                      variant="outlined"
                      fullWidth
                      required
                      // className={classes.field}
                      value={formValues.contact.value}
                      onChange={handleChange}
                      error={formValues.contact.error}
                      helperText={
                        formValues.contact.error &&
                        formValues.contact.errorMessage
                      }
                      style={{ marginTop: "2em" }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  placeholder="Enter your Email"
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  // className={classes.field}
                  value={formValues.email.value}
                  onChange={handleChange}
                  error={formValues.email.error}
                  helperText={
                    formValues.email.error && formValues.email.errorMessage
                  }
                  style={{ marginTop: "2em" }}
                />

                <TextField
                  placeholder="Enter your Message"
                  label="Message"
                  name="message"
                  variant="outlined"
                  fullWidth
                  required
                  // className={classes.field}
                  value={formValues.message.value}
                  onChange={handleChange}
                  error={formValues.message.error}
                  helperText={
                    formValues.message.error && formValues.message.errorMessage
                  }
                  style={{ marginTop: "2em" }}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ marginTop: "2em", width: "100%" }}
                >
                  Submit
                </Button>
              </form>
            </Container>
          </Grid>

          <Grid item xs={6} className={classes.gridAccordion}>
            {/* <Map style={{height:"100%", width:"100%"}}/> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Contact;
