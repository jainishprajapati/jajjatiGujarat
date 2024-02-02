import { Box, Grid, Paper, Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import SimpleImageSlider from "react-simple-image-slider";
import Details from "../components/Details/details";
import HospitalDetails from "../components/HospitalDetails/HospitalDetails";

import { styled } from "@mui/material/styles";

import classes from "./css/index.module.scss";

import image1 from "../public/2022/12/banner-2-1024x320.png";
import Publication from "../components/Publication/Publication";

export default function Home() {
  const images = [
    { url: "/2022/12/banner-1.png" },
    { url: "/2022/12/banner-3.png" },
    { url: "/2022/12/banner-2-1024x320.png" },
    { url: "/2022/12/banner-4.png" },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      {/* <Box
        display="flex"
        flexDirection={"column"}
        flexWrap="nowrap"
        className={classes.content}
      >
        <Grid className={classes.container} flexWrap="wrap">
          <Grid item justifyContent="center" spacing={10} xs={12}>
            <SimpleImageSlider
              width={"100%"}
              height={"60%"}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              navStyle={2}
            />
          </Grid>

          <Grid item flex={1} xs={12}>
            <Grid container justifyContent="center" spacing={10}>
              {[0, 1, 2, 3].map((value) => (
                <Grid key={value} item>
                  <Paper
                    sx={{
                      height: 140,
                      width: 250,
                      backgroundColor: "#1A2027",
                    }}
                    className={classes.grediant}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box> */}

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} style={{background:"white"}}>
          <Grid item xs={12}>
            <SimpleImageSlider
              width={"100%"}
              height={"400PX"}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              navStyle={2}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Item>2</Item> */}
            <Details />
          </Grid>
          <Grid item xs={12} sx={{ margin: "40px" }}>
            <Typography color="black" variant="h4" sx={{ textAlign: "center" }}>
              Janjati Kalyan Ashram Gujarat
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* <Item>3</Item> */}
            <HospitalDetails />
          </Grid>
          <Grid item xs={12}>
            <Publication/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
