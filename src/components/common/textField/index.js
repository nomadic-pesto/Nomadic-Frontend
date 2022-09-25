import React from "react";

// imporitng text field  from materalUi
import TextField from "@mui/material/TextField";


//importing styles
import styles from "./styles.module.css";
import { Box } from "@mui/material";

const TextFieldComponent = (props) => {
    const width= props.width
    return (
        <Box
            className={`${styles["TextField-without-border-radius"]}`}
            sx={{
                width,
                maxWidth: "100%",
            }}
        >
            <TextField
                id="outlined-text"
                type={props.type}
                className={`${styles["common-textfield"]} ${props.className}`}
                placeholder={props.label}
                margin={props.margin}
                fullWidth
            />
        </Box>
    );
};

export default TextFieldComponent;
