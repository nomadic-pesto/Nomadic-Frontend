//importing MUI materials
import { Grid, TextField, Typography } from "@mui/material";

//importing styles
import styles from "./style.module.css"

const TextFieldItem = (props)=>{


    return <>
    
    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="flex-start" justifyContent="center" >
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Typography className={styles["typography"]} align='center' wrap="true" >{props.label}</Typography>
        </Grid>  
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <TextField className= {styles["root"]} name={props.label} rows={props.rows} multiline={props.multiline}/>
        </Grid>  
    </Grid>
    
    
    
    
    </>;




}

export default TextFieldItem;