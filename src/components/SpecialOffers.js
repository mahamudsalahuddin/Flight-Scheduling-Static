import React from "react";
import { Box, Container,Typography } from "@mui/material";
import CardComponent from "./CardComponent";

const SpecialOffers = () => {
  return (
    <Container
      sx={{
        marginTop: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: {xs:"30px", ms:"40px"},
          }}
        >
          Special Offers
        </Typography>
        
          <Typography
            sx={{
              fontFamily: "poppins",
              fontWeight: 500,
              color:"#cf4493",
              width:"70px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              fontSize: {xs:"13px", ms:"16px"},
            }}
          >
            View All
          </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <CardComponent source="assets/parachute.jpg" text="Get Air Ticket at Lowest Price" />
        <CardComponent source="assets/plan.jpg" text="Get Air Ticket at Lowest Price" />
        <CardComponent source="assets/europian.jpg" text="Get Air Ticket at Lowest Price" />
      </Box>
    </Container>
  );
}

export default SpecialOffers