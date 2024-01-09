import { Box, Stack } from "@mui/material";
import React from "react";
import bg from "../assets/main/background.png";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Message from "../components/home/Message";
import director from "../assets/main/director.png";
import convenor from "../assets/main/convenor.png";
import Vidhyabhirama from "../components/home/Vidhyabhirama";
import Highlights from "../components/home/Highlights";

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
        border: "0.1px solid black",
      }}
    >
      <Navbar>
        <Stack width={"100%"} spacing={12}>
          <Hero></Hero>
          <About></About>
          <Message
            flag="true"
            name="Director"
            img={director}
            heading="IIT Jammu's Entrepreneurship Fest, Udyamitsav'24, beckons you to ignite
        your inner leader!"
            message="Immerse yourself in a vibrant ecosystem of inspiration, knowledge, and
        opportunity. Learn from visionary thought leaders, witness the spark of
        innovation in startup exhibitions, and test your mettle in exhilarating
        competitions. Udyamitsav'24 is where ideas ignite into reality, where
        connections forge new paths, and where your leadership flame begins to
        blaze. Join us and write your entrepreneurial journey!"
          ></Message>
          <Message
            name="Convenor"
            flag="false"
            img={convenor}
            heading="Welcome, future founders, to Udyamitsav'24 - your entrepreneurial
      launchpad where leadership flames become supernovas."
            message="As a student-driven force, we invite you to ignite the leader within and
          unleash your entrepreneurial spirit. Network with mentors, compete with
          passion, and learn from industry titans. Udyamitsav'24 is your platform to
          showcase your brilliance, network with future changemakers, and co-create
          a future fueled by innovation. Be a part of the spark, be a part of the
          movement!"
          ></Message>
          <Vidhyabhirama></Vidhyabhirama>
          {/* <Highlights /> */}
        </Stack>
      </Navbar>
    </Box>
  );
};

export default HomePage;
