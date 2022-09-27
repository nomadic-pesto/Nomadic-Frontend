import React from "react";
import Stack from "@mui/material/Stack";
// import Button from '@mui/material/Button';
import TextFieldComponent from "../../common/textField";
import ButtonTransparent from "./../../common/buttonTransparent";
import Button from "./../../common/button";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { Formik } from "formik";
import { GoogleLogin,GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const LogIn = () => {
    const validate = Yup.object({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "password must be atleast 8 character")
            .required("password is required"),
    });

    return (
        <div className={styles["login-background"]}>
            <div className={styles["center-card"]}>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={validate}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <form className={styles["input-container"]}>
                        <label>
                            <span className={styles["input-title"]}>Email Address</span>
                            <TextFieldComponent
                                id="login-email"
                                name="email"
                                placeholder=""
                                width={500}
                                type={"text"}
                                className={styles["input-field"]}
                            />
                        </label>
                        <label>
                            Password:
                            <TextFieldComponent
                                id="login-password"
                                name="password"
                                placeholder=""
                                width={500}
                                type={"password"}
                            />
                        </label>
                        <Button variant="contained" type="submit">
                            Log In
                        </Button>
                    </form>
                </Formik>
                <GoogleOAuthProvider clientId="817056518934-0p9ituunl6pnooif02pfgli1kr4n5ldh.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={(response) => {
                            console.log(response);
                            axios({
                                method:"POST",
                                url:"http://localhost:5001/v1/auth/googlelogin",
                                data:{tokenId:response.credential}
                            })
                        }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                    ;
                </GoogleOAuthProvider>
                <div>
                    <Stack spacing={12} direction="row">
                        <ButtonTransparent>
                            Forgot your password
                        </ButtonTransparent>
                        <ButtonTransparent variant="contained">
                            Sign Up
                        </ButtonTransparent>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
