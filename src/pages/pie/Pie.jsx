import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import PieDesign from "../dashboard/PieDesign";

const Pie = () => {
  const theme = useTheme();
  return <PieDesign />;
};

export default Pie;
