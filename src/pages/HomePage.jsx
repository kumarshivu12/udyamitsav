import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import bg from "../assets/main/background.png";
import Theme from "../components/home/Theme";
import Message from "../components/home/Message";
import director from "../assets/main/director.png";
import convenor from "../assets/main/convenor.png";
import Vidhyabhirama from "../components/home/Vidhyabhirama";
import navbar from "../assets/main/navbar.png";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { NAV_LINKS, RIGHT_NAV_LINKS, LEFT_NAV_LINKS } from "../data";
import { useTheme } from "@emotion/react";

const MobileNav = ({ isOpen, setOpen }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className={"navbar"}
        p={2}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" rounded />
      </Box>
      {isOpen && (
        <Stack
          spacing={8}
          sx={{
            background: "black",

            width: "100%",
            height: "calc(100vh - 70px)",
            position: "absolute",
            top: "70px",
            left: 0,
            zIndex: 1000,
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {NAV_LINKS.map((el) => (
            <Link key={el.index} to={el.to} style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                color={"white"}
                fontFamily={"Playfair Display"}
                sx={{
                  transition: "all 0.3s linear",
                  textShadow:
                    "0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                {el.name}
              </Typography>
            </Link>
          ))}
        </Stack>
      )}
    </>
  );
};

const DesktopNav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 5,
      }}
      width={"100%"}
      height={"70px"}
    >
      <Box
        width={"50%"}
        height={"100%"}
        sx={{
          backgroundImage: `url(${navbar})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          height={"100%"}
          width={"70%"}
        >
          {LEFT_NAV_LINKS.map((el) => (
            <Link key={el.index} to={el.to} style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                color={"white"}
                fontFamily={"Playfair Display"}
                sx={{
                  transition: "all 0.3s linear",
                  textShadow:
                    "0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                {el.name}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Box>
      <Box
        width={"50%"}
        height={"100%"}
        sx={{
          backgroundImage: `url(${navbar})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
        }}
      >
        <Stack
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          width={"70%"}
          height={"100%"}
          spacing={6}
          sx={{ transform: "scaleX(-1)" }}
        >
          {RIGHT_NAV_LINKS.map((el) => (
            <Link key={el.index} to={el.to} style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                color={"white"}
                fontFamily={"Playfair Display"}
                sx={{
                  transition: "all 0.3s linear",
                  textShadow:
                    "0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                {el.name}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const HomePage = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.up("md"));
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isMD ? (
        <DesktopNav></DesktopNav>
      ) : (
        <MobileNav isOpen={isOpen} setOpen={setOpen}></MobileNav>
      )}
      {!isOpen && (
        <Stack
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
          spacing={12}
        >
          <Hero></Hero>
          <About></About>
          <Theme></Theme>
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
        </Stack>
      )}
    </>
  );
};

export default HomePage;
