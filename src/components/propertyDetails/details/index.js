import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//importing styles
import styles from "./styles.module.css";

//importing components
import Loader from "../../common/loader";
import DetailImage from "./detailImage";
import LeftSection from "./leftSection";

//importing MUI
import Grid from "@mui/material/Grid";
import RightSection from "./rightSection";

//importing actions
import {
  getPropertyById
} from "../../../actions/propertyAction";

//importing toastr
import { toast } from "react-toastify";


const Details = ({getPropertyById}) => {
  const [loading, setLoading] = useState(false);
  const [displayProperty, setDisplayProperty] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPropertyHandler();
  }, []);

  const getPropertyHandler = async () => {
    setLoading(true);

    const propertyDetails = await getPropertyById(params.id);
    if(propertyDetails.status === 'success' && propertyDetails.data.rental){
      setDisplayProperty(propertyDetails.data.rental)
    }
    else{
      toast.error("Property Not found");
      navigate("/dashboard");
    }
   
    setLoading(false);
  };


  return (
    <div className={styles["details"]}>
      {loading && <Loader />}
      <DetailImage 
      displayProperty={displayProperty ? displayProperty : {}}
      />
      <Grid 
      container 
      spacing={2}
      className={styles["details-grid"]}
      >
        <Grid 
        className={styles["details-grid-item"]}
        item xs={12} md={8}>
         <LeftSection 
         displayProperty={displayProperty ? displayProperty : {}}
         />
        </Grid>
        <Grid 
        className={styles["details-grid-item"]}
        item xs={12} md={4}>
        <div>
          <RightSection 
          displayProperty={displayProperty ? displayProperty : {}}
          />
        </div>
        </Grid>
        
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  propertyState: state.propertyReducer,
});

export default connect(mapStateToProps, {getPropertyById})(Details);

