import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import background from "../assets/sponsors/background.jpeg";
import Heading from "../components/headings/Heading";
import instagram from "../assets/speakers/instagram.png";
import twitter from "../assets/speakers/twitter.png";
import linkedin from "../assets/speakers/linkedin.png";
import { TEAM } from "../data";
import Navbar from "../components/navbar/Navbar";

const TeamPage = () => {
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
          <Heading name="Our Team"></Heading>
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
          {TEAM.map((el) => (
            <Stack
              key={el.index}
              direction="column"
              spacing={6}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
            >
              <Typography
                variant="h3"
                color={"white"}
                fontFamily={"Playfiar Display"}
              >
                {el.category}
              </Typography>
              <Box
                gap={8}
                spacing={8}
                sx={{ display: "flex", flexWrap: "wrap" }}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
              >
                {el.list.map((li) => (
                  <Box
                    key={li.index}
                    width={{ xs: "50%", sm: "35%", md: "18%" }}
                    sx={{
                      cursor: "pointer",

                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={li.img}
                      alt={li.to}
                      style={{ width: "100%", height: "100%" }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        width: "80%",
                        height: "9%",
                        bottom: "10%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      gap={2}
                    >
                      {li.instagram && (
                        <Link
                          to={li.instagram}
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
                      {li.linkedin && (
                        <Link
                          to={li.linkedin}
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
                      {li.twitter && (
                        <Link
                          to={li.twitter}
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
          ))}
        </Stack>
      </Navbar>
    </Box>
  );
};

export default TeamPage;
