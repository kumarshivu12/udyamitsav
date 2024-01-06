import { Box } from "@mui/material";
import React from "react";
import Hero from "../components/home/Hero";
import Navbar from "../components/navbar/Navbar";
import About from "../components/home/About";
import bg from "../assets/main/background.png";
import Theme from "../components/home/Theme";
import Message from "../components/home/Message";
import Vidhyabhirama from "../components/home/Vidhyabhirama";

const HomePage = () => {
  return (
    <Box
      width={"100vw"}
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      {/* <About></About>
      <Theme></Theme>
      <Message></Message>
      <Vidhyabhirama></Vidhyabhirama> */}
    </Box>
  );
};

export default HomePage;
