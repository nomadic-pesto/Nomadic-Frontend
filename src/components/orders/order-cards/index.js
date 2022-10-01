import React, { useState } from 'react'

//importing styles
import styles from "./styles.module.css";

//importing other components
import Loader from '../../common/loader'
import CardWithImage from '../../common/cardWithImage';

const OrderCards = () => {

    const [loading, setLoading] = useState(false);

  return (
    <>
    {loading && <Loader />}
      <div
      className={styles["bookings-container"]}
      >
        <div
        className={styles["title"]}
        >
        My Orders
        </div>
        <CardWithImage
        image="https://user-images.githubusercontent.com/38355753/192111149-954a08fa-f366-4eb6-b4ee-b98d2334bb74.jpg"
        >
            
        </CardWithImage>
      </div>
    </>
  )
}

export default OrderCards;