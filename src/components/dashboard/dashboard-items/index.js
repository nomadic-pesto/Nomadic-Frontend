import React from "react";

//importing MUI
import Grid from "@mui/material/Grid";

//importing styles
import styles from "./styles.module.css";

//importing components
import DashboardFilters from "./dashboard-filters";
import DashboardItem from "./dashboard-item";
import ButtonComponent from "../../common/button";
import Loader from "../../common/loader";
import ModalComponent from "../../common/modal";

const DashboardItems = () => {
  return (
    <>
    {/* <Loader /> */}
    {/* <ModalComponent /> */}
    <div className={styles["dashboard"]}>
      <section id="dashboard-filters">
      <DashboardFilters />
      </section>
      <section id="dashboard-items">
        <Grid
          container
          rowSpacing={4}
          columnSpacing={0}
          className={styles["items-container"]}
        >
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
        </Grid>
      </section>
      <section>
        <ButtonComponent
        className={styles["load-more"]}
        >Load more</ButtonComponent>
      </section>
    </div>
    </>
  );
};

export default DashboardItems;
