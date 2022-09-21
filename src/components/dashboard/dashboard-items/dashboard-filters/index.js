import React from "react";
import ButtonComponent from "../../../common/button";
import DashboardFilter from "./dashboard-filter";

//importing styles
import styles from "./styles.module.css";

const DashboardFilters = () => {
  return (
    <>
      <div className={styles["filters"]}>
        <section id="filter-icons" className={styles["filter-icons-section"]}>
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />
          <DashboardFilter />

        </section>
        <section className={styles["filter-button"]}>
        <ButtonComponent >Filter</ButtonComponent>
        </section>
      </div>
    </>
  );
};

export default DashboardFilters;
