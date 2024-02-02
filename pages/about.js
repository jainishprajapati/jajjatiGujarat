import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

import classes from "./css/projects.module.scss";

const About = () => {
  const images = [
    {
      url: "https://janjatigujarat.org/wp-content/uploads/2022/12/whatwedobanner.png",
    },
  ];

  return (
    <Box sx={{ width: "100%", marginBottom: "50px" }}>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <SimpleImageSlider width={"100%"} height={"400PX"} images={images} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.gridAccordion}
        style={{ marginTop: "40px", marginLeft: "40px", marginRight: "40px"}}
      >
        <Typography color={"gray"} style={{ marginTop: "40px" }}>
          Bharat is a land of unique cultural heritage having diversified
          nature. It is also a land of hundreds of Janjatis or ‘Vanvasis’. The
          Vanavasis find a mention in all ancient scriptures/literatures of our
          nation. In Ramayana, there are several references like Shabari, Baali,
          Sugreev etc while Mahabharata have references of Eklavya, Barbarik,
          Ghatotkacha etc. There were many Vanavasis who had actively
          participated in the freedom struggle like Birsa Munda in Ranchi region
          (Jharkhand State), Kanhoji Bhangare in Maharashtra, Talakkal Chandu in
          Kerala, Vishoi in Orissa, Tirot Sing in Meghalaya, Santhal leaders in
          Bihar (Siddo, Kanoo, and Tilka Manjhi), Rani Gaidinliu and Shahid
          Jadonang of Manipur, Punja Bhil of Rajasthan. Many more are unsung
          Heroes from among Janjatis who took part in Indian Freedom Movement.
        </Typography>

        <Typography color={"gray"} style={{ marginTop: "20px" }}>
          Janjatis in our country comprise approximately 10% of total
          population, spread practically in all the States & Union Territories,
          except Haryana, Punjab and Delhi.
        </Typography>

        <Typography color={"gray"} style={{ marginTop: "20px" }}>
          The peculiarities which set the Vanvasis, apart from other citizens
          are their dresses, traditional adornments, their dialect, folklore and
          customs, their life style, traditions, their deities, etc. They have
          remained backward economically and socially. A Stigma and criminality
          is unfortunately attached with this section of society since
          generations by some sections of city dwellers in country. It is the
          need of the hour for society to respect Vanvasis and their rich
          culture.
        </Typography>

        <Typography color={"gray"} style={{ marginTop: "20px" }}>
          With the inspiration from Thakkar Bappa (Gandhian Leader) in the
          beginning, Vanvasi Kalyan Ashram was established by Mr. Ramakant
          Keshav Deshpande (popularly known as Vanyogi Balasaheb Deshpande), on
          26th December 1952 at Jashpur in Madhya Pradesh (presently in
          Chhatisgarh) by enrolling 13 children of local Janjatis to start a
          hostel project.
        </Typography>

        <Typography color={"gray"} style={{ marginTop: "20px" }}>
          Encouraged with the success of various projects for the welfare of
          Janjatis over the period, from 1978, Vanvasi Kalyan Ashram extended
          its work in every state of India having Janjati population.
        </Typography>

        <Typography color={"gray"} style={{ marginTop: "20px" }}>
          Among all the volunteers of Vanvasi Kalyan Ashram, nearly half are
          from Janjatis. Apart from these, several students, working persons,
          professionals, retired persons etc are dedicate working for various
          projects for the Janjatis in the field of education, health,
          agriculture, economic development, to protect the constitutional
          rights, sports, spiritual and cultural congregations (Shraddha
          Jagaran) etc.
        </Typography>
      </Grid>
    </Box>
  );
};

export default About;
