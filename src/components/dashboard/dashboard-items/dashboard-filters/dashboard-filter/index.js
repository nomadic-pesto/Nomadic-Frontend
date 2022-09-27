<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";

//importing styles
import styles from "./styles.module.css";

//importing actions
import { getAllProperties } from "../../../../../actions/propertyAction";
import { constants } from "../../../../../utils/constants";




const DashboardFilter = ({getAllProperties,name,icon,propertyState}) => {

  const setFilters = async (destination) =>{
    await getAllProperties(0, constants.PRODUCT_LIMIT,{destination});
  }

  return (
    <>
     {name && <div 
      className={styles["filter-icon"]}
      onClick={setFilters.bind(null,name)}
      >
      <i className={`fa ${styles["fa-height"]} ${propertyState.destination===name && styles["highlight"]} ${icon}`}></i>  
        {name}
      </div>}
    </>
  );
};

const mapStateToProps = (state) => ({
  propertyState: state.propertyReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProperties: (skip, limit,filters) => dispatch(getAllProperties(skip, limit,filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFilter);
=======
import React from "react";
import { connect } from "react-redux";

//importing styles
import styles from "./styles.module.css";

//importing actions
import { getAllProperties } from "../../../../../actions/propertyAction";
import { constants } from "../../../../../utils/constants";




const DashboardFilter = ({getAllProperties,name,icon,propertyState}) => {

  const setFilters = async (destination) =>{
    await getAllProperties(0, constants.PRODUCT_LIMIT,{destination});
  }

  return (
    <>
     {name && <div 
      className={styles["filter-icon"]}
      onClick={setFilters.bind(null,name)}
      >
      <i className={`fa ${styles["fa-height"]} ${propertyState.destination===name && styles["highlight"]} ${icon}`}></i>  
        {name}
      </div>}
    </>
  );
};

const mapStateToProps = (state) => ({
  propertyState: state.propertyReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProperties: (skip, limit,filters) => dispatch(getAllProperties(skip, limit,filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFilter);
>>>>>>> 176447a (login integration done)
