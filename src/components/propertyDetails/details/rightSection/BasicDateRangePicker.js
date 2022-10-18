import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";

//importing styles
import styles from "./styles.module.css";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  const dateRangeArray = {
    startDate: "2022-10-17T00:00",
    endDate: "2022-10-22T00:00",
  };

  function disableRandomDates(date) {

    if(new Date(date).getTime() >= new Date(dateRangeArray.startDate).getTime() && new Date(date).getTime() <= new Date(dateRangeArray.endDate).getTime()){
      return true
    }
    return false;
   
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "Check-in", end: "Check-out" }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <div className={styles["calender-row"]}>
            <TextField className={styles["calender-input"]} {...startProps} />
            <div className={`${styles["border-right"]}`}></div>
            <TextField className={styles["calender-input"]} {...endProps} />
          </div>
        )}
        disablePast
        shouldDisableDate={(date)=>disableRandomDates(date)}
        // shouldDisableDate={(date) => new Date(date).getTime() === new Date('2022-10-16T00:00').getTime()}
      />
    </LocalizationProvider>
  );
}
