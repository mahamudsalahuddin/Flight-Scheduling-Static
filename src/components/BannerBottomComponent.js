import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CategoryComponent from "./CategoryComponent";
import ButtonComponent from "./ButtonComponent";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
const BannerBottomComponent = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: 170,
        }}
      >
        <CategoryComponent />
      </Box>
      <Box
        sx={{
          height: 170,
          width: "100%",
          background: "#c41d7f",
          //   opacity: 0.8,
          position: "absolute",
          bottom: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            position: "absolute",
            height: "100%",
            // display:"flex",
            // justifyContent:"center",
            // alignItems:"center",
            width: "100%",
          }}
        >
          {/* "&:hover": {
    backgroundColor: "#ff3baf",
    boxShadow: "none",
  }, */}

          <div className="ab1">
            <div>
              <Button
                sx={{
                  background: "#ff3baf",
                  color: "white",
                  textTransform: "none",
                }}
              >
                One Way
              </Button>
            </div>
            <div>
              <Button
                sx={{
                  background: "#c41d7f",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Round Way
              </Button>
            </div>
            <div>
              <Button
                sx={{
                  background: "#c41d7f",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Multy City
              </Button>
            </div>
          </div>
          <div className="ab2">
            <div className="a1">
              <div className="b1 common">
                <FlightTakeoffIcon
                  sx={{
                    color: "#ec008c",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: "5px",
                  }}
                >
                  {" "}
                  DAC, Hazrat Sha Jalal Intl Airport
                </Typography>
              </div>
              <div className="b2 common">
                {" "}
                <FlightLandIcon
                  sx={{
                    color: "#ec008c",
                  }}
                />{" "}
                <Typography
                  sx={{
                    marginLeft: "5px",
                  }}
                >
                  DSV, Dubai Intl Airport{" "}
                </Typography>
              </div>
            </div>
            <div className="a2 common">
              <div className="calendar1">
                <CalendarMonthIcon />
              </div>
              <div className="date">
                <p>August</p>
                <h2>22</h2>
                <p>Tuesday</p>
              </div>
            </div>
            <div className="a3 common">
              <div className="calendar2">
                <CalendarMonthIcon />
              </div>
              <div className="click">Click to Return Flight</div>
            </div>
            <div className="a4 common">
              <div className="economy common">
                <Typography
                  sx={{
                    marginLeft: "15px",
                    marginTop: "9px",
                    fontFamily: "poppins",
                    fontWeight: "500",
                  }}
                >
                  Economy
                </Typography>
              </div>
              <div className="passenger common">
                <Typography
                  sx={{
                    marginLeft: "15px",
                    marginTop: "9px",
                    fontFamily: "poppins",
                    fontWeight: "500",
                  }}
                >
                  1 Passenger
                </Typography>
              </div>
            </div>
            <div className="a5 common">
              <Button>
                <SearchIcon
                  sx={{
                    fontSize: "40px",
                    color: "#fff",
                  }}
                />
              </Button>
              <Typography>Search</Typography>
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default BannerBottomComponent;
