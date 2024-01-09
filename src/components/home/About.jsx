import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Heading from "../headings/Heading";
import { useTheme } from "@emotion/react";
import img from "../../assets/main/convenor.png";
import reel from "../../assets/main/reel.mp4";

const About = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box width={"100%"} py={4} px={{ xs: 3, sm: 4, md: 6, lg: 9 }}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        spacing={6}
      >
        <Heading name="About Us"></Heading>
        <Grid
          container
          width={"100%"}
          flexDirection={isMD ? "row" : "column-reverse"}
        >
          <Grid
            item
            lg={7}
            md={6}
            sm={12}
            xs={12}
            justifySelf={"center"}
            alignSelf={"center"}
            textAlign={"center"}
            my={isMD ? "" : 6}
          >
            <Stack spacing={4}>
              <Typography
                variant="body1"
                fontFamily={"Playfair Display"}
                color={"white"}
                fontSize={"20px"}
              >
                Welcome to the 2nd Edition of the Entrepreneurship Fest at IIT
                Jammu! Our theme, 'Ignite the Leader Within,' is a call to
                action. In the world of entrepreneurship and innovation,
                leadership is the spark that fuels success. This year, we are
                not only celebrating entrepreneurship but also inaugurating our
                Leadership Bootcamp, where we aim to empower and inspire the
                leaders of tomorrow.
              </Typography>
              <Typography
                variant="body1"
                fontFamily={"Playfair Display"}
                color={"white"}
                fontSize={"20px"}
              >
                We believe that every individual possesses the potential to
                lead, and this fest is your platform to discover, cultivate, and
                unleash that potential. Join us in this exciting journey of
                self-discovery, empowerment, and transformation. Let's ignite
                the leader within and shape a brighter, more innovative future
                together.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            lg={5}
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            my={isMD ? "" : 6}
          >
            <Box width={{ xs: "60%", md: "60%", lg: "50%" }} height={"auto"}>
              <video width="100%" height="100%" controls>
                <source src={reel} type="video/mp4" />
                {/* Your browser does not support the video tag. */}
              </video>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default About;
