import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../headings/Heading";

const Highlights = () => {
  return (
    <Box width={"100%"} py={4} px={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        spacing={4}
        textAlign={"center"}
      >
        <Heading name="Highlights"></Heading>
        <Typography
          variant="subtitle1"
          fontFamily={"Playfair Display"}
          color={"white"}
        >
          Welcome to the 2nd Edition of the Entrepreneurship Fest at IIT Jammu!
          Our theme, 'Ignite the Leader Within,' is a call to action. In the
          world of entrepreneurship and innovation, leadership is the spark that
          fuels success. This year, we are not only celebrating entrepreneurship
          but also inaugurating our Leadership Bootcamp, where we aim to empower
          and inspire the leaders of tomorrow.
        </Typography>
        <Typography
          variant="subtitle1"
          fontFamily={"Playfair Display"}
          color={"white"}
        >
          We believe that every individual possesses the potential to lead, and
          this fest is your platform to discover, cultivate, and unleash that
          potential. Join us in this exciting journey of self-discovery,
          empowerment, and transformation. Let's ignite the leader within and
          shape a brighter, more innovative future together.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Highlights;
