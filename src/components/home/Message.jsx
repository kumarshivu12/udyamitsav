import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../headings/Heading";

const Message = ({ name, img, heading, message }) => {
  return (
    <Box width={"100%"} py={4} px={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        spacing={6}
      >
        <Heading name={`Message from ${name}`}></Heading>
        <Grid container width={"100%"}>
          <Grid
            item
            lg={7}
            md={7}
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
                fontWeight={700}
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
            md={5}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box width={{ xs: "60%", md: "40%" }} height={"auto"}>
              <img src={img} style={{ width: "100%", height: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Message;
