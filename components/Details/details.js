import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
// import { useMediaQuery } from "@/Hooks/useMediaQuery";

import classes from "./details.module.scss";

const details = () => {
  //   const MediaQuery = useMediaQuery("(min-width:700px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // gap: "10px",
        // margin: "10px",
        // padding: "30px",
        alignItems: "center",
        justifyContent: "center",
      }}
      classes={classes.grediant}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        className={classes.grediant}
      >
        <Grid item xs={3}>
          <div
            style={{
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              <CountUp end={150} />
            </Typography>
            <Typography
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Total Project
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              <CountUp end={100} />+
            </Typography>
            <Typography
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Villages
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              <CountUp end={65} />+
            </Typography>
            <Typography
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              We Serve
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              <CountUp end={70} />+
            </Typography>
            <Typography
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Success
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default details;
