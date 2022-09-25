import React from 'react'

//importing MUI
import Button from '@mui/material/Button';

//importing styles
import styles from "./styles.module.css";

const ButtonTransparent= (props) => {
  return (
    <>
        <Button variant="contained" className={`${styles["common-button"]} ${props.className}`}>
            {props.children}
        </Button>
    </>
  )
}

export default ButtonTransparent;