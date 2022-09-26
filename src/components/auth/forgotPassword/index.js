import React from "react";
// import Button from '@mui/material/Button';
import TextFieldComponent from "../../common/textField";
import Button from "./../../common/button";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { Formik } from "formik";


const ForgotPassword = () => {
    const validate = Yup.object({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
    });

    return (
        <div className={styles["login-background"]}>
            <div className={styles["center-card"]}>
                <Formik
                    initialValues={{
                        email: "",
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
                        <Button variant="contained" type="submit">
                            Get Reset Link
                        </Button>
                    </form>
                </Formik>
                
            </div>
        </div>
    );
};

export default ForgotPassword;
