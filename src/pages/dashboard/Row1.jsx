import { Stack, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import { EmailOutlined } from "@mui/icons-material";
import { PointOfSale } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { Traffic } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import { data1, data2, data3, data4 } from "./DataDash";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
      sx={{ width: "100%" }} // Ensure the Stack takes full width for flex properties to work
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,361"}
        subTitle={"Emails Sent"}
        increase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />

      <Card
        icon={
          <PointOfSale
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"142,225"}
        subTitle={"Sales Obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"}
      />
      <Card
        icon={
          <PersonAdd
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"33,415"}
        subTitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"}
      />
      <Card
        icon={
          <Traffic
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"142,225"}
        subTitle={"traffic Received"}
        increase={"+44%"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
};

export default Row1;
