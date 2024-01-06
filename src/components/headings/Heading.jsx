import React from "react";
import box from "../../assets/main/box.png";
import { Box, Typography } from "@mui/material";

const Heading = ({ name }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${box})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "90%",
        height: "auto",
        // aspectRatio: 6,
        border: "1px solid yellow",
        textAlign: "center",
      }}
      px={12}
      py={2}
    >
      <Typography variant="h3" fontFamily={"Playfair Display"} color={"white"}>
        {name}
      </Typography>
    </Box>
  );
};

export default Heading;
