import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

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
import {
  getAllProperties,
  getMoreProperties,
} from "../../../actions/propertyAction";
import { constants } from "../../../utils/constants";

const DashboardItems = ({
  getAllProperties,
  getMoreProperties,
  propertyState,
}) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [displayProperties, setDisplayProperties] = useState([]);

  useEffect(() => {
    getPropertyHandler();
  }, []);

  const getPropertyHandler = async () => {
    setLoading(true);
    await getAllProperties(0, constants.PRODUCT_LIMIT);
    setLoading(false);
  };

  useEffect(() => {
    if (propertyState.properties && propertyState.properties.length > 0) {
      setDisplayProperties(propertyState.properties);
    } else {
      setDisplayProperties([]);
    }
  }, [propertyState.properties]);

  const loadmoreProducts = async () => {
    let skip = propertyState.skip + propertyState.limit;
    let filter = {
      ...(propertyState.destination && {
        destination: propertyState.destination ? propertyState.destination : "",
      }),
      ...(propertyState.subDestination && {
        subDestination: propertyState.subDestination
          ? propertyState.subDestination
          : "",
      }),
      ...(propertyState.search && {
        search: propertyState.search ? propertyState.search : "",
      }),
      ...(propertyState.sortBy && {
        sortBy: propertyState.sortBy ? propertyState.sortBy : "",
      }),
      ...(propertyState.sortOrder && {
        sortOrder: propertyState.sortOrder ? propertyState.sortOrder : "",
      }),
    };
    await getMoreProperties(skip, constants.PRODUCT_LIMIT, filter);
  };

  return (
    <>
      {loading && <Loader />}
     
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
            {displayProperties.map((property) => (
              <DashboardItem property={property} key={property._id} />
            ))}
          </Grid>
        </section>
        <section>
          <ButtonComponent
            className={styles["load-more"]}
            onClick={loadmoreProducts}
            disabled={!propertyState.loadMore}
          >
            Load more
          </ButtonComponent>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  propertyState: state.propertyReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProperties: (skip, limit) => dispatch(getAllProperties(skip, limit)),
  getMoreProperties: (skip, limit, filters) =>
    dispatch(getMoreProperties(skip, limit, filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardItems);
