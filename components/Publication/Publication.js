"use client";
import React, { useRef, useState } from "react";
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
import logo from "../../public/logo.png";

import classes from "./publication.module.scss";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

/*
Ref Link: https://dev.to/aneeqakhan/building-an-image-slider-with-smooth-scrolling-using-react-1jdb
**/

const Publication = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const images = [
    {
      id: 1,
      url: "https://source.unsplash.com/300x300/?perth,australia",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/300x300/?west-australia",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/300x300/?perth",
    },
    {
      id: 4,
      url: "https://source.unsplash.com/300x300/?quokka,perth",
    },
    {
      id: 5,
      url: "https://source.unsplash.com/300x300/?margaretriver,australia",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        // gap: "10px",
        // margin: "30px",
        marginLeft: "30px",
        marginBottom: "20px",
        // padding: "30px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3}>
          <Card>
            {/* Set the layout property to "responsive" for the Image */}
            <CardHeader title={"Publication"}></CardHeader>
            <CardContent style={{ textAlign: "center" }}>
              <Image
                src={logo}
                alt="logo"
                // width={"400px"}
                height={"150px"}
                // layout="responsive"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
          <div className={classes.App}>
            {/* Left navigation button */}
            <button
              className={classes.navbtn}
              onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
              }}
            >
              <ChevronLeftIcon />
            </button>
            {/* Image container */}
            <div className={classes.imagesContainer} ref={sliderRef}>
              {images.map((image) => {
                console.log(image);
                return (
                  <img
                    className={classes.image}
                    alt="sliderImage"
                    key={image?.id}
                    src={image?.url}
                  />
                );
              })}
            </div>
            {/* Right navigation button */}
            <button
              className={classes.navbtn}
              onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft += scrollAmount; // Scroll right by the specified amount
              }}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Publication;
