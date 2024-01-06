import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../headings/Heading";

const Vidhyabhirama = () => {
  return (
    <Box
      width={"100%"}
      sx={{ border: "1px solid red" }}
      py={4}
      px={{ xs: 2, sm: 4, md: 6, lg: 8 }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        spacing={4}
      >
        <Heading name="Vidhyabhirama'24"></Heading>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                fontFamily={"Playfair Display"}
                color={"white"}
                fontSize={"20px"}
              >
                A New Initiative by Team of MESH & Udyamitsav'24
              </Typography>
              <Typography
                variant="body1"
                fontFamily={"Sevillana"}
                color={"yellow"}
                fontSize={"20px"}
              >
                Embrace the joy of learning and unleash your inner leader at
                Vidhyabhirama'24, the inaugral edition of our transformative
                Leadership Bootcamp.
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Playfair Display"}
                color={"white"}
                fontSize={"20px"}
              >
                Why Vidhyabhirama?
              </Typography>
              <Typography
                variant="body1"
                fontFamily={"Sevillana"}
                color={"yellow"}
                fontSize={"20px"}
              >
                The evocative sanskrit word, meaning "delightining in the
                knowledge ", perfectly captures the escenece of out bootcamp. We
                believe that leadership is not just above power or position, but
                about a lifelong pursuit of wisdom and growth.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Vidhyabhirama;
