import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import Heading from "../headings/Heading";

const Message = ({ name, img, heading, message }) => {
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
        <Heading name={`Message from ${name}`}></Heading>
        <Grid
          container
          width={"100%"}
          flexDirection={
            isMD ? (name === "Director" ? "row-reverse" : "") : "column-reverse"
          }
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
                fontWeight={700}
                sx={{ textShadow: "5px 5px 5px #0073e6" }}
              >
                {heading}
              </Typography>
              <Typography
                variant="body1"
                fontFamily={"Playfair Display"}
                color={"white"}
                fontSize={"20px"}
              >
                {message}
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
              <img src={img} style={{ width: "100%", height: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Message;
