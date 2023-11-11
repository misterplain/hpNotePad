import React from "react";
import { Grid,Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BiCheck } from "react-icons/bi";
import HolidayGuide from "../components/HolidayGuide/HolidayGuide";

const holidays2022 = [
  {
    date: "November 1st",
    holiday: "Holiday name nov 1st",
    spanish: true,
    uk: false,
  },
  {
    date: "December 6th",
    holiday: "December 6th",
    spanish: true,
    uk: false,
  },
  {
    date: "December 8th",
    holiday: "December 8th",
    spanish: true,
    uk: false,
  },
  {
    date: "December 25th",
    holiday: "Holiday name December 25th",
    spanish: true,
    uk: true,
  },
  {
    date: "December 26th",
    holiday: "Holiday name December 26th",
    spanish: true,
    uk: true,
  },
];

const getHolidayColor = (holiday) => {
  if (holiday.spanish && holiday.uk) {
    return "purple";
  } else if (holiday.spanish && !holiday.uk) {
    return "blue";
  } else if (holiday.uk && !holiday.spanish) {
    return "green";
  }
};

const HolidaysScreen = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid
        item
        xs={12}
        sm={10}
        md={8}
        sx={{ textAlign: "center" }}
        marginBottom
      >
        <a
          href="https://docs.google.com/spreadsheets/d/16wuXrTP0hT-B3XaXAydmwzkVK6eVd1-qKQK6523Izq0/edit?usp=sharing"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ textDecoration: "none" }}
          >
            employee time off request calendar
          </Button>
        </a>
      </Grid>
      <HolidayGuide />
      <Grid
        item
        xs={12}
        sm={10}
        md={10}
        lg={9}
        sx={{
          margin: "10px 0px",
          border: "3px solid #000080",
          padding: "30px",
          borderRadius: "50px",
        }}
      >
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid grey" }}>
              <TableCell align="left">Date - 2022 </TableCell>
              <TableCell align="center">Spanish Bank Holiday</TableCell>
              <TableCell align="center">UK Bank Holiday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {holidays2022.map((holiday) => (
              <TableRow key={holiday.date}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: getHolidayColor(holiday) }}
                >
                  {holiday.date}
                </TableCell>
                <TableCell align="center">
                  {holiday.spanish ? (
                    <BiCheck
                      style={{
                        fontSize: "25px",
                      }}
                    />
                  ) : null}
                </TableCell>
                <TableCell align="center">
                  {holiday.uk ? (
                    <BiCheck
                      style={{
                        fontSize: "25px",
                      }}
                    />
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default HolidaysScreen;
