import React from "react";

//importing styles
import styles from "./styles.module.css";

//importing icons
import HouseSidingIcon from '@mui/icons-material/HouseSiding';

const DashboardFilter = () => {
  return (
    <>
      <div className={styles["filter-icon"]}>
        <HouseSidingIcon />
        Tree House
      </div>
    </>
  );
};

export default DashboardFilter;
