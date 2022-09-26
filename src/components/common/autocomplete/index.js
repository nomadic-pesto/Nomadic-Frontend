//importing styles
// import styles from "../autocomplete/style.module.css";

//importing MUI component
import { Autocomplete, Grid, TextField, Typography } from "@mui/material";


//importing useField from formik
import { useField, Form, FormikProps, Formik } from 'formik';


//importing custom data for AutoComplete

import DestinationData from "../autocomplete/custom-data"
//importing styles
import styles from "./style.module.js"


const CustomAutoComplete = (props) => {

    return <>
         <Autocomplete sx={styles}
                options={DestinationData}
                renderInput={(params) => <TextField  {...params} />}
             />
    </>






}

export default CustomAutoComplete;



