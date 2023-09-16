import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// import './ImageCard.css'; // Import your CSS styles
const CardComponent = ({ source, text }) => {
  return (
    <Card className="image-card">
      <CardMedia
        component="img"
        alt="Image"
        image={source} // Replace with your image path
      />
      <CardContent>
        <Typography sx={{
            fontFamily:"poppins",
            fontWeight:"600",
            fontSize:"50px",
            color:"#fff"
        }} variant="h6">{text}</Typography>
      </CardContent>
    </Card>

    // <Card>
    //   <CardActionArea>
    //     <CardMedia
    //       sx={{
    //         width: "600px",
    //         background:
    //           "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
    //       }}
    //       component="img"
    //       image={source}
    //       alt="plane"
    //     />
    //   </CardActionArea>
    // </Card>
  );
};

export default CardComponent;
// sx={{ maxWidth: 345 }}
