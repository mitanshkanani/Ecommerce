import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -600 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }} // Adjust margin top for spacing from top of page
      >
        <Box
          sx={{
            border: "2px solid #663f00",
            borderRadius: "20px", // Increased border radius
            width: "30%",
            py: 2,
            px: 4, // Added padding
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
            margin: "auto",
          }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "#663f00",
              marginBottom: "1rem",
              fontSize: "2rem",
            }}
          >
            Contact Us
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            style={{ width: "100%" }}
          >
            <FormLabel sx={{ color: "#663f00", fontSize: "1.2rem" }}>
              Email Id
            </FormLabel>
            <Input
              placeholder="Email Id"
              color="warning"
              required
              sx={{ width: "100%", fontSize: "1.2rem" }}
            />
            <FormLabel sx={{ color: "#663f00", fontSize: "1.2rem" }}>
              Phone Number
            </FormLabel>
            <Input
              placeholder="Contact Number"
              color="warning"
              required
              sx={{ width: "100%", fontSize: "1.2rem" }}
            />
            <FormLabel sx={{ color: "#663f00", fontSize: "1.2rem" }}>
              Feedback
            </FormLabel>
            <Textarea
              placeholder="Your query here..."
              required
              sx={{ mb: 3, width: "100%", fontSize: "1.2rem" }}
              color="warning"
            />

            <Button
              type="submit"
              style={{
                backgroundColor: "#663f00",
                color: "papayawhip",
                fontSize: "1.2rem",
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }} // Delaying the fade in
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }} // Adjust margin top as needed
      >
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "#663f00", fontSize: "1.2rem" }}
        >
           You can also send me an email at mitanshkanani@outlook.com 😊
        </Typography>
      </motion.div>
    </>
  );
};

export default Contact;
