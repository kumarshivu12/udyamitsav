import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import background from "../assets/sponsors/background.jpeg";
import register from "../assets/events/register.png";
import { Link } from "react-router-dom";
import { EVENTS } from "../data";
import Heading from "../components/headings/Heading";

const EventPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Stack
        direction="column"
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        p={6}
        spacing={8}
      >
        <Heading name="Events"></Heading>
        <Typography
          variant="body1"
          fontSize={"20px"}
          color={"white"}
          fontFamily={"Playfair Display"}
          textAlign={"center"}
        >
          Udyamitsav’24 is packed with some of the most adrenaline-inducing
          events. Have a glimpse of what's to come before we steal the show ;
        </Typography>
        <Typography
          variant="body1"
          fontSize={"20px"}
          color={"white"}
          fontFamily={"Playfair Display"}
          textAlign={"center"}
        >
          Registrations are open for the following events, so what are you
          waiting for? Register now!
        </Typography>
        <Box
          gap={12}
          spacing={12}
          sx={{ display: "flex", flexWrap: "wrap" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          {EVENTS.map((el) => (
            <Box
              key={el.index}
              width={{ xs: "75%", sm: "40%", md: "25%" }}
              sx={{
                cursor: "pointer",

                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={el.img}
                alt={el.to}
                style={{ width: "100%", height: "100%" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  width: "80%",
                  height: "9%",
                  bottom: "4%",
                }}
              >
                <Link to={el.to} target="_blank">
                  <img
                    src={register}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default EventPage;
