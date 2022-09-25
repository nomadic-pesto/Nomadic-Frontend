import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { useRef, useEffect } from "react";

import { useFormik } from "formik";
import CustomAutoComplete from "../common/autocomplete/index";
import styles from "./styles.module.css";

//importing dropzone
import CustomReactDropZone from "../common/dropzone/index"

//importing TextFieldItem 
import TextFieldItem from "./text-field";

//importing ButtonComponent
import ButtonComponent from "../common/button/index"



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
                <h1 className={styles["heading"]}>Add Property</h1>
            </div>
            <Grid container spacing={10} >
                <CustomReactDropZone />
                <CustomAutoComplete label={"Destination Type"} />
                <CustomAutoComplete label={"Sub destination"} />
                <TextFieldItem label={"No of people accommodation"} />
                <TextFieldItem label={"Price"} />
                <CustomAutoComplete label={"HouseType"} />
                <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="flex-start">
                    <Grid item={true} xs={12} sm={12} md={10} lg={6} xl={6}>
                    </Grid>                
                </Grid>
                <TextFieldItem label={"Overview"} rows={5} multiline={true}/>
                

                   <TextFieldItem label={"Address"} />
                    <TextFieldItem label={"Property Name"} />
                    <TextFieldItem label={"Streetname"} />
                    <TextFieldItem label={"District"} />
                    <TextFieldItem label={"State"} />
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <ButtonComponent children="Add" />
                </Grid>


            </Grid>

        </div>

    );


};




export default AddProperty;

