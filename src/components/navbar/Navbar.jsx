import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import navbar from "../../assets/main/navbar.png";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { NAV_LINKS, RIGHT_NAV_LINKS, LEFT_NAV_LINKS } from "../../data";
import { useTheme } from "@emotion/react";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
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
        position: "absolute",
        top: 0,
        left: 0,

        zIndex: 5,
        position: "fixed",
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

const Navbar = ({ children }) => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {isMD ? <DesktopNav></DesktopNav> : <MobileNav></MobileNav>}
      {children}
      {/* <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

        }}
        className={isMD ? "" : "navbar"}
        p={isMD ? "" : 2}
      >
        {!isMD && (
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" rounded />
        )}
      </Box>
      {isOpen && <MobileNav></MobileNav>} */}
    </>
  );
};

export default Navbar;
