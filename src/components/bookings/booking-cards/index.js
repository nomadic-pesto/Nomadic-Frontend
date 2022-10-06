import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

//importing styles
import styles from "./styles.module.css";

//importing MUI
import { Grid } from "@mui/material";

//importing other components
import Loader from "../../common/loader";
import ButtonComponent from "../../common/button";

//importing images
import CardWithImage from "../../common/cardWithImage";
import roomsImage from "../../../public/images/sofa.png";

//importing toastr
import { toast } from "react-toastify";

import { getBookings } from "../../../actions/propertyAction";

const BookingCards = ({ getBookings }) => {
  const [loading, setLoading] = useState(false);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);

  useEffect(() => {
    setBookingsEmpty();
    getBookingsHandler();
  }, []);


  const navigate = useNavigate();

  const getBookingsHandler = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user._id && user.name && localStorage.getItem("authToken")) {
      setLoading(true);

      const bookingsResponse = await getBookings(user._id);
      if (
        bookingsResponse.status === "success" &&
        bookingsResponse.data.bookings.length > 0
      ) {
        bookingsResponse.data.bookings.forEach((booking) => {
          if (new Date(booking.startDate) > new Date()) {
            setUpcomingBookings((prev) => [
              ...prev,
              <Fragment key={booking._id}>
                <CardWithImage image="https://user-images.githubusercontent.com/38355753/192111149-954a08fa-f366-4eb6-b4ee-b98d2334bb74.jpg">
                  <Grid
                    container
                    spacing={2}
                    className={styles["bookings-card"]}
                  >
                    <Grid
                      className={`${styles["bookings-card-left"]} ${styles["card-item"]}`}
                      item
                      xs={12}
                      md={8}
                    >
                      <div className={styles["property-name"]}>
                       {booking.rentalID.rentalName}
                        <span
                          className={`${styles["text-thin"]} ${styles["margin-left"]}`}
                        >
                          {booking.rentalID.subDestination}
                          
                        </span>
                      </div>
                      <div className={styles["rooms-row"]}>
                        <img
                          className={styles["rooms-image"]}
                          src={roomsImage}
                        />
                        <span
                          className={`${styles["text-thin"]} ${styles["margin-left"]}`}
                        >
                          {booking.rentalID.noOfPeopleAccomodate} rooms
                        </span>
                      </div>
                      <div
                        className={`${styles["rooms-row"]} ${styles["date"]} `}
                      >
                        <span
                          className={`${styles["text-thin"]} ${styles["margin-right"]}`}
                        >
                          From
                        </span>
                        {new Date(booking.startDate).toLocaleDateString('en-GB')} - {new Date(booking.endDate).toLocaleDateString('en-GB')}
                      </div>
                      <div
                        className={`${styles["rooms-row"]} ${styles["price"]} `}
                      >
                        Booked for ₹2,400
                      </div>
                    </Grid>
                    <Grid
                      className={`${styles["bookings-card-right"]} ${styles["card-item"]}`}
                      item
                      xs={12}
                      md={4}
                    >
                      <div className={styles["bookings-time"]}>
                        Check-in Time 11 am
                      </div>
                     {!booking.isCancelled && <ButtonComponent className={styles["bookings-button"]}>
                        Cancel Booking
                      </ButtonComponent>}
                      {booking.isCancelled && <ButtonComponent 
                      className={styles["bookings-button"]}
                      disabled={true}>
                        Cancel Booking
                      </ButtonComponent>}
                    </Grid>
                  </Grid>
                </CardWithImage>
              </Fragment>,
            ]);
          } else {
            setPastBookings((prev) => [
              ...prev,
              <Fragment key={booking._id}>
                <CardWithImage
                  image="https://user-images.githubusercontent.com/38355753/192111149-954a08fa-f366-4eb6-b4ee-b98d2334bb74.jpg"
                  className={styles["bookings-past"]}
                >
                  <Grid
                    container
                    spacing={2}
                    className={styles["bookings-card"]}
                  >
                    <Grid
                      className={`${styles["bookings-card-left"]} ${styles["card-item"]}`}
                      item
                      xs={12}
                      md={8}
                    >
                      <div className={styles["property-name"]}>
                       {booking.rentalID.rentalName}
                        <span
                          className={`${styles["text-thin"]} ${styles["margin-left"]}`}
                        >
                          {booking.rentalID.subDestination}
                        </span>
                      </div>
                      <div className={styles["rooms-row"]}>
                        <img
                          className={styles["rooms-image"]}
                          src={roomsImage}
                        />
                        <span
                          className={`${styles["text-thin"]} ${styles["margin-left"]}`}
                        >
                          {booking.rentalID.noOfPeopleAccomodate} rooms
                        </span>
                      </div>
                      <div
                        className={`${styles["rooms-row"]} ${styles["date"]} `}
                      >
                        <span
                          className={`${styles["text-thin"]} ${styles["margin-right"]}`}
                        >
                          From
                        </span>
                        {new Date(booking.startDate).toLocaleDateString('en-GB')} - {new Date(booking.endDate).toLocaleDateString('en-GB')}
                      </div>
                      <div
                        className={`${styles["rooms-row"]} ${styles["price"]} `}
                      >
                        Booked for ₹2,400
                      </div>
                    </Grid>
                    <Grid
                      className={`${styles["bookings-card-right"]} ${styles["card-item"]}`}
                      item
                      xs={12}
                      md={4}
                    >
                      <div className={styles["bookings-time"]}>
                        Check-in Time 11 am
                      </div>
                      <ButtonComponent
                        className={`${styles["bookings-button"]} ${
                          booking.isCancelled
                            ? styles["danger-button"]
                            : styles["success-button"]
                        }`}
                      >
                        {booking.isCancelled
                          ? "Cancelled Booking"
                          : "Previous Stay"}
                      </ButtonComponent>
                    </Grid>
                  </Grid>
                </CardWithImage>
              </Fragment>,
            ]);
          }
        });
      } else {
        setBookingsEmpty();
        toast.error("No bookings found!");
      }

      setLoading(false);
    } else {
      toast.error("Please Login!");
      navigate("/dashboard");
    }
  };

  const setBookingsEmpty = () => {
    setUpcomingBookings([]);
    setPastBookings([]);
    
  }

  return (
    <>
      {loading && <Loader />}
      <div className={styles["bookings-container"]}>
        <div className={styles["title"]}>My Bookings</div>
        {upcomingBookings.map((booking) => booking)}
        <div className={`${styles["title"]} ${styles["title-margin"]}`}>
          Past Bookings
        </div>
        {pastBookings.map((booking) => booking)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  propertyState: state.propertyReducer,
});

export default connect(mapStateToProps, { getBookings })(BookingCards);
