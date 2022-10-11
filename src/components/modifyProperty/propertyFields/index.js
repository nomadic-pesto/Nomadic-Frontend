import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

//importing styles
import styles from "./styles.module.css";

//importing Formik
import * as Yup from "yup";
import { Formik } from "formik";

//importing MUI
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

//importing other components
import Loader from "../../common/loader";
import TextFieldComponent from "../../common/textField";
import Button from "../../common/button";
import { editProfile } from "../../../actions/userAction";

//importing toastr
import { toast } from "react-toastify";

const PropertyFields = ({ userState, editProfile }) => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (user._id && user.name && localStorage.getItem("authToken")) {
    } else {
      toast.error("Please Login!");
      navigate("/dashboard");
    }
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  const initialValues = {
    name: "", //user.name ? user.name : "",
    phoneNumber: user.mobileNumber ? user.mobileNumber : "",
    email: user.email ? user.email : "",
    address: user.address ? user.address : "",
  };
  const [loading, setLoading] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values)
    // setLoading(true);
    // const editProfileResponse =  await editProfile({...values,token:localStorage.getItem("authToken")});
    // if(editProfileResponse.status === 'success'){
    //   localStorage.setItem("user",JSON.stringify(editProfileResponse.data.user));
    //   toast.success("Profile Updated!");
    //   navigate("/dashboard");
    // }else{
    //   let errorMessage = editProfileResponse.message ? editProfileResponse.message : "Error Occurred!"
    //   toast.error(errorMessage);
    // }
    // setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <div className={styles["property-container"]}>
        <div className={styles["property-title"]}>
          {params.id === "add" ? "Add" : "Edit"} Property
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {(form) => (
            <form
              onSubmit={form.handleSubmit}
              className={styles["input-container"]}
            >
              <Grid container>
                <Grid
                  className={styles["left-section"]}
                  item
                  md={6}
                  xs={12}
                  padding={0}
                >
                  <label
                    className={`${styles["input-row"]} ${styles["flex-center"]}`}
                  >
                    <Grid container className={styles["item-container"]}>
                      <Grid
                        item
                        md={3}
                        xs={12}
                        padding={0}
                        className={`${styles["flex-center"]}`}
                      >
                        <span className={styles["input-title"]}>
                          Destination Type
                        </span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <Select
                          labelId="destination-select-label"
                          id="destination-select"
                          value={form.values["name"]}
                          name="name"
                          displayEmpty
                          onChange={(event) => {
                            form.setFieldValue("name", event.target.value);
                          }}
                          className={`${styles["input-field"]} ${styles["select-field"]}`}
                        >
                          <MenuItem value="">
                            <em className={`${styles["non-italic-select-option"]}`} >Destination Type...</em>
                          </MenuItem>
                          <MenuItem value={"Beaches"}>Beaches</MenuItem>
                          <MenuItem value={"Mountains"}>Mountains</MenuItem>
                        </Select>
                        
                      </Grid>
                    </Grid>
                  </label>
                  <label
                    className={`${styles["input-row"]} ${styles["flex-center"]}`}
                  >
                    <Grid container className={styles["item-container"]}>
                      <Grid
                        item
                        md={3}
                        xs={12}
                        padding={0}
                        className={`${styles["flex-center"]}`}
                      >
                        <span className={styles["input-title"]}>
                          Phone Number
                        </span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextFieldComponent
                          id="property-phone"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          width={500}
                          type={"text"}
                          className={styles["input-field"]}
                        />
                      </Grid>
                    </Grid>
                  </label>
                </Grid>
                <Grid
                  className={styles["right-section"]}
                  item
                  md={6}
                  xs={12}
                  padding={0}
                >
                  <label
                    className={`${styles["input-row"]} ${styles["flex-center"]}`}
                  >
                    <Grid container className={styles["item-container"]}>
                      <Grid
                        item
                        md={3}
                        xs={12}
                        padding={0}
                        className={`${styles["flex-center"]}`}
                      >
                        <span className={styles["input-title"]}>Email</span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextFieldComponent
                          id="property-email"
                          name="email"
                          placeholder="Email"
                          width={500}
                          type={"text"}
                          className={styles["input-field"]}
                          disabled={true}
                        />
                      </Grid>
                    </Grid>
                  </label>
                  <label
                    className={`${styles["input-row"]} ${styles["flex-center"]}`}
                  >
                    <Grid container className={styles["item-container"]}>
                      <Grid
                        item
                        md={3}
                        xs={12}
                        padding={0}
                        className={`${styles["flex-center"]}`}
                      >
                        <span className={styles["input-title"]}>Address</span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextFieldComponent
                          id="property-address"
                          name="address"
                          placeholder="Address"
                          width={500}
                          type={"text"}
                          className={styles["input-field"]}
                        />
                      </Grid>
                    </Grid>
                  </label>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                type="submit"
                className={styles["submit-button"]}
              >
                {params.id === "add" ? "Add" : "Edit"}
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

export default connect(mapStateToProps, { editProfile })(PropertyFields);
