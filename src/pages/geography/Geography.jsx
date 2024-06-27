import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { geo } from "./WorldCountries";
import { data } from "./Data";
import GeoDesign from "./GeoDesign";


const Geography = () => {
  const theme = useTheme();
  return <GeoDesign />;
};

export default Geography;
