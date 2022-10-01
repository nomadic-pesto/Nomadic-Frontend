import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const [value, setValue] = React.useState([0, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
    className={props.className}
    >
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={20000}
      />
    </Box>
  );
}
