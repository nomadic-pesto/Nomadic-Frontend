import React, { useState } from "react";

//importing styles
import styles from "./styles.module.css";

//importing MUI
import { Grid } from "@mui/material";

//importing other components
import Loader from "../../common/loader";
import CardWithImage from "../../common/cardWithImage";

import roomsImage from "../../../public/images/sofa.png";
import ButtonComponent from "../../common/button";

const BookingCards = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}
      <div className={styles["bookings-container"]}>
        <div className={styles["title"]}>My Bookings</div>
        <CardWithImage image="https://user-images.githubusercontent.com/38355753/192111149-954a08fa-f366-4eb6-b4ee-b98d2334bb74.jpg">
          <Grid container spacing={2} className={styles["bookings-card"]}>
            <Grid className={`${styles["bookings-card-left"]} ${styles["card-item"]}`} item xs={12} md={8}>
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
                <span className={`${styles["text-thin"]} ${styles["margin-right"]}`}>From</span>
                12/12/2022 - 15/12/2022
              </div>
              <div className={`${styles["rooms-row"]} ${styles["price"]} `}>
               
              Booked for ₹2,400
              </div>
            </Grid>
            <Grid className={`${styles["bookings-card-right"]} ${styles["card-item"]}`} item xs={12} md={4}>
              <div
               className={styles["bookings-time"]}
              >Check-in Time 11 am</div>
              <ButtonComponent
              className={styles["bookings-button"]}
              >Cancel Booking</ButtonComponent>
            </Grid>
          </Grid>
        </CardWithImage>

        <div className={`${styles["title"]} ${styles["title-margin"]}`}>Past Bookings</div>
        <CardWithImage 
        image="https://user-images.githubusercontent.com/38355753/192111149-954a08fa-f366-4eb6-b4ee-b98d2334bb74.jpg"
        className={styles["bookings-past"]}
        >
          <Grid container spacing={2} className={styles["bookings-card"]}>
            <Grid className={`${styles["bookings-card-left"]} ${styles["card-item"]}`} item xs={12} md={8}>
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
                <span className={`${styles["text-thin"]} ${styles["margin-right"]}`}>From</span>
                12/12/2022 - 15/12/2022
              </div>
              <div className={`${styles["rooms-row"]} ${styles["price"]} `}>
               
              Booked for ₹2,400
              </div>
            </Grid>
            <Grid className={`${styles["bookings-card-right"]} ${styles["card-item"]}`} item xs={12} md={4}>
              <div
               className={styles["bookings-time"]}
              >Check-in Time 11 am</div>
              <ButtonComponent
              className={`${styles["bookings-button"]} ${styles["success-button"]}`}
              >Previous Stay</ButtonComponent>
            </Grid>
          </Grid>
        </CardWithImage>

        
        <CardWithImage 
        image="https://user-images.githubusercontent.com/38355753/192111149-954a08fa-f366-4eb6-b4ee-b98d2334bb74.jpg"
        className={styles["bookings-past"]}
        >
          <Grid container spacing={2} className={styles["bookings-card"]}>
            <Grid className={`${styles["bookings-card-left"]} ${styles["card-item"]}`} item xs={12} md={8}>
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
                <span className={`${styles["text-thin"]} ${styles["margin-right"]}`}>From</span>
                12/12/2022 - 15/12/2022
              </div>
              <div className={`${styles["rooms-row"]} ${styles["price"]} `}>
               
              Booked for ₹2,400
              </div>
            </Grid>
            <Grid className={`${styles["bookings-card-right"]} ${styles["card-item"]}`} item xs={12} md={4}>
              <div
               className={styles["bookings-time"]}
              >Check-in Time 11 am</div>
              <ButtonComponent
              className={`${styles["bookings-button"]} ${styles["danger-button"]}`}
              >Canceled Booking</ButtonComponent>
            </Grid>
          </Grid>
        </CardWithImage>
      </div>
    </>
  );
};

export default BookingCards;
