//importing MUI materials
import { Grid, TextField, Typography } from "@mui/material";
import { ArraySchema } from "yup";

//importing styles
import styles from "./style.module.js"

//importing useField from formik
import { ErrorMessage, useField, Form, FormikProps, Formik } from 'formik';

const TextFieldItem = (props) => {
    const [field, meta, helpers] = useField(props.name);
 
   const { value } = meta;
   const { setValue } = helpers;
 

    let value2 = "48px";
    console.log("here "+props.multiline);
    if(props.multiline === true){

        value2 = "auto";

    }
    return <>

            <TextField type={props.type} fullWidth  sx={styles(value2)} name={props.name} rows={props.rows} multiline={props.multiline} 
            onChange={(event,value)=>{
                setValue(value);
                console.log(typeof(value) + "---"+value);
        }}
            />
            {/* <ErrorMessage component="div" name={field.name} className="error"/> */}


    </>;




}

export default TextFieldItem;