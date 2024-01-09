import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import RegisterButton from "../buttons/RegisterButton";
import udyamitsav from "../../assets/main/udyamitsav.png";
import bg from "../../assets/main/background.png";

const Hero = () => {
  return (
    <Stack
      width={"100%"}
      height={"calc(100vh - 70px)"}
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
      px={{ xs: 2, sm: 4, md: 6, lg: 8 }}
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
    </Stack>
  );
};

export default Hero;
