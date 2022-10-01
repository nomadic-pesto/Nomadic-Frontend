import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';

//importing styles
import styles from "./styles.module.css";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <div
          className={styles["calender-row"]}
          >
            <TextField 
             className={styles["calender-input"]}
            {...startProps} />
            <div className={`${styles["border-right"]}`}></div>
            <TextField 
            className={styles["calender-input"]}
            {...endProps} />
          </div>
        )}
      />
    </LocalizationProvider>
  );
}
