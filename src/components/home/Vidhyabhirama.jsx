import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Heading from "../headings/Heading";
import vd from "../../assets/events/vd.png";
import { useTheme } from "@mui/material";

const Vidhyabhirama = () => {
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
        <Heading name="Vidhyabhirama'24"></Heading>
        <Grid
          container
          width={"100%"}
          flexDirection={isMD ? "row-reverse" : "column-reverse"}
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
            my={isMD ? "" : 6}
          >
            <Stack spacing={4}>
              <Typography
                variant="h4"
                fontFamily={"Playfair Display"}
                color={"white"}
                fontSize={"20px"}
                sx={{ textShadow: "5px 5px 5px #0073e6" }}
              >
                A New Initiative by Team of MESH & Udyamitsav'24
              </Typography>
              <Typography
                variant="body1"
                fontFamily={"Playfair Display"}
                color={"yellow"}
                fontSize={"18px"}
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
                sx={{ textShadow: "5px 5px 5px #0073e6" }}
              >
                Why Vidhyabhirama?
              </Typography>
              <Typography
                variant="body1"
                fontFamily={"Playfair Display"}
                color={"yellow"}
                fontSize={"18px"}
              >
                The evocative sanskrit word, meaning "delightining in the
                knowledge ", perfectly captures the escenece of out bootcamp. We
                believe that leadership is not just above power or position, but
                about a lifelong pursuit of wisdom and growth.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            lg={6}
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
            <Box
              width={{ xs: "80%", md: "60%" }}
              height={"auto"}
              sx={{ backgroundColor: "#444444" }}
            >
              <img src={vd} style={{ width: "100%", height: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Vidhyabhirama;
