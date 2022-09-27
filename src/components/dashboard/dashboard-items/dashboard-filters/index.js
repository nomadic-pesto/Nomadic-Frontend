import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

//importing styles
import styles from "./styles.module.css";

//importing other components
import { constants } from "../../../../utils/constants";
import ButtonComponent from "../../../common/button";
import DashboardFilter from "./dashboard-filter";


import { getAllProperties } from "../../../../actions/propertyAction";

const DashboardFilters = ({ propertyState,getAllProperties }) => {
  const [displayFilters, setDisplayFilters] = useState([]);
  const [diplayClearFilter, setdiplayClearFilter] = useState(false);

  useEffect(() => {
    setDisplayFilters(
      constants.DESTINATION_TYPES.map((filter) => {
        return (
          <DashboardFilter
            key={filter.name}
            icon={filter.icon}
            name={filter.name}
          />
        );
      })
    );
  }, []);

  useEffect(() => {
    console.log(propertyState);
    if (
      propertyState.destination !== "" ||
      propertyState.subDestination !== "" ||
      propertyState.sortBy !== "" ||
      propertyState.sortOrder !== ""
    ) {
      setdiplayClearFilter(true);
    }
    else{
      setdiplayClearFilter(false)
    }
  }, [propertyState]);

  const clearFilters = async () =>{
    await getAllProperties(0, constants.PRODUCT_LIMIT,{});
  }

  return (
    <>
      <div className={styles["filters"]}>
        <section id="filter-icons" className={styles["filter-icons-section"]}>
          {displayFilters}
        </section>
        <section className={styles["filter-button-section"]}>
        {diplayClearFilter && (
          <section className={`${styles["filter-button"]} ${styles["red"]}` }>
            <ButtonComponent 
            color="danger"
            onClick={clearFilters}
            >Clear</ButtonComponent>
          </section>
        )}
        <section className={`${styles["filter-button"]} `}>
          <ButtonComponent>Filter</ButtonComponent>
        </section>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  propertyState: state.propertyReducer,
});

export default connect(mapStateToProps, {getAllProperties})(DashboardFilters);
