import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { useRef, useEffect } from "react";

import { useFormik } from "formik";
import CustomAutoComplete from "../common/autocomplete/index";
// import styles from "./styles.module.css";

//importing dropzone
import CustomReactDropZone from "../common/dropzone/index"

//importing TextFieldItem 
import TextFieldItem from "./text-field";

//importing ButtonComponent
import ButtonComponent from "../common/button/index"


//importing styles
import styles from "./style.module.js"


const AddProperty = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
       
        <Grid container spacing={2} style={{ background: "rgb(239, 239, 239, 0.82)" }} justifyContent={"center"} direction="column">
            <Grid item zeroMinWidth>
                <CustomReactDropZone />
            </Grid>

            {/* 1 row */}
            <Grid container sx={{ paddingBottom: 5 }} >
                <Grid item zeroMinWidth lg={2} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} wrap="true">Destination Type *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                            <CustomAutoComplete />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} xl={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth xs={12} sx={{ paddingBottom: { xs : 5} }} lg={1} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} wrap="true">Sub destination *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                            <CustomAutoComplete />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth lg={2} xl={2} />
            </Grid>

            {/* 2 row */}

            <Grid container sx={{ paddingBottom: 5 }} >
                <Grid item zeroMinWidth lg={2} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles}>No of people accommodation *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                        <TextFieldItem />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth xs={12} sx={{ paddingBottom: { xs : 5} }} lg={1} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} wrap="true">Price *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                            <TextFieldItem />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth lg={2} xl={2} />
            </Grid>

            {/* 3 row */}

            <Grid container sx={{ paddingBottom: 5 }} >
                <Grid item zeroMinWidth lg={2} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} >House Type *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                        <CustomAutoComplete />
                        
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth lg={1} xl={7} />
                <Grid item zeroMinWidth lg={2}>

                </Grid>
                <Grid item zeroMinWidth lg={3} >

                </Grid>
                <Grid item zeroMinWidth lg={0.5} />
            </Grid>

            {/* 4 row */}

            <Grid container sx={{ paddingBottom: 5 }} >
                <Grid item zeroMinWidth lg={2} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} >Overview *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                            <TextFieldItem rows={"5"} multiline={true} />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth xs={12} sx={{ paddingBottom: { xs : 5} }} lg={1} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} >Amenties *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={3} xl={2}>
                    <Grid container item direction="row">
                        <Grid item xs={2.5} sm={1.5} xl={1} />
                        <Grid item xs={3} sm={3} xl={3}>
                            <FormControlLabel control={<Checkbox />} label="Wifi" value='wifi' />
                        </Grid>
                        <Grid item xs={3} sm={3} xl={3}>
                            <FormControlLabel control={<Checkbox />} label="Wifi" value='wifi' />
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} xl={1} />
                    </Grid>
                    <Grid container item direction="row">
                        <Grid item xs={2.5} sm={1.5} xl={1} />
                        <Grid item xs={3} sm={3} xl={3}>
                            <FormControlLabel control={<Checkbox />} label="Wifi" value='wifi' />
                        </Grid>
                        <Grid item xs={3} sm={3} xl={3}>
                            <FormControlLabel control={<Checkbox />} label="Wifi" value='wifi' />
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} xl={1} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth lg={1} xl={2} />
            </Grid>

            {/* 5 row */}

            <Grid container sx={{ paddingBottom: 5 }} >
                <Grid item zeroMinWidth lg={2} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} >Address </Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                            <TextFieldItem rows={"5"} multiline={true} />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth xs={12} sx={{ paddingBottom: { xs : 5} }} lg={1} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} >Property Name *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                            <TextFieldItem />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth lg={2} xl={3} />
            </Grid>

            {/* 6 row */}

            <Grid container sx={{ paddingBottom: 5 }} >
                <Grid item zeroMinWidth lg={2} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>

                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>

                </Grid>
                <Grid item zeroMinWidth lg={1} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} >Streetname *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                            <TextFieldItem />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth lg={2} xl={2} />
            </Grid>


            {/* 7 row */}
            <Grid container sx={{ paddingBottom: 5 }} >
                <Grid item zeroMinWidth lg={2} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>

                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>

                </Grid>
                <Grid item zeroMinWidth lg={1} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} >District *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                            <CustomAutoComplete />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>

                </Grid>
                <Grid item zeroMinWidth lg={2} xl={2} />
            </Grid>

            {/* 8 row */}

            <Grid container sx={{ paddingBottom: 5 }} >
                <Grid item zeroMinWidth lg={2} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>

                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>

                </Grid>
                <Grid item zeroMinWidth lg={1} xl={2} />
                <Grid item zeroMinWidth xs={12} lg={1.5} xl={1}>
                    <Typography sx={styles} >State *</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={2} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>
                            <CustomAutoComplete />
                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth lg={2} xl={2} />
            </Grid>

            {/* 9 row */}

            <Grid container sx={{ paddingBottom: 5 }} >
                <Grid item zeroMinWidth sm={5} xs={4} lg={2} xl={2} />
                <Grid item zeroMinWidth lg={1} xl={1}>

                </Grid>
                <Grid item zeroMinWidth xs={0} lg={2.5} xl={2}>

                </Grid>
                <Grid item zeroMinWidth xs={4} sm={2} lg={2} xl={2} >
                    <ButtonComponent>Add Property</ButtonComponent>
                </Grid>
                <Grid item zeroMinWidth xs={0} lg={1.5} xl={1}>

                </Grid>
                <Grid item zeroMinWidth xs={0} lg={3} xl={2}>
                    <Grid container>
                        <Grid item zeroMinWidth xs={2} />
                        <Grid item zeroMinWidth xs={8} lg={12} xl={12}>

                        </Grid>
                        <Grid item zeroMinWidth xs={2} />
                    </Grid>
                </Grid>
                <Grid item zeroMinWidth xs={4} sm={5} lg={1} xl={2} />
            </Grid>


        </Grid>
       
    );


};




export default AddProperty;

