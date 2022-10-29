import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//importing styles
import styles from "./styles.module.css";

//importing MUI
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import ButtonComponent from "../../../common/button";
import BasicDateRangePicker from "./BasicDateRangePicker";
import SelectFieldComponent from "../../../common/selectField";
import { InputLabel } from "@mui/material";
import {
  bookARental,
  paymentCheckout,
  paymentVerification,
} from "../../../../services/propertyServices";
import { toast } from "react-toastify";

import moment from "moment";

const RightSection = ({ displayProperty }) => {
  const [guests, setGuests] = useState("");
  const [bookedDates, setBookedDates] = useState([]);
  const [numberOfBookedDays, setNumberOfBookedDays] = useState(1);
  const [refreshBookedDates, dorefreshBookedDates] = useState(0);

  const { price } = displayProperty;

  const navigate = useNavigate();

  useEffect(() => {

    if (bookedDates.length > 0) {
    var startDateForDuration = moment(bookedDates[0], "YYYY-MM-DD");
    var endDateForDuration = moment(bookedDates[1], "YYYY-MM-DD");

    setNumberOfBookedDays(moment.duration(endDateForDuration.diff(startDateForDuration)).asDays() + 1);
    }

  }, [bookedDates])
  

  const checkoutHandler = async (price) => {

    //checking if user has selected dates
    if (bookedDates.length <= 0) {
      toast.error("Please choose Dates");
      return;
      //checking if user has selected guests
    } else if (guests === "") {
      toast.error("Please select Guests");
      return;
    }

    //adding 11 hours for check in time
    const startDate = moment(bookedDates[0])
      // .add("11", "hours")
      .zone("KOLKATA")
      
    const endDate = moment(bookedDates[1])
      // .add("11", "hours")
      .zone("KOLKATA")
      

      //calcuating number of days
  
      // price multiplied by number of days
    price *= numberOfBookedDays;

    const currentDate = moment(new Date()).zone("KOLKATA").unix();

    const user = JSON.parse(localStorage.getItem("user"));

    const key = process.env.REACT_APP_RAZORPAY_API_KEY;

    const orderResponse = await paymentCheckout(price);

    if (orderResponse.success !== true) {
      toast.error("Payment Failed");
      return;
    }
    let options = {
      key,
      amount: orderResponse.data.amount,
      currency: "INR",
      name: "Nomadic", 
      description: "Nomadic Rental Payment", 
      // image: "https://example.com/your_logo", 
      order_id: orderResponse.data.id,
      handler: async function (response) {
        if (response.razorpay_payment_id) {
          const verification = await paymentVerification(
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature
          );

          if (verification.status) {
          }
          const bookingResponse = await bookARental(
            orderResponse.data.id,
            displayProperty._id,
            user._id,
            startDate,
            endDate,
            currentDate,
            user.email,
            displayProperty.ownerId ? displayProperty.ownerId : null,
            price
          );
          setBookedDates([])
          setGuests([])
          setNumberOfBookedDays(1)
          dorefreshBookedDates(prev => prev + 1)
          toast.success("Rental Booked!")
          // navigate("/dashboard");
        }
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.mobileNumber ? user.mobileNumber :"9999999999",
      },
    };
    var razorpay = new window.Razorpay(options);
    razorpay.open();

    razorpay.on("payment.failed", function (response) {
      toast.error(response.error.code);
      toast.error(response.error.reason);
      toast.error(response.error.metadata.order_id);
      toast.error(response.error.metadata.payment_id);
    });
  };
  return (
    <>
      <section id="book-now" className={styles["book-now"]}>
        <div className={`${styles["row"]} ${styles["border-bottom"]}`}>
          <BasicDateRangePicker
            setDatesHandler={(date) => setBookedDates(date)}
            refreshBookedDates={refreshBookedDates}
          />
          {/* <div className={`${styles["col-6"]} ${styles["border-right"]}`}></div>
        <div className={`${styles["col-6"]}`}></div> */}
        </div>
        <div
          className={`${styles["row"]} ${styles["border-bottom"]} ${styles["row-guests"]}`}
        >
          <FormControl fullWidth>
            <InputLabel id="guests-label">Guests</InputLabel>
            <Select
              labelId="guests-label"
              id="guests"
              value={guests}
              label="Age"
              className={`${styles["guests-dd"]}`}
              onChange={(event) => {
                setGuests(event.target.value);
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6+</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={`${styles["row"]} ${styles["price"]}`}>
          ₹{(price * numberOfBookedDays).toFixed(0,2)} /- Day
        </div>
      </section>
      <ButtonComponent
        className={styles["book-now-button"]}
        onClick={checkoutHandler.bind(null, price)}
      >
        Book now
      </ButtonComponent>
    </>
  );
};

export default RightSection;
