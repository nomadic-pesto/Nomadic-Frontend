import React from "react";

// imporitng text field  from materalUi
import TextField from "@mui/material/TextField";
import { ErrorMessage, useField } from "formik";

//importing styles
import styles from "./styles.module.css";
import { Box } from "@mui/material";

const TextFieldComponent = (props) => {
    const width= props.width

    const [field, meta] = useField(props)
    return (
        <Box
            className={`${styles["TextField-without-border-radius"]}`}
            sx={{
                width,
                maxWidth: "100%",
            }}
        >
            <TextField
                id={props.id}
                type={props.type}
                className={`${styles["common-textfield"] } ${meta.touched && meta.error}${props.className}`}
                {...field} 
                name={props.name}
                placeholder={props.label}
                margin={props.margin}
                fullWidth
            />
            <ErrorMessage component="div" name={field.name} className="error"/>
        </Box>
    );
};

export default TextFieldComponent;
