import React from "react";

// import Button from '@mui/material/Button';
import TextFieldComponent from "../../common/textField";
import Button from "./../../common/button";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { Formik } from "formik";


const SignUp = () => {
    const validate = Yup.object({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "password must be atleast 8 character")
            .required("password is required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),null],"confirm password should match with above password")
    });

    return (
        <div className={styles["login-background"]}>
            <div className={styles["center-card"]}>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        confirmPassword:""
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
                        <label>
                            Confirm your password:
                            <TextFieldComponent
                                id="login-confirm-password"
                                name="confirmPassword"
                                placeholder=""
                                width={500}
                                type={"password"}
                            />
                        </label>
                        <Button variant="contained" type="submit">
                            Sign up
                        </Button>
                    </form>
                </Formik>
                
            </div>
        </div>
    );
};

export default SignUp;
