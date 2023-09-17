import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import CategoryComponent from "./CategoryComponent";
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
          bottom:{xs:"480px", sm:"400px", md: 170, lg:170}
        }}
      >
        <CategoryComponent />
      </Box>
      <Box
        sx={{
          height: { xs: "480px", sm: "400px", md: 170 },
          width: "100%",
          background: "#c41d7f",
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
          <Box
            sx={{
              display: { xs: "flex", sm: "flex" },
              height: "70%",
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              columnGap: "5px",
              flexWrap: { xs: "wrap", md: "nowrap" },
              // flexWrap:"nowrap"
            }}
            className="ab2"
          >
            <Box
              sx={{
                width: { xs: "100%", md: "35%", lg: "35%" },
              }}
              className="a1"
            >
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
            </Box>
            <Box
              sx={{
                width: { xs: "45%", sm: "15%" },
              }}
              className="a2 common"
            >
              <div className="calendar1">
                <CalendarMonthIcon />
              </div>
              <Box
                sx={{
                  width: "90%",
                  fontFamily: "poppins",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingY: { sm: "30px", lg: "20px" },
                }}
                className="date"
              >
                <p>August</p>
                <h2>22</h2>
                <p>Tuesday</p>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "45%", sm: "15%" },
              }}
              className="a3 common"
            >
              <div className="calendar2">
                <CalendarMonthIcon />
              </div>
              <Box
                sx={{
                  width: { sm: "64px", md: "100px" },
                }}
                className="click"
              >
                Click to Return Flight
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "45%", md: "15%", lg: "15%" },
              }}
              className="a4 common"
            >
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
            </Box>
            <Box
              sx={{
                width: { xs: "45%", sm: "15%" },
              }}
              className="a5 common"
            >
              <Button>
                <SearchIcon
                  sx={{
                    fontSize: "40px",
                    color: "#fff",
                  }}
                />
              </Button>
              <Typography>Search</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BannerBottomComponent;
