//importing MUI materials
import { Grid, TextField, Typography } from "@mui/material";
import { ArraySchema } from "yup";

//importing styles
// import styles from "./style.module.css"

//importing styles
import styles from "./style.module.js"


const TextFieldItem = (props) => {
    let value = "48px";
    console.log("here "+props.multiline);
    if(props.multiline === true){

        value = "auto";

    }
    return <>

            <TextField fullWidth  sx={styles(value)} name={props.label} rows={props.rows} multiline={props.multiline} />


    </>;




}

export default TextFieldItem;