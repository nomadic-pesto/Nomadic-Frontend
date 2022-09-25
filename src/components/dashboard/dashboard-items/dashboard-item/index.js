import React from "react";

//importing MUI
import { CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";

//importing styles
import styles from "./styles.module.css";

//importing images
// import dashboardTestImage from "../../../../public/images/dashboard-test-image.jpg";
import heartIconFilled from "../../../../public/images/heart-icon-filled.svg";
import roomsImage from "../../../../public/images/sofa.png";

const DashboardItem = ({property}) => {
  return (
    <>
      <Grid item lg={4} sm={6} xs={12}>
        <CardContent className={styles["card"]}>
          <Grid container className={styles["item-container"]}>
            <Grid item md={6} xs={12} padding={0}>
              <img className={styles["main-image"]} src={property.images[0]} alt="Property"/>
            </Grid>
            <Grid item md={6} xs={12} padding={0} className={styles["info"]}>
              <section className={styles["info-top"]}>
              <div className={styles["info-heading"]}>
                {property.propertyName}
                <img src={heartIconFilled} alt="Wishlist"/>
              </div>
              <div className={styles["info-sub-heading"]}>{property.streetName}</div>
              <div className={styles["info-rooms"]}>
              <img className={styles["rooms-image"]} src={roomsImage} alt="Rooms"/>
              2 rooms
              </div>
              </section>
              <section className={styles["info-bottom"]}>
              <div className={styles["info-price"]}>₹{property.price.toLocaleString()} / day</div>
              </section>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </>
  );
};

export default DashboardItem;
