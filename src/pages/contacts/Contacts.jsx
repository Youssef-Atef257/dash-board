import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./datacontacts";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box style={{ height: 600, width: "98%", mx: "auto" }}>
      <Header
        title={"CONTACTS"}
        subtitle={"list of contacts for future Reference"}
      />
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};

export default Contacts;
