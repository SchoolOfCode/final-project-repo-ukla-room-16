import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateOfBirth = ({startDate, setStartDate}) => {
    
  return (
    <DatePicker  
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />

  );
};

export default DateOfBirth;