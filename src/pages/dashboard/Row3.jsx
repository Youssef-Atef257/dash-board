import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import PieDesign from "./PieDesign";
import DesignBar from "../bar/DesignBar";
import GeoDesign from "../geography/GeoDesign";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={2}>
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "28%",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0px 30px" }}
          variant="h6"
          fontWeight={"600"}
        >
          {" "}
          Campaign
        </Typography>

        <PieDesign isDashboard={true} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          {" "}
          $48,325 revenue generated{" "}
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          {" "}
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "33%",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0px 30px" }}
        >
          {" "}
          Sales Quantity
        </Typography>

        <DesignBar isDashboard={true} />
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "33%",
        }}
      >
        <GeoDesign isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
