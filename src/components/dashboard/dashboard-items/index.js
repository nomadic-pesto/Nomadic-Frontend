import React from "react";
import DashboardItem from "./dashboard-item";
import Grid from "@mui/material/Grid";





const DashboardItems = () => {
  return (
    <>
      <Grid container spacing={2}>
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
      </Grid>
    
    </>
  );
};

export default DashboardItems;
