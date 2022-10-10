import React from "react";
import { useNavigate } from "react-router-dom";

//importing MUI
import { CardContent, Link } from "@mui/material";
import Grid from "@mui/material/Grid";

//importing styles
import styles from "./styles.module.css";

//importing images
// import dashboardTestImage from "../../../../public/images/dashboard-test-image.jpg";
import heartIconFilled from "../../../../public/images/heart-icon-filled.svg";
import heartIconUnfilled from "../../../../public/images/heart-icon.svg";
import roomsImage from "../../../../public/images/sofa.png";

const DashboardItem = ({ property }) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        onClick={navigate.bind(null, `/property-details/${property._id}`)}
        className={styles["card-grid"]}
        item
        lg={4}
        sm={6}
        xs={12}
      >
        <CardContent className={styles["card"]}>
          <Grid container className={styles["item-container"]}>
            <Grid item md={6} xs={12} padding={0}>
              {property.thumbnailImages &&
                property.thumbnailImages.length > 0 && (
                  <img
                    className={styles["main-image"]}
                    src={property.thumbnailImages[0]}
                    alt="Property"
                  />
                )}
            </Grid>
            <Grid item md={6} xs={12} padding={0} className={styles["info"]}>
              <section className={styles["info-top"]}>
                <div className={styles["info-heading"]}>
                  {property.rentalName}
                  <img 
                  src={heartIconUnfilled} 
                  alt="Wishlist" 
                  // onClick={addToWishlist}
                  />
                </div>
                <div className={styles["info-sub-heading"]}>
                  {property.streetName}
                </div>
                <div className={styles["info-rooms"]}>
                  <img
                    className={styles["rooms-image"]}
                    src={roomsImage}
                    alt="Rooms"
                  />
                  2 rooms
                </div>
              </section>
              <section className={styles["info-bottom"]}>
                <div className={styles["info-price"]}>
                  ₹{property.price.toLocaleString()} / day
                </div>
              </section>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </>
  );
};

export default DashboardItem;
