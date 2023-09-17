import { Button} from "@mui/material";
import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ApartmentIcon from "@mui/icons-material/Apartment";

const CategoryComponent = () => {
  return (
    <div>
      <Button
        sx={{
          background: "#ec008c",
          color: "white",
          gap: 1,
          textTransform: "none",
          marginX: "2px",
          borderRadius: "5px 5px 0 0",
          padding: "5px 10px",
        }}
      >
        {" "}
        <AirplanemodeActiveIcon
          sx={{
            color: "#6c6c6c",
          }}
        />
        Air Ticket
      </Button>
      <Button
        sx={{
          background: "#ff3baf",
          color: "white",
          gap: 1,
          textTransform: "none",
          paddingX: "20px",
          borderRadius: "5px 5px 0 0",
          padding: "5px 10px",
        }}
      >
        {" "}
        <ApartmentIcon />
        Hotel
      </Button>
      <Button
        sx={{
          background: "#ff3baf",
          color: "white",
          gap: 1,
          textTransform: "none",
          marginX: "2px",
          borderRadius: "5px 5px 0 0",
          padding: "5px 10px",
        }}
      >
        {" "}
        <TravelExploreIcon />
        Holidays
      </Button>
    </div>
  );
};

export default CategoryComponent;
