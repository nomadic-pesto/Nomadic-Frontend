import React, { useState } from "react";

//importing styles
import styles from "./styles.module.css";

//importing components
import Loader from "../../common/loader";
import DetailImage from "./detailImage";
import LeftSection from "./leftSection";

//importing MUI
import Grid from "@mui/material/Grid";
import RightSection from "./rightSection";


const Details = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles["details"]}>
      {loading && <Loader />}
      <DetailImage />
      <Grid 
      container 
      spacing={2}
      className={styles["details-grid"]}
      >
        <Grid 
        className={styles["details-grid-item"]}
        item xs={12} md={8}>
         <LeftSection />
        </Grid>
        <Grid 
        className={styles["details-grid-item"]}
        item xs={12} md={4}>
        <div>
          <RightSection />
        </div>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Details;
