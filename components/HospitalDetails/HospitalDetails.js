"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import image1 from "../../public/2022/12/chhatra.png";
import image2 from "../../public/2022/12/vision-mission-300x300.jpg";
import image3 from "../../public/2022/12/whatwe-do.jpg";
import image4 from "../../public/2022/12/gujarat-we-work.jpg";


const HospitalDetails = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        // gap: "10px",
        margin: "30px",
        // padding: "30px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* {isHovered && (
        <div className="w-screen h-full bg-gray-200 transition-all duration-300">
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </div>
      )} */}

      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3}>
          <Card>
            {/* Set the layout property to "responsive" for the Image */}
            <Typography variant="h6" style={{margin:"10px"}}>About Us</Typography>
            <Image
              src={image1}
              alt="logo"
              width={"100px"}
              height={"60px"}
              layout="responsive"
            />
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            {/* Set the layout property to "responsive" for the Image */}
            <Typography variant="h6" style={{margin:"10px"}}>Vision & Mission</Typography>
            <Image
              src={image2}
              alt="logo"
              width={"100px"}
              height={"60px"}
              layout="responsive"
            />
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            {/* Set the layout property to "responsive" for the Image */}
            <Typography variant="h6" style={{margin:"10px"}}>What We Do</Typography>
            <Image
              src={image3}
              alt="logo"
              width={"100px"}
              height={"60px"}
              layout="responsive"
            />
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            {/* Set the layout property to "responsive" for the Image */}
            <Typography variant="h6" style={{margin:"10px"}}>Where We Work</Typography>
            <Image
              src={image4}
              alt="logo"
              width={"100px"}
              height={"60px"}
              layout="responsive"
            />
          </Card>
        </Grid>
      </Grid>

      {/* Card 1 */}
      {/* <Box
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="relative"
      ></Box> */}

      {/* Card 2 */}
      {/* <Box
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="relative"
      ></Box> */}

      {/* Card 3 */}
      {/* <Box
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="relative"
      ></Box> */}
    </Box>
  );
};

export default HospitalDetails;
