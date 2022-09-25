import React from "react";
import Stack from "@mui/material/Stack";
// import Button from '@mui/material/Button';
import TextFieldComponent from "../../common/textField";
import ButtonTransparent from "./../../common/buttonTransparent";
import Button from "./../../common/button";
import styles from "./styles.module.css";


const LogIn = () => {
    return (
        <div className={styles["login-background"]}>
            <div className={styles["center-card"]}>
                <form className={styles["input-container"]}>
                    <label >
                        Email Address:
                        <TextFieldComponent placeholder="" width={500} type={"text"}/>
                    </label>
                    <label>
                        Password:
                        <TextFieldComponent placeholder="" width={500} type={"password"}/>
                    </label>
                    <Button variant="contained">Log In</Button>
                    <Button className={styles["google-button"]}>Google</Button>
                </form>
                <div>
                    <Stack spacing={12} direction="row">
                        <ButtonTransparent variant="contained">
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
