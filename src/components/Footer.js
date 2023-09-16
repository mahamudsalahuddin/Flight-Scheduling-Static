import { Box, Container, Divider, List, ListItem, ListItemButton, ListSubheader, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#333333",
        color: "#fff",
        marginTop: 15,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 7
          }}
        >
          <List
            sx={{
              width: "267px",
              margin: 0,
              padding: 0,
            }}
          >
            <ListItem
              sx={{
                paddingX: 0,
              }}
            >
              About Us
            </ListItem>
            <ListItem
              sx={{
                paddingX: 0,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </ListItem>
          </List>
          <List
            sx={{
              width: "244px",
            }}
          >
            <ListItem>Need Help</ListItem>
            <ListItem>Ka 11/2A, Bashundara R/A Road, Jagannatpur, Dhaka 1229.</ListItem>
            <ListItem>support@flyfarint.com</ListItem>
            <ListItem>+8809606912912</ListItem>
            <ListItem>+8801755572099</ListItem>
          </List>
          <List>
            <ListItem>Company</ListItem>
            <ListItem>Why others</ListItem>
            <ListItem>Partner with us</ListItem>
            <ListItem>FAQ</ListItem>
            <ListItem>Blog</ListItem>
          </List>
          <List>
            <ListItem>About</ListItem>
            <ListItem>About us</ListItem>
            <ListItem>Features</ListItem>
            <ListItem>News</ListItem>
            <ListItem>Menu</ListItem>
          </List>
          <List>
            <ListItem> Support</ListItem>
            <ListItem>Account</ListItem>
            <ListItem>Support Center</ListItem>
            <ListItem>Feedback</ListItem>
            <ListItem>Contact US</ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Box>We Accept</Box>
            <Box>
              <img src="assets/whatWeAccept.jpg" className="whatweaccept" />
            </Box>
          </div>
          <div>
            <Box>Social</Box>
            <Box
              sx={{
                marginTop: "5px",
                display: "flex",
                flexDirection: "row",
                gap: "5px",
              }}
            >
              <FacebookRoundedIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
            </Box>
          </div>
        </Box>
        <Divider
          sx={{
            my: 2,
            background:"white"
          }}
        />
        <Box>
            <Typography sx={{
                textAlign:"center",
                paddingBottom: 10
            }}>
            © 2023 All Rights Reserved By BRAC & Developed For Fly Far Tech Developed For Salahuddin Mahamud
            </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
