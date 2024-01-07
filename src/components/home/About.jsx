import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Heading from "../headings/Heading";
import { useTheme } from "@emotion/react";

const About = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box width={"100%"} py={4} px={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
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
          flexDirection={isMD ? "" : "row-reverse"}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            justifySelf={"center"}
            alignSelf={"center"}
            textAlign={"center"}
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
          <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default About;
