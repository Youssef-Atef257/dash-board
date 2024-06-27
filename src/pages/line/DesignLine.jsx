import React from "react";

import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "japan",
    color: "hsl(318, 70%, 50%)",
    data: [
      {
        x: "helicopter",
        y: 123,
      },
      {
        x: "boat",
        y: 251,
      },
      {
        x: "train",
        y: 122,
      },
      {
        x: "subway",
        y: 2,
      },
      {
        x: "bus",
        y: 283,
      },
      {
        x: "car",
        y: 134,
      },
      {
        x: "moto",
        y: 18,
      },
      {
        x: "bicycle",
        y: 218,
      },
      {
        x: "horse",
        y: 287,
      },
      {
        x: "skateboard",
        y: 237,
      },
      {
        x: "others",
        y: 268,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(177, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 37,
      },
      {
        x: "helicopter",
        y: 205,
      },
      {
        x: "boat",
        y: 73,
      },
      {
        x: "train",
        y: 140,
      },
      {
        x: "subway",
        y: 201,
      },
      {
        x: "bus",
        y: 299,
      },
      {
        x: "car",
        y: 297,
      },
      {
        x: "moto",
        y: 105,
      },
      {
        x: "bicycle",
        y: 282,
      },
      {
        x: "horse",
        y: 85,
      },
      {
        x: "skateboard",
        y: 80,
      },
      {
        x: "others",
        y: 264,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(173, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 41,
      },
      {
        x: "helicopter",
        y: 46,
      },
      {
        x: "boat",
        y: 170,
      },
      {
        x: "train",
        y: 59,
      },
      {
        x: "subway",
        y: 4,
      },
      {
        x: "bus",
        y: 235,
      },
      {
        x: "car",
        y: 280,
      },
      {
        x: "moto",
        y: 253,
      },
      {
        x: "bicycle",
        y: 190,
      },
      {
        x: "horse",
        y: 41,
      },
      {
        x: "skateboard",
        y: 156,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(94, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 55,
      },
      {
        x: "helicopter",
        y: 137,
      },
      {
        x: "boat",
        y: 184,
      },
      {
        x: "train",
        y: 136,
      },
      {
        x: "subway",
        y: 192,
      },
      {
        x: "bus",
        y: 274,
      },
      {
        x: "car",
        y: 142,
      },
      {
        x: "moto",
        y: 233,
      },
      {
        x: "bicycle",
        y: 66,
      },
      {
        x: "horse",
        y: 253,
      },
      {
        x: "skateboard",
        y: 78,
      },
      {
        x: "others",
        y: 123,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(320, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 49,
      },
      {
        x: "helicopter",
        y: 5,
      },
      {
        x: "boat",
        y: 73,
      },
      {
        x: "train",
        y: 242,
      },
      {
        x: "subway",
        y: 50,
      },
      {
        x: "bus",
        y: 29,
      },
      {
        x: "car",
        y: 7,
      },
      {
        x: "moto",
        y: 3,
      },
      {
        x: "bicycle",
        y: 166,
      },
      {
        x: "horse",
        y: 137,
      },
      {
        x: "skateboard",
        y: 125,
      },
      {
        x: "others",
        y: 120,
      },
    ],
  },
];

const DesignLine = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default DesignLine;
