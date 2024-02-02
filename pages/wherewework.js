import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

import classes from "./css/wherewework.module.scss";

const Contact = () => {
  return (
    <>
      <Box>
        <Grid container className={classes.main}>
          <Grid item xs={12} style={{justifyContent:"center"}}>
            <Image src={"/map.png"}
             height={"600px"}
             width={"800px"}
             style={{justifyContent:"center"}}></Image>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Contact;
