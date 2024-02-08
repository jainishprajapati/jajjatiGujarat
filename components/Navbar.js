import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "What We Do", href: "/whatwedo" },
  { text: "Where We Work", href: "/wherewework" },
  { text: "Projects", href: "/projects" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact Us", href: "/contact" },
  { text: "Donate Now", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  //Dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //https://dev.to/soumyadey/integrate-razorpay-in-your-react-app-2nib
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    } else {
      alert("Good Work...");
    }
  }

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  //Donate Now
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
    donationAmount: {
      value: "",
      error: false,
      errorMessage: "You must enter a Donation Amount",
    },
    panNumber: {
      value: "",
      error: false,
      errorMessage: "You must enter a Pan Number",
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

    console.log("....newFormValues...", newFormValues);

    setFormValues(newFormValues);
  };

  return (
    <>
      <header>
        <nav className={`nav`}>
          <Link href={"/"}>
            {/* <a>
            <h1 className="logo">CodeWithMarish</h1>
            
          </a> */}
            <Image
              src="/janjati-logo.png"
              width={"280px"}
              height={"80px"}
              alt="Picture of the author"
            />
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                {menu.text !== "Donate Now" ? (
                  <NavItem active={activeIdx === idx} {...menu} />
                ) : (
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Donate Now
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* <Button >Donate Now</Button> */}
        </nav>
      </header>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Donate
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <form noValidate onSubmit={handleSubmit}>
          <DialogContent dividers>
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
                    formValues.country.error && formValues.country.errorMessage
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
                    formValues.contact.error && formValues.contact.errorMessage
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
              placeholder="Enter your Donation Amount"
              label="Donation Amount"
              name="donationAmount"
              variant="outlined"
              fullWidth
              required
              // className={classes.field}
              value={formValues.donationAmount.value}
              onChange={handleChange}
              error={formValues.donationAmount.error}
              helperText={
                formValues.donationAmount.error && formValues.donationAmount.errorMessage
              }
              style={{ marginTop: "2em" }}
            />

            <TextField
              placeholder="Enter your pan Number"
              label="Pan Number"
              name="panNumber"
              variant="outlined"
              fullWidth
              // className={classes.field}
              value={formValues.panNumber.value}
              onChange={handleChange}
              error={formValues.panNumber.error}
              helperText={
                formValues.panNumber.error && formValues.panNumber.errorMessage
              }
              style={{ marginTop: "2em" }}
            />
            {/* <Button
              type="submit"
              variant="outlined"
              style={{ marginTop: "2em", width: "100%" }}
            >
              Submit
            </Button> */}
          </DialogContent>
          <DialogActions>
            <Button type="submit" autoFocus>
              Pay
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </>
  );
};

export default Navbar;
