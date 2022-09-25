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
            <Grid container spacing={2} >
                <CustomReactDropZone />
                <CustomAutoComplete label={"Destination Type"} />
                <CustomAutoComplete label={"Sub destination"} />
                <TextFieldItem label={"No of people accommodation"} />
                <TextFieldItem label={"Price"} />
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CustomAutoComplete label={"HouseType"} />
                </Grid>
                <TextFieldItem label={"Overview"} rows={5} multiline={true} alignItems={"flex-start"} />
                <Grid container xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center">
                    <Grid container xs={12} sm={12} md={6} lg={6} xl={6} alignItems="flex-end">
                        <label className={styles["label2"]}>Ammenties</label>
                    </Grid>
                    <Grid container xs={12} sm={12} md={3} lg={3} xl={3} alignItems="flex-end">

                        <FormControlLabel control={<Checkbox />} label="Wifi" value='wifi' />
                        <FormControlLabel control={<Checkbox />} label="TeleVision" value='wifi' />
                        <FormControlLabel control={<Checkbox />} label="Water Purifier" value='wifi' />
                        <FormControlLabel control={<Checkbox />} label="Dedicated Workspace" value='wifi' />
                        <FormControlLabel control={<Checkbox />} label="Parking" value='wifi' />
                        <FormControlLabel control={<Checkbox />} label="Shared Kitchen" value='wifi' />
                    </Grid>
                </Grid>




                <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} alignItems="baseline" justifyContent="flex-end">

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextFieldItem label={"Address"} />
                    </Grid>
                    <Grid container xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                            <TextFieldItem label={"Property Name"} />
                            <TextFieldItem label={"Streetname"} />
                            <TextFieldItem label={"District"} />
                            <TextFieldItem label={"State"} />
                        </Grid>
                    </Grid>


                </Grid>
                <Grid container xs={12} sm={12} md={12} lg={12} xl={12} alignItems="center" justifyContent="center">
                    <ButtonComponent children="Add" />
                </Grid>


            </Grid>

        </div>

    );


};




export default AddProperty;

