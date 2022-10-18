import React, { useState } from "react";
import { apiCall } from "../../../../services/methods";
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

const RightSection = ({ displayProperty }) => {
  const [guests, setGuests] = useState("");

  const { price } = displayProperty;

  const navigate = useNavigate();
  const checkoutHandler = async (price) => {
    const key = process.env.REACT_APP_RAZORPAY_API_KEY;

    const orderResponse = await apiCall(
      "http://localhost:5001/v1/payment/checkout",
      "POST",
      {},
      { amount: 5000 }
    );
    console.log(orderResponse);
    let options = {
      key,
      amount: orderResponse.data.amount,
      currency: "INR",
      name: "Nomadic", //need to to know the reducer value to input
      description: "Test Transaction", //need to to know the reducer value to input
      image: "https://example.com/your_logo", //need to to upload the image for display
      order_id: orderResponse.data.id,
      handler: async function (response) {
        if (response.razorpay_payment_id) {
          const verification = await apiCall(
            "http://localhost:5001/v1/payment/paymentVerification",
            "POST",
            {},
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature, //have to not create orde when verification fails -- implment here
            }
          );

          if (verification.status) {
          }
          const bookingResponse = await apiCall(
            "http://localhost:5001/v1/booking/bookARental",
            "POST",
            {},
            {
              transactionID: orderResponse.data.id,
              rentalID: "633b0d5dc83f68055824eb97",
              userID: "63317eee2f88b24aefbd2659",
              startDate: 1664826173280,
              endDate: 1664896173280,
              bookingDate: 1664896173280,
              userEmail: "user@email.com",
              ownerId: "63317eee2f88b24aefbd2659",
              bookingCost: 5000,
            }
          );
          console.log(bookingResponse);
          navigate("/dashboard");
        }
      },
      prefill: {
        name: "Daniel raj", //need to to know the reducer value to input
        email: "nomadic.pesto@gmail.com", //need to to know the reducer value to input
        contact: "9999999999", //need to to know the reducer value to input
      },
    };
    var razorpay = new window.Razorpay(options);
    razorpay.open();

    razorpay.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  };
  return (
    <>
      <section id="book-now" className={styles["book-now"]}>
        <div className={`${styles["row"]} ${styles["border-bottom"]}`}>
          <BasicDateRangePicker />
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
              onChange={(event) => {
                setGuests(event.target.value);
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={`${styles["row"]} ${styles["price"]}`}>
          ₹{price} /- Day
        </div>
      </section>
      <ButtonComponent
        className={styles["book-now-button"]}
        onClick={checkoutHandler}
      >
        Book now
      </ButtonComponent>
    </>
  );
};

export default RightSection;
