import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";

import DesignBar from "./DesignBar";

const Bar = () => {
  const theme = useTheme();
  return <DesignBar />;
};

export default Bar;
