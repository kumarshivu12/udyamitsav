import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RegisterButton = ({ name }) => {
  return (
    <Link
      to="https://forms.gle/eCzHrpPrs38bcBgF6"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <button className="btn" type="button">
        <Typography
          fontFamily={"Playfair Display"}
          variant="h4"
          color={"white"}
          sx={{ zIndex: 2 }}
        >
          {name}
        </Typography>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </Link>
  );
};

export default RegisterButton;
