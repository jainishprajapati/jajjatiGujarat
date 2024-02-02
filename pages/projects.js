import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import classes from "./css/projects.module.scss";

function createData(no, name, value1, value2) {
  return { no, name, value1, value2 };
}

const rows = [
  createData(1, "Total Number of Districts", "", 748),
  createData(2, "Total Janjati Districts", "", 455),
  createData(3, "Janjati Districts with work", "", 361),
  createData(4, "Janjati District Committees", "", 328),
  createData(5, "Vanvasi Vikas Khand", "", 2501),
  createData(6, "Vikas Khand with work", "", 1229),
  createData(7, "Vanvasi Vikas Khand with  Commitee", "", 914),
  createData(8, "Total Janjati Villages", "", 182661),
  createData(9, "Janjati Villages in Contact", "", 53898),
  createData(10, "Gram Samiti Numbers", "", 13541),
  createData("", "Nagar Samiti Nos.", "", 406),
  createData(11, "Gram Mahila Samiti Nos.", "", 1866),
  createData("", "Nagar Mahila Samiti Nos.", "", 140),
  createData(12, "Total No. of Projects", "", 19398),
  createData(13, "Total No. of project Places", "", 14914),
  createData(
    14,
    "Lok Kala & Other Activities Villages (Other Than Project Villages)",
    "",
    1750
  ),
  createData(15, "Total Full Time Workers", "Male", 685),
  createData("", "", "Female", 173),
  createData(16, "Janjati Full Time Workers", "Male", 359),
  createData("", "", "Female", 118),
  createData(17, "Total Vistarak", "Male", 63),
  createData("", "", "Female", 31),
  createData(18, "Total Janajati Vistarak	", "Male", 66),
  createData("", "", "Female", 26),
  createData(19, "Total Part Time Workers	", "Male", 547),
  createData("", "", "Female", 351),
];

const rows1 = [
  createData(1, "HOSTELS", "Boys", 188),
  createData("", "", "Girls", 48),
  createData(2, "STUDENTS", "BOYS", 4339),
  createData("", "", "Girls", 1710),
  createData(3, " EDUCATION CENTERS", "", ""),
  createData("", "Formal Education Centers", "", 217),
  createData("", "Beneficiaries", "", "30075"),
  createData("", "Non Formal Education Centers", "", 3385),
  createData("", "Beneficiaries", "", 63755),
  createData(4, "ECONOMIC DEVELOPMENT :-", "", ""),
  createData("", "a) Agriculture Development Centers", "", 55),
  createData("", "Beneficiaries:", "", 1092),
  createData("", "b) Skill Development Centers", "", 126),
  createData("", "Beneficiaries:", "", 2335),
  createData("", "c) Self Help Group", "Places", 1577),
  createData("", "", "Groups", 3378),
  createData("", "Beneficiaries :", "", 41517),
  createData("", "d) Gramvikas –", "", 104),
  createData("", "Beneficiaries:", "", 8152),
  createData("", "e) Any Other", "", 15),
  createData("", "Beneficiaries:", "", 1908),
  createData(5, "MEDICAL :-", "", ""),
  createData("", "a) Daily", "", 148),
  createData("", "b) Weekly", "", 57),
  createData("", "c) Aarogya Rakshak (Village Health Worker)", "", 4277),
  createData("", "d) Hospital", "", 4),
  createData("", "e) Medical Camps", "", 428),
  createData("", "Beneficiaries:", "", 690372),
  createData(6, "KHELKUD CENTERS (SPORTS) :-", "Daily", 460),
  createData("", "", "Weekly", 1610),
  createData(7, "SHRADDHA JAGARAN Satsang", "", 5326),
  createData("", "Any Other", ""),
  createData("", "TOTAL PROJECTS", "", 19398),
  createData("", "TOTAL PROJECTS PLACES", "", 14914),
  createData(
    "",
    "Villages with Lok Kala & Other Activities (Other Than Project Villages)",
    "",
    1750
  ),
];

const Contact = () => {
  const images = [
    {
      url: "https://janjatigujarat.org/wp-content/uploads/2022/12/whatwedobanner.png",
    },
  ];

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

          <Grid
            item
            xs={12}
            className={classes.gridAccordion}
            style={{ marginTop: "40px" }}
          >
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              ORGANISATIONAL INFORMATION
            </Typography>
            <Typography color={"gray"}>
              Vanvasi Kalyan Ashram works for the welfare of Janjatis through
              various service projects on Pan India basis.
            </Typography>

            <Typography color={"gray"} style={{ marginTop: "40px" }}>
              Below table gives the total organisation information as on date:
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      S. No.{" "}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      ORGANISATIONAL INFORMATION (FEBRUARY 2021)
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "bold" }}
                    ></TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      TOTAL
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.no}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {row.no}
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.value1}</TableCell>
                      <TableCell align="center">{row.value2}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid
            item
            xs={12}
            className={classes.gridAccordion}
            style={{ marginTop: "40px" }}
          >
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              SERVICE PROJECT AT A GLANCE
            </Typography>
            <Typography color={"gray"}>
              Vanvasi Kalyan Ashram works for the welfare of Janjatis through
              various service projects on Pan India basis.
            </Typography>

            <Typography color={"gray"} style={{ marginTop: "40px" }}>
              Below table gives the total organisation information as on date:
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.gridAccordion}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      S. No.{" "}
                    </TableCell>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      PROJECT AT A GLANCE -FEBRUARY 2021
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontWeight: "bold" }}
                    ></TableCell>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      TOTAL
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows1.map((row) => (
                    <TableRow
                      key={row.no}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {row.no}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="center">{row.value1}</TableCell>
                      <TableCell align="center">{row.value2}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Contact;
