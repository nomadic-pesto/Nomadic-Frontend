import React, { useState } from "react";

//importing styles
import styles from "./styles.module.css";

//importing MUI
import { Grid } from "@mui/material";

//importing images
import roomsImage from "../../../public/images/sofa.png";

//importing other components
import Loader from "../../common/loader";
import CardWithImage from "../../common/cardWithImage";
import ButtonComponent from "../../common/button";

const MyPropertiesCards = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}
      <div className={styles["properties-container"]}>
        <div className={styles["title"]}>My Properties</div>
        <CardWithImage image="https://user-images.githubusercontent.com/38355753/192111149-954a08fa-f366-4eb6-b4ee-b98d2334bb74.jpg">
          <Grid container spacing={2} className={styles["properties-card"]}>
            <Grid
              className={`${styles["properties-card-left"]} ${styles["card-item"]}`}
              item
              xs={12}
              md={8}
            >
              <div className={styles["property-name"]}>
                New Village Appartment
                <span
                  className={`${styles["text-thin"]} ${styles["margin-left"]}`}
                >
                  Old Town, Shimla
                </span>
              </div>
              <div className={styles["rooms-row"]}>
                <img className={styles["rooms-image"]} src={roomsImage} />
                <span
                  className={`${styles["text-thin"]} ${styles["margin-left"]}`}
                >
                  2 rooms
                </span>
              </div>
              <div className={`${styles["rooms-row"]} ${styles["date"]} `}>
                <span
                  className={`${styles["text-thin"]} ${styles["margin-right"]}`}
                >
                  From
                </span>
                12/12/2022 - 15/12/2022
              </div>
              <div className={`${styles["rooms-row"]} ${styles["price"]} `}>
                Booked for ₹2,400
              </div>
            </Grid>
            <Grid
              className={`${styles["properties-card-right"]} ${styles["card-item"]}`}
              item
              xs={12}
              md={4}
            >
              <div className={styles["properties-time"]}>Check-in Time 11 am</div>
              <ButtonComponent className={styles["properties-button"]}>
                Cancel Booking
              </ButtonComponent>
            </Grid>
          </Grid>
        </CardWithImage>
      </div>
    </>
  );
};

export default MyPropertiesCards;
