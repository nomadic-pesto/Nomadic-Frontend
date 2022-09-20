import React from "react";
import { CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//importing styles
import styles from "./styles.module.css";

//importing images
import dashboardTestImage from "../../../../public/images/dashboard-test-image.jpg";
import heartIconFilled from "../../../../public/images/heart-icon-filled.svg";
import roomsImage from "../../../../public/images/sofa.png";

const DashboardItem = () => {
  return (
    <>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <CardContent className={styles["card"]}>
          <Grid container className={styles["item-container"]}>
            <Grid item md={6} xs={12} padding={0}>
              <img className={styles["main-image"]} src={dashboardTestImage} />
            </Grid>
            <Grid item md={6} xs={12} padding={0} className={styles["info"]}>
              <section className={styles["info-top"]}>
              <div className={styles["info-heading"]}>
                New Village Appartment
                <img src={heartIconFilled} />
              </div>
              <div className={styles["info-sub-heading"]}>old town</div>
              <div className={styles["info-rooms"]}>
              <img className={styles["rooms-image"]} src={roomsImage} />
              2 rooms
              </div>
              </section>
              <section className={styles["info-bottom"]}>
              <div className={styles["info-price"]}>₹1,200 / day</div>
              </section>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </>
  );
};

export default DashboardItem;
