import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Box, Grid } from "@mui/material";
import Header from "./Components/Header";
import TeamMemberCard from "./Components/TeamMemberCard";
import { Typography } from "@mui/material";

interface teamMemberInfo {
  name: string;
  image: string;
  imageDesc: string;
  blurb: string;
  discord: string;
}

const teamMemberInfo = [
  {
    name: "MoldyCereal",
    imageDesc: "fire_spell_2",
    blurb: "Hi y'all! I'm eager to develop splendid games for all.",
    socials: "Twitter",
    link: "https://twitter.com/starcerealgames",
  },
  {
    name: "jolteons",
    imageDesc: "regeneration",
    blurb: "potatoes",
    socials: "Discord",
    link: "https://discord.gg/WmEZ59rbKT",
  },
  {
    name: "Jimmy2Hands",
    imageDesc: "attack_boost",
    blurb: "SKOL",
    socials: "Discord",
    link: "https://discord.gg/WmEZ59rbKT",
  },
  {
    name: "Nexthy",
    imageDesc: "critical_boost",
    blurb: "안녕하세요! TFT gamer :)",
    socials: "Discord",
    link: "https://discord.gg/WmEZ59rbKT",
  },
  {
    name: "Ashmasterc",
    imageDesc: "negative_status_resistance",
    blurb: "In the interest of time I won't tell you anything.",
    socials: "Discord",
    link: "https://discord.gg/WmEZ59rbKT",
  },
  {
    name: "dankleen",
    imageDesc: "swiftness",
    blurb: "I LOVE MY SON ATTICUS",
    socials: "Discord",
    link: "https://discord.gg/WmEZ59rbKT",
  },
  {
    name: "honeybeebs",
    imageDesc: "lucky_boost",
    blurb: "wha-",
    socials: "Discord",
    link: "https://discord.gg/WmEZ59rbKT",
  },
];

const App = () => {
  return (
    <div
      style={{ backgroundColor: "#F2F4FA", height: "100%", minHeight: "100vh" }}
    >
      <Header />
      <Container sx={{ paddingTop: "15px" }}>
        <Box sx={{ flexGrow: 1 }}>
          {/* <Typography sx={{textAlign: "center"}} variant="h4">
            About Us
          </Typography> */}
          <Grid
            container
            spacing={1}
            direction="row"
            style={{
              minHeight: "90vh",
              paddingLeft: "20px",
              paddingRight: "20px",
              // paddingTop: "50px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "10px",
            }}
            sx={{ flexGrow: 1 }}
          >
            {teamMemberInfo.map((member) => (
              <Grid
                sx={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
              >
                <TeamMemberCard member={member} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default App;
