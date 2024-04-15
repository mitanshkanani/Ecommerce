import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { Link as Lk } from "react-router-dom";

const GettingStarted = () => {
  return (
    <div style={{ marginBottom: '5rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Welcome to ShopSmart</h1>
      <Button
        component={Lk} 
        to="/main"
        variant="outlined"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "large",
          padding: "0.5rem 1rem", 
          borderRadius: "40px",
          textAlign: "center",
          backgroundColor:'#ffefd5',
          textTransform: 'lowercase', 
          transition: "all 0.3s", 
          "&:hover": {
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", 
          },
        }}
      >
        Get Started <ArrowForwardIcon />
      </Button>
    </div>
  );
};

export default GettingStarted;
