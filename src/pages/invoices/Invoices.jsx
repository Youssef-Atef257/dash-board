import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./datainvoices";
import Header from "../../components/Header";

const Invoices = () => {
  return (
    <Box style={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"INVOICES"} subtitle={"list of invoice balances"} />
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};

export default Invoices;
