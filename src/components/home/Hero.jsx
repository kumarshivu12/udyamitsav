import { Box, Stack } from "@mui/material";
import React from "react";
import RegisterButton from "../buttons/RegisterButton";
import udyamitsav from "../../assets/main/udyamitsav.png";
import bg from "../../assets/main/background.png";
import cloud from "../../assets/main/cloud.png";
import cloud2 from "../../assets/main/cloud2.png";
const Hero = () => {
  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
      spacing={10}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
        width={{ xs: "90%", lg: "75%" }}
      >
        <img
          src={udyamitsav}
          alt="udyamitsav"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box width={{ xs: "50%", lg: "25%" }} sx={{ zIndex: 2 }}>
        <RegisterButton name="Register Now"></RegisterButton>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <img src={cloud} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          transform: "scaleX(-1)",
          zIndex: 1,
        }}
      >
        <img src={cloud} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <img src={cloud2} />
      </Box>
    </Stack>
  );
};

export default Hero;
