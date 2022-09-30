import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//importing styles
import styles from "./styles.module.css";
import "./styles.css";



const DetailImage = () => {

    
  return (
    <>
     <Carousel
    showThumbs={false}
    showStatus={false}
    className={styles["image-container"]}
    >
    <div className={styles["detail-image"]}>
        <img src="https://user-images.githubusercontent.com/38355753/192111149-954a08fa-f366-4eb6-b4ee-b98d2334bb74.jpg" />
        
    </div>
    <div className={styles["detail-image"]}>
        <img src="https://user-images.githubusercontent.com/38355753/192111144-8c942c92-2516-478b-a7d6-905f570a65cf.jpg" />
        
    </div>
    <div className={styles["detail-image"]}>
        <img src="https://user-images.githubusercontent.com/38355753/192111148-e92edd41-6e76-40a5-b73f-d9e6b5d8dbc2.jpg" />
       
    </div>
</Carousel>
    </>
  )
}

export default DetailImage;