import React from "react";

//importing styles
import styles from "./styles.module.css";

//importing MUI

import ButtonComponent from "../../../common/button";
import BasicDateRangePicker from "./BasicDateRangePicker";

const RightSection = ({displayProperty}) => {

  const {price } =
  displayProperty;
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
     >
     Book now
   </ButtonComponent>
   </>
  );
};

export default RightSection;
