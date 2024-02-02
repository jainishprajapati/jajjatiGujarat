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

const Contact = () => {
  const images = [
    {
      url: "https://janjatigujarat.org/wp-content/uploads/2022/12/whatwedobanner.png",
    },
  ];

  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: false,
      errorMessage: "You must enter a name",
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
    phone: {
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

    setFormValues(newFormValues);
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

                <TextField
                  placeholder="Enter your name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  // className={classes.field}
                  value={formValues.name.value}
                  onChange={handleChange}
                  error={formValues.name.error}
                  helperText={
                    formValues.name.error && formValues.name.errorMessage
                  }
                  style={{ marginTop: "2em" }}
                />

                <TextField
                  placeholder="Enter your Address"
                  label="Address"
                  name="address"
                  variant="outlined"
                  fullWidth
                  required
                  // className={classes.field}
                  value={formValues.name.value}
                  onChange={handleChange}
                  error={formValues.name.error}
                  helperText={
                    formValues.name.error && formValues.name.errorMessage
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
                      value={formValues.name.value}
                      onChange={handleChange}
                      error={formValues.name.error}
                      helperText={
                        formValues.name.error && formValues.name.errorMessage
                      }
                      style={{ marginTop: "2em" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      placeholder="Enter your Phone"
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      fullWidth
                      required
                      // className={classes.field}
                      value={formValues.name.value}
                      onChange={handleChange}
                      error={formValues.name.error}
                      helperText={
                        formValues.name.error && formValues.name.errorMessage
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
                  value={formValues.name.value}
                  onChange={handleChange}
                  error={formValues.name.error}
                  helperText={
                    formValues.name.error && formValues.name.errorMessage
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
                  value={formValues.name.value}
                  onChange={handleChange}
                  error={formValues.name.error}
                  helperText={
                    formValues.name.error && formValues.name.errorMessage
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
