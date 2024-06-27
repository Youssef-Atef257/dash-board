import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import DesignLine from "../line/DesignLine";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./DataDash";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          gap={1}
          mt={3}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mt={2}
              mb={1}
              ml={4}
              variant="h6"
            >
              {" "}
              Revenue Generated
            </Typography>
            <Typography variant="body1" ml={4}>
              {" "}
              $59,232.25
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <DesignLine isDashboard={true} />
      </Paper>

      <Box
        sx={{
          overflow: "auto",

          minWidth: "280px",
          maxHeight: 380,
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight={"600"}>
                  {" "}
                  test
                </Typography>
                <Typography variant="body2"> test2</Typography>
              </Box>
              <Typography variant="body1"> test3</Typography>
              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                {" "}
                $ 555
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
