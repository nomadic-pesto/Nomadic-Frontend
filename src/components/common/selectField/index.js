import React from "react";

// imporitng text field  from materalUi
import TextField from "@mui/material/TextField";
import { ErrorMessage, useField } from "formik";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

//importing styles
import styles from "./styles.module.css";
import { Box } from "@mui/material";
import { constants } from "../../../utils/constants";

const SelectFieldComponent = (props) => {
  const width = props.width;

  const [field, meta] = useField(props);


  const options = props.options ? props.options.map((option)=><MenuItem key={option} value={option}>{option}</MenuItem>) : [];

  return (
    <>


      <Select
        labelId={props.id}
        id={props.id}
        value={props.value}
        name={props.name}
        displayEmpty
        onChange={props.onChange || ((event) => {
          props.form.setFieldValue(props.name, event.target.value);
        })}
        className={`${
          meta.touched && meta.error
        } ${props.className}`}
        onClick={props.onClick}
      >
        <MenuItem value="">
          <em className={`${styles["non-italic-select-option"]}`}>
            {props.placeholder}
          </em>
        </MenuItem>
        {options}
      </Select>


     
      <ErrorMessage
        component="div"
        name={field.name}
        className={`${styles["error"]}`}
      />
    </>
  );
};

export default SelectFieldComponent;
