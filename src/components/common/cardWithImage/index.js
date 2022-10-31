import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

//importing styles
import styles from "./styles.module.css";

const CardWithImage = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={2} className={`${styles["bookings-card"]} ${props.className}`}>
        <Grid className={`${styles["bookings-grid-item"]} ${props.classNameImage}`} item xs={12} md={3}>
          <img src={props.image} />
        </Grid>
        <Grid className={styles["bookings-grid-item-right"]} item xs={12} md={9}>
          <>{props.children}</>
        </Grid>
      </Grid>
    </>
  );
};

export default CardWithImage;
