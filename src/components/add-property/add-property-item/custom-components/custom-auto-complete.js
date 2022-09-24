import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import DestinationData from "../custom-data/custom-data";
import styles from "../custom-style/styles.module.css"

//Styled AutoComplete Component - To edit file "./styled-auto-complete"
import StyledAutoComplete from "../custom-style/styled-auto-complete";
import CustomPopper from "../custom-components/custom-popper";



const CustomAutoComplete = (props) => {

    console.log(props);
    

    return <>
        <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center" justifyContent="center" alignContent="space-evenly">
            <Typography className={styles["typography"]} align='center' wrap="true" >{props.label}</Typography>
            <StyledAutoComplete
                
                options={DestinationData}
                renderInput={(params) => <TextField  {...params} />}
                onChange={(event, value) => {
                    console.log(value);
                }}
                PopperComponent={CustomPopper}
            />
        </Grid>

    </>




}

export default CustomAutoComplete;