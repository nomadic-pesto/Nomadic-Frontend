import React from "react";
import Stack from "@mui/material/Stack";
// import Button from '@mui/material/Button';
import TextFieldComponent from "../../common/textField";
import ButtonTransparent from "./../../common/buttonTransparent";
import Button from "./../../common/button";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { Formik } from "formik";
import { apiCall } from "../../../services/methods";

const LogIn = () => {
    const validate = Yup.object({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "password must be atleast 8 character")
            .required("password is required"),
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={validate}
        >
            <div className={styles["login-background"]}>
                <div className={styles["center-card"]}>
                    <form
                        className={styles["input-container"]}
                        onSubmit={handleSubmit}
                    >
                        <label>
                            Email Address:
                            <TextFieldComponent
                                id="login-email"
                                name="email"
                                placeholder=""
                                width={500}
                                type={"text"}
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
                        <Button className={styles["google-button"]}>
                            Google
                        </Button>
                    </form>
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
        </Formik>
    );
};

export default LogIn;
