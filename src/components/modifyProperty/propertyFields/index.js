import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
//importing image uplaod components
import cuid from "cuid";
import Dropzone from "./dropZone";
import ImageGrid from "./imageGrid";

//importing styles
import styles from "./styles.module.css";

//importing Formik
import * as Yup from "yup";
import { ErrorMessage, Formik } from "formik";

//importing MUI
import Grid from "@mui/material/Grid";

//importing other components
import Loader from "../../common/loader";
import TextFieldComponent from "../../common/textField";
import Button from "../../common/button";
import { editProfile } from "../../../actions/userAction";
import { apiCall } from "../../../services/methods";

//importing toastr
import { toast } from "react-toastify";
import SelectFieldComponent from "../../common/selectField";
import { constants } from "../../../utils/constants";
import TextAreaComponent from "../../common/textArea";
import CheckboxComponent from "./checkbox";

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
    destination: "",
    subDestination: "",
    accommodation: "",
    price: "",
    houseType: "",
    overview: "",
    address: "",
    propertyName: "",
    streetName: "",
    district: "",
    state: "",
    amenities: [],
  };
  const [loading, setLoading] = useState(false);

  const validate = Yup.object({
    destination: Yup.string().required("Destination is required"),
    subDestination: Yup.string().required("Sub-Destination is required"),
    accommodation: Yup.number()
      .min(1)
      .max(30)
      .required("Accommodation is required"),
    price: Yup.number().min(1).max(20000).required("Price is required"),
    houseType: Yup.string().required("House type is required"),
    overview: Yup.string().required("Overview is required"),
    address: Yup.string().required("Address is required"),
    propertyName: Yup.string().required("Property Name is required"),
    streetName: Yup.string().required("Street Name is required"),
    district: Yup.string().required("District is required"),
    state: Yup.string().required("State is required"),
    amenities: Yup.array()
      .length(1, "Amenities is required")
      .required("Amenities is required"),
  });
let imagesArray=[]
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = async function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
        const uploadImage = async(file)=>{
          return await apiCall(`${constants.BACKEND_URL}/v1/upload`,
          "POST",
          {"Content-Type": "multipart/form-data"},
          { file })
        }
        let response = await uploadImage(file)
        console.log(response)
        console.log(response.data[0].Location)
        // imagesArray.push(response.Lo)
      };
      reader.readAsDataURL(file);
      // console.log(file)
      return file;
    });
  }, []);

// async function uploadImage(file){
//   return await apiCall(`${constants.BACKEND_URL}/v1/upload`,
//   "POST",
//   {"Content-Type": "multipart/form-data"},
//   { file })
// }

  const handleSubmit = async (values) => {
    console.log(values);
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
              <Dropzone onDrop={onDrop}  className={styles.dropzone}/>
              <ImageGrid images={images} />
              <Grid container>
                <Grid
                  className={styles["left-section"]}
                  item
                  md={12}
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
                        <SelectFieldComponent
                          id="destination-select"
                          name="destination"
                          placeholder="Destination Type..."
                          value={form.values["destination"]}
                          form={form}
                          className={`${styles["input-field"]} ${styles["select-field"]}`}
                          options={constants.DESTINATION_TYPES.map(
                            (destination) => destination.name
                          )}
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
                        <span className={styles["input-title"]}>
                          Sub Destination
                        </span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <SelectFieldComponent
                          id="sub-destination-select"
                          name="subDestination"
                          placeholder="Sub Destination..."
                          value={form.values["subDestination"]}
                          form={form}
                          className={`${styles["input-field"]} ${styles["select-field"]}`}
                          options={constants.DESTINATION_TYPES.map(
                            (destination) => destination.name
                          )}
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
                        <span className={styles["input-title"]}>
                          House type
                        </span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <SelectFieldComponent
                          id="house-type-select"
                          name="houseType"
                          placeholder="House type..."
                          value={form.values["houseType"]}
                          form={form}
                          className={`${styles["input-field"]} ${styles["select-field"]}`}
                          options={constants.HOUSE_TYPES.map(
                            (destination) => destination.name
                          )}
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
                        <span className={styles["input-title"]}>
                          Accommodation for
                        </span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextFieldComponent
                          id="accommodation"
                          name="accommodation"
                          placeholder="Accommodation for"
                          width={500}
                          type={"number"}
                          inputProps={{
                            inputProps: {
                              max: 30,
                              min: 1,
                            },
                          }}
                          className={styles["input-field"]}
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
                        <span className={styles["input-title"]}>Amenities</span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <Grid container className={styles["item-container"]}>
                          {constants.AMENITIES_LIST && constants.AMENITIES_LIST.map((list) => (
                            <React.Fragment key={list}>
                              <Grid item xs={6} padding={0}>
                                <CheckboxComponent
                                  label={list}
                                  name="amenities"
                                  form={form}
                                  onClick={() => {
                                    if (
                                      !form.values["amenities"].includes(list)
                                    ) {
                                      let tempValues = [
                                        ...form.values["amenities"],
                                        list,
                                      ];
                                      return form.setFieldValue(
                                        "amenities",
                                        tempValues
                                      );
                                    } else {
                                      let tempValues = [
                                        ...form.values["amenities"],
                                      ];
                                      tempValues.splice(
                                        tempValues.findIndex(
                                          (val) => val === list
                                        ),
                                        1
                                      );
                                      return form.setFieldValue(
                                        "amenities",
                                        tempValues
                                      );
                                    }
                                  }}
                                />
                              </Grid>
                            </React.Fragment>
                          ))}
                        </Grid>

                        <ErrorMessage
                          component="div"
                          name={"amenities"}
                          className={`${styles["error"]}`}
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
                        <span className={styles["input-title"]}>Price</span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextFieldComponent
                          id="price"
                          name="price"
                          placeholder="Price..."
                          width={500}
                          type={"number"}
                          inputProps={{
                            inputProps: {
                              max: 20000,
                              min: 1,
                            },
                          }}
                          className={styles["input-field"]}
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
                        <span className={styles["input-title"]}>
                          Property Name
                        </span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextFieldComponent
                          id="propertyName"
                          name="propertyName"
                          placeholder="Property Name..."
                          width={500}
                          type={"text"}
                          className={styles["input-field"]}
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
                        <span className={styles["input-title"]}>
                          Steet Name
                        </span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextFieldComponent
                          id="streetName"
                          name="streetName"
                          placeholder="Steet Name..."
                          width={500}
                          type={"text"}
                          className={styles["input-field"]}
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
                        <span className={styles["input-title"]}>District</span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextFieldComponent
                          id="district"
                          name="district"
                          placeholder="District..."
                          width={500}
                          type={"text"}
                          className={styles["input-field"]}
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
                        <span className={styles["input-title"]}>State</span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextFieldComponent
                          id="state"
                          name="state"
                          placeholder="State..."
                          width={500}
                          type={"text"}
                          className={styles["input-field"]}
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
                        <span className={styles["input-title"]}>Overview</span>
                      </Grid>
                      <Grid item md={9} xs={12} padding={0}>
                        <TextAreaComponent
                          id="overview"
                          name="overview"
                          placeholder="Overview..."
                          width={500}
                          lines={5}
                          className={`${styles["input-field"]} ${styles["overview-area"]}`}
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
                        <TextAreaComponent
                          id="address"
                          name="address"
                          placeholder="Address..."
                          width={500}
                          lines={3}
                          className={`${styles["input-field"]} ${styles["overview-area"]}`}
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