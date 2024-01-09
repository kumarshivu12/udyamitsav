import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import background from "../assets/sponsors/background.jpeg";
import Heading from "../components/headings/Heading";
import instagram from "../assets/speakers/instagram.png";
import twitter from "../assets/speakers/twitter.png";
import linkedin from "../assets/speakers/linkedin.png";
import { SPEAKERS } from "../data";
import Navbar from "../components/navbar/Navbar";

const SpeakerPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        border: "0.1px solid black",
      }}
    >
      <Navbar>
        <Stack
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          p={6}
          spacing={8}
        >
          <Heading name="Guest Speakers"></Heading>
          {/* <Typography
          variant="subtitle1"
          
          color={"white"}
          fontFamily={"Playfair Display"}
          textAlign={"center"}
        >
          Udyamitsav’24 is packed with some of the most adrenaline-inducing
          events. Have a glimpse of what's to come before we steal the show ;
        </Typography>
        <Typography
          variant="subtitle1"
          
          color={"white"}
          fontFamily={"Playfair Display"}
          textAlign={"center"}
        >
          Registrations are open for the following events, so what are you
          waiting for? Register now!
        </Typography> */}
          <Box
            gap={12}
            spacing={12}
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            {SPEAKERS.map((el) => (
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
                    bottom: "6%",
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
      </Navbar>
    </Box>
  );
};

export default SpeakerPage;
