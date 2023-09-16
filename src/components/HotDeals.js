import { Box, Container, ListItem, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./CardComponent";

const HotDeals = () => {
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
            fontSize: 40,
          }}
        >
          Hot Deals
        </Typography>
        <ListItem
          sx={{
            fontFamily: "poppins",
            fontWeight: 500,
            gap: 8,
            background: "#ffa7d2",
            color: "#ec008c",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingX: "30px",
            borderRadius: 10,
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontWeight: 500,
              background: "#ec008c",
              color: "#fff",
              paddingX: 2,
              paddingY: "5px",
              borderRadius: 5,
            }}
          >
            All
          </Typography>
          <div>Flight</div>
          <div>Hotel</div>
          <div>Tour</div>
          <div>Others</div>
        </ListItem>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <CardComponent source="assets/hotDeals2.jpg" text="Get Air Ticket at Lowest Price" />
        <CardComponent source="assets/hotDeals1.jpg" text="Get Air Ticket at Lowest Price" />
      </Box>
    </Container>
  );
};

export default HotDeals;
