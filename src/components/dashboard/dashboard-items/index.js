import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

//importing MUI
import Grid from "@mui/material/Grid";

//importing styles
import styles from "./styles.module.css";

//importing components
import DashboardFilters from "./dashboard-filters";
import DashboardItem from "./dashboard-item";
import ButtonComponent from "../../common/button";

//importing other components
import Loader from "../../common/loader";
import ModalComponent from "../../common/modal";

//importing actions
import { getAllProperties } from "../../../actions/propertyAction";


const DashboardItems = ({
  getAllProperties,
  state
}) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getPropertyHandler();
  }, [])

  const getPropertyHandler = async() =>{
    setLoading(true)
    await getAllProperties();
    setLoading(false)
  }

  useEffect(()=>{
    console.log(state)
  },[state])

  return (
    <>
    {loading && <Loader />}
    {/* <ModalComponent /> */}
    <div className={styles["dashboard"]}>
      <section id="dashboard-filters">
      <DashboardFilters />
      </section>
      <section id="dashboard-items">
        <Grid
          container
          rowSpacing={4}
          columnSpacing={0}
          className={styles["items-container"]}
        >
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
        </Grid>
      </section>
      <section>
        <ButtonComponent
        className={styles["load-more"]}
        >Load more</ButtonComponent>
      </section>
    </div>
    </>
  );
};




const mapStateToProps = (state) => ({
  state:state,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProperties: () => dispatch(getAllProperties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardItems);
