import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import { Box, Container } from "@mui/material";

const Navbar = () => {
  return (




    <Box
      sx={{
        backgroundColor: '#ec008c',
      }}>
        <Container sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding: 2
        }}>
           <img className="imageLogo" src="assets/logo1.png" />
           <ButtonComponent name="Sign In" />
        </Container>
    </Box>
  );
};

export default Navbar;
