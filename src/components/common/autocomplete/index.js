//importing styles
// import styles from "../autocomplete/style.module.css";

//importing MUI component
import { PropaneSharp } from "@mui/icons-material";
import { Autocomplete, Grid, TextField, Typography } from "@mui/material";


//importing useField from formik
import { ErrorMessage, useField, Form, FormikProps, Formik } from 'formik';
import PropTypes from "prop-types";

//importing custom data for AutoComplete

import DestinationData from "../autocomplete/custom-data"
//importing styles
import styles from "./style.module.js"


const CustomAutoComplete = (props) => {
    const [field, meta, helpers] = useField(props.name);
 
   const { value } = meta;
   const { setValue } = helpers;
 

    return <>


        <Autocomplete sx={styles}
      
            options={DestinationData}
            renderInput={(params) => <TextField  {...params} />} 
            name={props.name}
            onChange={(event,value)=>{
                    setValue(value);
                    console.log(typeof(value) + "---"+value);
            }}
        />
        <ErrorMessage component="div" name={field.name} className="error"/>
    </>








}

export default CustomAutoComplete;
