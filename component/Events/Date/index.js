import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "../../../styles/Events.module.css";
import "react-datepicker/dist/react-datepicker.css";

const EventDate = ({ startDate, setStartDate }) => {
  console.log(startDate);
  return (
    <DatePicker
      wrapperClassName={styles.datePicker}
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default EventDate;
