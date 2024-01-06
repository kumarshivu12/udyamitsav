import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import background from "../assets/sponsors/background.jpeg";
import Heading from "../components/headings/Heading";
import instagram from "../assets/speakers/instagram.png";
import twitter from "../assets/speakers/twitter.png";
import linkedin from "../assets/speakers/linkedin.png";
import soon from "../assets/guests/soon.png";
import { GUESTS } from "../data";

const GuestPage = () => {
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
        <Heading name="Chief Guest"></Heading>
        <Box
          gap={12}
          spacing={12}
          sx={{ display: "flex", flexWrap: "wrap" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Box
            width={{ xs: "75%", sm: "40%", md: "25%" }}
            sx={{
              cursor: "pointer",

              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={soon} style={{ width: "100%", height: "100%" }} />

            <Box
              sx={{
                position: "absolute",
                width: "80%",
                height: "10%",
                bottom: "8%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              gap={2}
            >
              <Link
                to="#"
                target="_blank"
                style={{ aspectRatio: 1, height: "100%" }}
              >
                <img
                  src={instagram}
                  style={{
                    aspectRatio: 1,
                    height: "100%",
                  }}
                />
              </Link>
              <Link
                to="#"
                target="_blank"
                style={{ aspectRatio: 1, height: "100%" }}
              >
                <img
                  src={linkedin}
                  style={{
                    aspectRatio: 1,
                    height: "100%",
                  }}
                />
              </Link>
              <Link
                to="#"
                target="_blank"
                style={{ aspectRatio: 1, height: "100%" }}
              >
                <img
                  src={twitter}
                  style={{
                    aspectRatio: 1,
                    height: "100%",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        {/* <Typography
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
        </Typography> */}
        <Heading name="Guest Of Honour"></Heading>
        <Box
          gap={12}
          spacing={12}
          sx={{ display: "flex", flexWrap: "wrap" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Box
            width={{ xs: "75%", sm: "40%", md: "25%" }}
            sx={{
              cursor: "pointer",

              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={soon} style={{ width: "100%", height: "100%" }} />

            <Box
              sx={{
                position: "absolute",
                width: "80%",
                height: "10%",
                bottom: "8%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              gap={2}
            >
              <Link
                to="#"
                target="_blank"
                style={{ aspectRatio: 1, height: "100%" }}
              >
                <img
                  src={instagram}
                  style={{
                    aspectRatio: 1,
                    height: "100%",
                  }}
                />
              </Link>
              <Link
                to="#"
                target="_blank"
                style={{ aspectRatio: 1, height: "100%" }}
              >
                <img
                  src={linkedin}
                  style={{
                    aspectRatio: 1,
                    height: "100%",
                  }}
                />
              </Link>
              <Link
                to="#"
                target="_blank"
                style={{ aspectRatio: 1, height: "100%" }}
              >
                <img
                  src={twitter}
                  style={{
                    aspectRatio: 1,
                    height: "100%",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Heading name="Guests"></Heading>
        <Box
          gap={12}
          spacing={12}
          sx={{ display: "flex", flexWrap: "wrap" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          {GUESTS.map((el) => (
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
                  height: "10%",
                  bottom: "8%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                gap={2}
              >
                {el.instagram && (
                  <Link
                    to={el.instagram}
                    target="_blank"
                    style={{ aspectRatio: 1, height: "100%" }}
                  >
                    <img
                      src={instagram}
                      style={{
                        aspectRatio: 1,
                        height: "100%",
                      }}
                    />
                  </Link>
                )}
                {el.linkedin && (
                  <Link
                    to={el.linkedin}
                    target="_blank"
                    style={{ aspectRatio: 1, height: "100%" }}
                  >
                    <img
                      src={linkedin}
                      style={{
                        aspectRatio: 1,
                        height: "100%",
                      }}
                    />
                  </Link>
                )}
                {el.twitter && (
                  <Link
                    to={el.twitter}
                    target="_blank"
                    style={{ aspectRatio: 1, height: "100%" }}
                  >
                    <img
                      src={twitter}
                      style={{
                        aspectRatio: 1,
                        height: "100%",
                      }}
                    />
                  </Link>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default GuestPage;