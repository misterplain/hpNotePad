import React from "react";
import { Grid, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
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

const holidays2024 = [
  {
    date: "January 1st",
    holiday: "New Year's Day",
    spanish: true,
    uk: true,
  },
  {
    date: "January 6th",
    holiday: "Epiphany",
    spanish: true,
    uk: false,
  },
  {
    date: "March 29th",
    holiday: "Good Friday",
    spanish: true,
    uk: true,
  },
  {
    date: "April 1st",
    holiday: "Easter Monday",
    spanish: true,
    uk: true,
  },
  {
    date: "May 1st",
    holiday: "Labour Day",
    spanish: true,
    uk: false,
  },
  {
    date: "May 6th",
    holiday: "Early May Bank Hol",
    spanish: false,
    uk: true,
  },
  {
    date: "May 27th",
    holiday: "Spring Bank Hol",
    spanish: false,
    uk: true,
  },
  {
    date: "June 24th",
    holiday: "St. John's Day",
    spanish: true,
    uk: false,
  },
  {
    date: "August 15th",
    holiday: "Assumption of Mary",
    spanish: true,
    uk: false,
  },
  {
    date: "August 26th",
    holiday: "Summer Bank Hol",
    spanish: false,
    uk: true,
  },
  {
    date: "September 11th",
    holiday: "Nat'l Day of Catalonia",
    spanish: true,
    uk: false,
  },
  {
    date: "October 12th",
    holiday: "Fiesta Nacional de España",
    spanish: true,
    uk: false,
  },
  {
    date: "November 1st",
    holiday: "All Saints Day",
    spanish: true,
    uk: false,
  },
  {
    date: "December 6th",
    holiday: "Constitution Day",
    spanish: true,
    uk: false,
  },
  {
    date: "December 9th",
    holiday: "Immaculate Conception",
    spanish: true,
    uk: false,
  },
  {
    date: "December 25th",
    holiday: "Christmas Day",
    spanish: true,
    uk: true,
  },
  {
    date: "December 26th",
    holiday: "St Stephens Day",
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
          href="https://docs.google.com/spreadsheets/d/1I_nDDtnpMhuvf3ROMupo1BUzasSnOvknBURsBC7MoG8/edit?usp=sharing"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ textDecoration: "none", margin: "5px" }}
          >
            employee time off request calendar 2024
          </Button>
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/10uvUgv9SGst4vSvxb9amp_z2WRrYDRgP76xsEjOWwvM/edit?usp=sharing"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ textDecoration: "none", margin: "5px" }}
          >
            employee time off request calendar 2025
          </Button>
        </a>
      </Grid>
      <HolidayGuide />
      {/* <Grid
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
              <TableCell align="left">Date - 2023 </TableCell>
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
      </Grid> */}
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
        {/* <Typography
          sx={{ textAlign: "center", color: "red", marginBottom: "30px" }}
        >
          Below dates for 2024 still not 100% confirmed, I'm just going off
          these two sources for now:{" "}
          <a
            href="https://publicholidays.es/catalonia/2024-dates/"
            target="_blank"
          >
            Spain
          </a>{" "}
          and{" "}
          <a href="https://www.gov.uk/bank-holidays" target="_blank">
            UK
          </a>{" "}
        </Typography> */}
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid grey" }}>
              <TableCell align="left">Year - 2024 </TableCell>
              <TableCell align="center">Spanish Bank Holiday</TableCell>
              <TableCell align="center">UK Bank Holiday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {holidays2024.map((holiday) => (
              <TableRow key={holiday.date}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: getHolidayColor(holiday) }}
                >
                  {holiday.date} - {holiday.holiday}
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
