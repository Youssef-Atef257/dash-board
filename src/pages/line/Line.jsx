import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";
import DesignLine from "./DesignLine";

const Line = () => {
  const theme = useTheme();
  return <DesignLine />;
};

export default Line;
