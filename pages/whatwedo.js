import React from "react";
import { Box, Grid } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import classes from "./css/whatwedo.module.scss";

const Contact = () => {
  const images = [{ url: "https://janjatigujarat.org/wp-content/uploads/2022/12/whatwedobanner.png" }];

  return (
    <>
      <Box sx={{ width: "100%", marginBottom:"50px"}}>
        <Grid container rowSpacing={1} >
          <Grid item xs={12}>
            <SimpleImageSlider
              width={"100%"}
              height={"400PX"}
              images={images}
            />
          </Grid>

          <Grid
            item
            xs={12}
            className={classes.gridAccordion}
            style={{ marginTop: "40px" }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="education"
              >
                Education
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="hostels"
              >
                Hostels
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="healthcare"
              >
                Health Care
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="activities-among-women"
              >
                Activities Among Women
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="sports"
              >
                Sports
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="cultural"
              >
                Cultural
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="protection-of-janjati-rights"
              >
                Protection of Janjati Rights
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="village-development"
              >
                Village Development
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="urdan-janjati"
              >
                Urban Janjati
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="urban-activities"
              >
                Urban Activites
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Contact;
