import React from "react";

//importing styles
import styles from "./styles.module.css";

//importing MUI
import Grid from "@mui/material/Grid";

const LeftSection = () => {
  return (
    <>
      <div className={styles["property-name"]}>
        Entire villa hosted by Serendipity Collection
      </div>

      <section id="amenities" className={styles["amenities"]}>
        <div className={styles["amenities-rooms"]}>
          7 guests, 3 bedrooms, 3 bathrooms
        </div>
        <div
        className={styles["title"]}
        >What this place offers</div>
        <Grid 
        className={styles["amenities-options"]}
        container spacing={2}>
          <Grid 
          className={styles["amenities-option"]}
          item xs={6} md={6}>
            <div><i className={`fa ${styles["fa-margin"]} fa-anchor`}></i>   Garden view</div>
          </Grid>
          <Grid
          className={styles["amenities-option"]}
          item xs={6} md={6}>
          <div><i className={`fa ${styles["fa-margin"]} fa-anchor`}></i>   Garden view</div>
          </Grid>
          <Grid
          className={styles["amenities-option"]}
          item xs={6} md={6}>
            <div><i className={`fa ${styles["fa-margin"]} fa-anchor`}></i>   Garden view</div>
          </Grid>
          <Grid
          className={styles["amenities-option"]}
          item xs={6} md={6}>
          <div><i className={`fa ${styles["fa-margin"]} fa-anchor`}></i>   Garden view</div>
          </Grid>
          <Grid
          className={styles["amenities-option"]}
          item xs={6} md={6}>
            <div><i className={`fa ${styles["fa-margin"]} fa-anchor`}></i>   Garden view</div>
          </Grid>
          <Grid
          className={styles["amenities-option"]}
          item xs={6} md={6}>
          <div><i className={`fa ${styles["fa-margin"]} fa-anchor`}></i>   Garden view</div>
          </Grid>
        </Grid>
      </section>
      <section
      id="overview" className={styles["overview"]}
      >
        <div
        className={styles["title"]}
        >Overview</div>
        <div
        className={styles["info"]}
        >
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </div>
      </section>
    </>
  );
};

export default LeftSection;
