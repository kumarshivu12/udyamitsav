import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import navbar from "../../assets/main/navbar.png";
import { Link } from "react-router-dom";

const LEFT_NAV_LINKS = [
  {
    index: 0,
    name: "Guests",
    to: "/guests",
  },
  {
    index: 1,
    name: "Speakers",
    to: "/speakers",
  },
  {
    index: 2,
    name: "Events",
    to: "/events",
  },
];

const RIGHT_NAV_LINKS = [
  {
    index: 0,
    name: "Our Team",
    to: "/teams",
  },
  {
    index: 1,
    name: "Speakers",
    to: "/speakers",
  },
  {
    index: 2,
    name: "Events",
    to: "/events",
  },
];

const Navbar = () => {
  return (
    <Box
      width={"100%"}
      height={"70px"}
      sx={{
        zIndex: 5,
        position: "absolute",
        left: 0,
        top: 0,
      }}
    >
      <Box sx={{ display: "flex" }} height={"100%"}>
        <Box
          width={"50%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${navbar})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
            width={"75%"}
            height={"100%"}
            spacing={6}
          >
            {LEFT_NAV_LINKS.map((el) => (
              <Link
                key={el.index}
                to={el.to}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h5"
                  fontFamily={"Playfair Display"}
                  color={"white"}
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
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            transform: "scaleX(-1)",
          }}
        >
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
            width={"75%"}
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
                  fontFamily={"Playfair Display"}
                  color={"white"}
                >
                  {el.name}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
