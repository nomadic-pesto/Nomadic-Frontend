import React, { useEffect, useState } from "react";


//importing styles
import styles from "./styles.module.css";

//importing other components
import { constants } from "../../../../utils/constants";
import ButtonComponent from "../../../common/button";
import DashboardFilter from "./dashboard-filter";

const DashboardFilters = () => {

  

  const [displayFilters, setDisplayFilters] = useState([]);

  useEffect(() => {
    setDisplayFilters(constants.DESTINATION_TYPES.map((filter)=>{
      return <DashboardFilter key={filter.name} icon={filter.icon} name={filter.name}/>
    }))
  }, [])
  

  return (
    <>
      <div className={styles["filters"]}>
        <section id="filter-icons" className={styles["filter-icons-section"]}>
        {displayFilters}
        </section>
        <section className={styles["filter-button"]}>
        <ButtonComponent >Filter</ButtonComponent>
        </section>
      </div>
    </>
  );
};

export default DashboardFilters;
