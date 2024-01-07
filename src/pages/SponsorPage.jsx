import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import bodyshop from "../assets/sponsors/bodyshop.png";
import quilbolt from "../assets/sponsors/quilbolt.png";
import pizzawings from "../assets/sponsors/pizzawings.png";
import dpeddlers from "../assets/sponsors/dpeddlers.png";
import thekacoffee from "../assets/sponsors/thekacoffee.png";
import xverse from "../assets/sponsors/xverse.png";
import background from "../assets/sponsors/background.jpeg";
import { Link } from "react-router-dom";
import Heading from "../components/headings/Heading";

const SponsorPage = () => {
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
        <Heading name="Sponsors"></Heading>
        {/* Title Sponsor  */}
        <Stack
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
            Event Sponsor
          </Typography>
          <Box
            gap={6}
            spacing={6}
            width={"100%"}
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              width={{ xs: "90%", sm: "45%", md: "30%", lg: "20%" }}
              sx={{ cursor: "pointer" }}
            >
              <Link to="https://www.thebodyshop.in/" target="_blank">
                <img
                  src={bodyshop}
                  alt="body shop"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Box>
            <Box width={{ xs: "90%", sm: "45%", md: "30%", lg: "20%" }}>
              <Link to="https://quillbot.com/" target="_blank">
                <img
                  src={quilbolt}
                  alt="tquilbolt"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Box>
          </Box>
        </Stack>
        {/* Food Sponsor  */}
        <Stack
          direction="column"
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography
            variant="h3"
            color={"white"}
            fontFamily={"Playfair Display"}
          >
            Food Sponsor
          </Typography>
          <Box
            gap={6}
            spacing={6}
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              width={{ xs: "90%", sm: "45%", md: "30%", lg: "20%" }}
              sx={{ cursor: "pointer" }}
            >
              <Link to="https://pizzawings.co.in/" target="_blank">
                <img
                  src={pizzawings}
                  alt="pizzawings"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Box>
          </Box>
        </Stack>
        {/* Food Partner  */}
        <Stack
          direction="column"
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography
            variant="h3"
            color={"white"}
            fontFamily={"Playfair Display"}
          >
            Food Partner
          </Typography>
          <Box
            gap={6}
            spacing={6}
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              width={{ xs: "90%", sm: "45%", md: "30%", lg: "20%" }}
              sx={{ cursor: "pointer" }}
            >
              <Link
                to="https://www.instagram.com/dpeddlersnh44/"
                target="_blank"
              >
                <img
                  src={dpeddlers}
                  alt="dpeddlers"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Box>
          </Box>
        </Stack>
        {/* Beverage Partner  */}
        <Stack
          direction="column"
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography
            variant="h3"
            color={"white"}
            fontFamily={"Playfair Display"}
          >
            Beverage Partner
          </Typography>
          <Box
            gap={6}
            spacing={6}
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              width={{ xs: "90%", sm: "45%", md: "30%", lg: "20%" }}
              sx={{ cursor: "pointer" }}
            >
              <Link to="https://thekacoffee.com/" target="_blank">
                <img
                  src={thekacoffee}
                  alt="thekacoffee"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Box>
          </Box>
        </Stack>
        {/* Website Partner  */}
        <Stack
          direction="column"
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography
            variant="h3"
            color={"white"}
            fontFamily={"Playfair Display"}
          >
            Website Partner
          </Typography>
          <Box
            gap={6}
            spacing={6}
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              width={{ xs: "90%", sm: "45%", md: "30%", lg: "20%" }}
              sx={{ cursor: "pointer" }}
            >
              <Link to="https://xversestudio.co.uk/" target="_blank">
                <img
                  src={xverse}
                  alt="xverse"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SponsorPage;
