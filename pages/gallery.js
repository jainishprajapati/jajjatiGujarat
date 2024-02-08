import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  SwipeableViews,
} from "@mui/material";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import classes from "./css/projects.module.scss";

//https://dev.to/soumyadey/integrate-razorpay-in-your-react-app-2nib
//https://codesandbox.io/examples/package/react-grid-gallery
//https://codesandbox.io/p/sandbox/react-grid-gallery-with-react-image-lightbox-hdi8kd?file=%2Fpackage.json

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const About = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%", marginBottom: "50px" }}>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <Tabs value={value} onChange={handleChange} centered>
            {/* <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" /> */}
            <Tab label="Photos" {...a11yProps(0)} />
            <Tab label="Videos" {...a11yProps(1)} />
            <Tab label="Audio" {...a11yProps(2)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            Photos
          </TabPanel>
          <TabPanel value={value} index={1}>
            Video
          </TabPanel>
          <TabPanel value={value} index={2}>
            Audio
          </TabPanel>

          {/* <SwipeableViews
            // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel
              value={value}
              index={0}
              // dir={theme.direction}
            >
              Item One
            </TabPanel>
            <TabPanel
              value={value}
              index={1}
              // dir={theme.direction}
            >
              Item Two
            </TabPanel>
            <TabPanel
              value={value}
              index={2}
              // dir={theme.direction}
            >
              Item Three
            </TabPanel>
          </SwipeableViews> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
