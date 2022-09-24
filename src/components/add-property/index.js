import { Grid } from "@mui/material";
import { useRef, useEffect } from "react";

import { useFormik } from "formik";
import CustomAutoComplete from "./add-property-item/custom-components/custom-auto-complete";
import styles from "./styles.module.css";

//custom react dropzone
import CustomReactDropZone from "./add-property-item/custom-components/custom-react-dropzone"

const subdestinationdata = [
    'None',
    'Shimla',
    'Manali',
    'Goa',
    'Dharamsala',
    'Haridwar'
];
const housetype = [
    'None',
    'Bungalow',
    'Hill station'
];
const initialValues = {
    sub_destination_type: subdestinationdata[0],
    number_of_people_accomadation: 0,
    price: 0,
    house_type: housetype[0],
    overview: "Please provide overview",
    amenities: [],
    property_type: "",
    street_name: "",
    state: "",

};


const AddProperty = () => {

    const { values, setFieldValue, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,

            onSubmit: (values, action) => {
                //console.log(values );
                //action.resetForm();
            },
        });
    const count = useRef(0);

    useEffect(() => {
        console.log(count.current += 1);
        console.log(values);
    }, [values]


    );






    return (
        <div className={styles["addProperty"]}>
            <div>
                <h1 style={{ textAlign: 'center' ,fontFamily: 'Inter',fontWeight : 700,color: "#575757", fontStyle : "thin"}}>Add Property</h1>
            </div>
            <Grid container spacing={3} >
                <CustomReactDropZone/>
                <CustomAutoComplete label={"Destination Type"} />
                
            
            </Grid>

        </div>
       
    );


};




export default AddProperty;

