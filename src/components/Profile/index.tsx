import React from "react";
import { Typography } from "@mui/material";

import Avatar from "../Avatar";
import Social from "../Social";

const Profile: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Avatar />
      <Typography
        sx={{ fontFamily: "Patua One, Serif" }}
        color={"inherit"}
        variant="h4"
        component="h1"
        align="center"
      >
        SEVERI VIDNÄS
      </Typography>
      <Typography
        sx={{ fontFamily: "Patua One, Serif" }}
        color={"inherit"}
        variant="h6"
        component="p"
        align="center"
      >
        SOFTWARE DEVELOPER
      </Typography>
      <Social />
    </React.Fragment>
  );
};

export default Profile;
