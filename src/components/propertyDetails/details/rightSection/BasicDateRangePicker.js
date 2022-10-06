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
    startDate: "2022-10-10T19:42:53.280Z",
    endDate: "2022-10-15T15:09:33.280Z",
  };

  function disableRandomDates(day) {
    console.log(day)
    // if()
    // const rN = Math.random() > 0.7;
    // console.log(rN);

    // return rN;
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
        // shouldDisableDate={disableRandomDates}
      />
    </LocalizationProvider>
  );
}
