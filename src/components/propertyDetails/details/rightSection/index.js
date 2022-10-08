import React from "react";
import { apiCall } from "../../../../services/methods"
import { useNavigate } from "react-router-dom";

//importing styles
import styles from "./styles.module.css";

//importing MUI

import ButtonComponent from "../../../common/button";
import BasicDateRangePicker from "./BasicDateRangePicker";

const RightSection = ({displayProperty}) => {

  const {price } =
  displayProperty;

  const navigate = useNavigate();
  const checkoutHandler = async (price)=>{
    const key = process.env.REACT_APP_RAZORPAY_API_KEY 

    const orderResponse = await  apiCall('http://localhost:5001/v1/payment/checkout','POST',{},{amount:5000})
console.log(orderResponse)
    let options = {
      key, 
      "amount": orderResponse.data.amount,
      "currency": "INR",
      "name": "Nomadic", //need to to know the reducer value to input
      "description": "Test Transaction", //need to to know the reducer value to input
      "image": "https://example.com/your_logo", //need to to upload the image for display
      "order_id": orderResponse.data.id, 
      "handler": async function (response){
        if (response.razorpay_payment_id){ const verification= await apiCall('http://localhost:5001/v1/payment/paymentVerification','POST',{},{
          razorpay_order_id:response.razorpay_order_id,
          razorpay_payment_id:response.razorpay_payment_id,
          razorpay_signature:response.razorpay_signature,         //have to not create orde when verification fails -- implment here
        }) 
      
        if(verification.status){}
        const bookingResponse = await apiCall('http://localhost:5001/v1/booking/bookARental','POST',{},{transactionID:orderResponse.data.id,rentalID: "633b0d5dc83f68055824eb97",userID: "63317eee2f88b24aefbd2659",startDate:1664826173280,endDate: 1664896173280,bookingDate: 1664896173280,userEmail: "user@email.com",ownerId:"63317eee2f88b24aefbd2659",bookingCost: 5000})
         console.log(bookingResponse) 
         navigate("/dashboard");
      }
         
      },
      "prefill": {
          "name": "Daniel raj", //need to to know the reducer value to input
          "email": "nomadic.pesto@gmail.com",  //need to to know the reducer value to input
          "contact": "9999999999" //need to to know the reducer value to input
      },

  };
  var razorpay = new window.Razorpay(options);
  razorpay.open();

  razorpay.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
  });


  }
  return (
    <>
    <section 
    id="book-now"
    className={styles["book-now"]}>
      <div
      className={`${styles["row"]} ${styles["border-bottom"]}`}
      >
        <BasicDateRangePicker/>
        {/* <div className={`${styles["col-6"]} ${styles["border-right"]}`}></div>
        <div className={`${styles["col-6"]}`}></div> */}
      </div>
     <div
      className={`${styles["row"]} ${styles["border-bottom"]} ${styles["row-guests"]}`}
      >
        <div className={styles["guests-title"]}>
        Guests
        </div>
        <select
         className={styles["guest-dropdown"]}
        >
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div
      className={`${styles["row"]} ${styles["price"]}`}
      >
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
