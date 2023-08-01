import React from "react";
import { Box } from "@mui/material";

import Profile from "../Profile";
import About from "../About";

/**
 * Contact element will display basic contact information.
 * @returns Contact element.
 */
const Contact: React.FC<{}> = () => {
  return (
    <Box component={"section"} id="contact" sx={{ width: "100%" }}>
      <Profile />
      <About />
    </Box>
  );
};

export default Contact;
