//importing styles
import styles from "../autocomplete/style.module.css";

//importing MUI component
import { Autocomplete, Grid, TextField, Typography } from "@mui/material";


//importing custom data for AutoComplete

import DestinationData from "../autocomplete/custom-data"



const CustomAutoComplete = (props) =>{


    return <>
        <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="flex-start" justifyContent="center" alignContent="space-evenly">
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                 <Typography className={styles["typography"]} align='center' wrap="true" >{props.label}</Typography>
            </Grid>
            <Grid container item xs={12} sm={12} md={7} lg={7} xl={7} alignItems="flex-start" justifyContent="center">
                <Autocomplete
                    className={styles["root"]}
                    options={DestinationData}
                    renderInput={(params) => <TextField className={styles} {...params} />}
                    onChange={(event, value) => {
                    console.log(value);
                }}/>
            </Grid>
    
            
        </Grid>

    </>






}

export default CustomAutoComplete;



