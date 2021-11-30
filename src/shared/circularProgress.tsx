import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./circularProgress.css";

const CircularIndeterminate: React.FC = () => {
  return (
    <Box className="loading-box" sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default CircularIndeterminate;
