import { Box, Drawer, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import navbar from "../../assets/main/navbar.png";
import { Link, useNavigate } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { NAV_LINKS, RIGHT_NAV_LINKS, LEFT_NAV_LINKS } from "../../data";
import { useTheme } from "@emotion/react";
import MerchandiseButton from "../buttons/MerchandiseButton";
import logo from "../../assets/main/logo.png";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10000,
          border: "0.1px solid black",
        }}
        width={"100%"}
        height={"70px"}
        p={2}
      >
        <Box height={"100%"} width={"auto"} onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="udyamitsav"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Hamburger
          toggled={isOpen}
          toggle={() => setOpen(!isOpen)}
          color="white"
          rounded
        />
      </Box>
      <Drawer
        anchor="right"
        width={"100vw"}
        minHeight={"100vh"}
        open={isOpen}
        onClose={() => setOpen(false)}
        sx={{ backgroundColor: "#444" }}
      >
        {
          <Stack
            spacing={8}
            sx={{
              background: "black",
              width: "100vw",
              minHeight: "100vh",
            }}
            justifyContent={"center"}
            alignItems={"center"}
            pt={"70px"}
          >
            {NAV_LINKS.map((el) => (
              <Link
                key={el.index}
                to={el.to}
                style={{ textDecoration: "none" }}
              >
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
            <MerchandiseButton></MerchandiseButton>
          </Stack>
        }
      </Drawer>
    </>
  );
};

const DesktopNav = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 100,
      }}
      width={"100%"}
      height={"70px"}
    >
      <Box
        sx={{ position: "relative", display: "flex" }}
        width={"100%"}
        height={"100%"}
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
              <Link
                key={el.index}
                to={el.to}
                style={{ textDecoration: "none" }}
              >
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
              <Link
                key={el.index}
                to={el.to}
                style={{ textDecoration: "none" }}
              >
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
            <MerchandiseButton></MerchandiseButton>
          </Stack>
        </Box>
        <Box
          height={"100%"}
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-45%, -25%)",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              height: "100%",
              width: "auto",
            }}
            className="img"
          />
        </Box>
      </Box>
    </Box>
  );
};

const Navbar = ({ children }) => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {isMD ? <DesktopNav></DesktopNav> : <MobileNav></MobileNav>}
      <Stack width={"100%"} spacing={12} mt={"70px"}>
        {children}
      </Stack>
    </>
  );
};

export default Navbar;
