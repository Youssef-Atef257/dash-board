import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./datateam";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access Level ",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              // width: "100%",
              width: "99px",
              borderRadius: "3px",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
              alignContent: "center",

              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography
              sx={{
                fontSize: "13px",
                color: "#fff",
                marginLeft: "5px",
              }}
            >
              {" "}
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box style={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"Team"} subtitle={"Managing the team members"} />

      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Team;
