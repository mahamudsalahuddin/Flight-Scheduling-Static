import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardComponent = ({ source, text }) => {
  return (
    <Card className="image-card">
      <CardMedia
        component="img"
        alt="Image"
        image={source}
      />
      <CardContent sx={{
        position:"absolute",
        left:{xs:"-8px", sm:"35px"},
        right:0,
        bottom:{xs:"30px", sm:"30px", md:"88px"},
        visibility:"hidden"
      }}>
        <Typography sx={{
            fontFamily:"poppins",
            fontWeight:"600",
            fontSize:{xs:"10px", sm:"25px", md:"30px", lg:"50px"},
            color:"#fff"
        }} variant="h6">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
