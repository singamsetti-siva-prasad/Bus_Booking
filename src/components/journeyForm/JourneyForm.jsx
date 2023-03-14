import React, { useState } from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
// import { SingleDatePicker } from "react-dates";
// import "react-dates/initialize";
// import "react-dates/lib/css/_datepicker.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from "date-fns";

const JourneyForm = () => {
  // const [journeyDate, setJourneyDate] = useState(null);
  // const [focused, setFocused] = useState(false);
  // const onFocusChange = ({ focused }) => {
  //   setFocused(focused);
  // };
  const [journeyDate, setJourneyDate] = useState(new Date());
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const handleClick = (e) => {
    alert(
      e.target.journeyDate.value,
      e.target.fromCity.value,
      e.target.toCity.value
    );
  };
  const showForm = (e) => {};
  return (
    <div
      className="w-screen h-screen flex items-center justify-center "
      id="journey-form"
    >
      <form className="w-full h-full flex items-center justify-center bg-[url('/src/assets/Hero_Tweak.png')] bg-repeat-x ">
        <div className="mr-4 bg-white">
          <LocationCityIcon />
          <input
            minDate={subDays(new Date(), 1)}
            className="p-2"
            placeholder="From"
            name="fromCity"
            type="text"
            value={fromCity}
            required
            autocomplete="off"
            onChange={(e) => setFromCity(e.target.value)}
          />
        </div>
        <div className="mr-4 bg-white">
          <LocationCityIcon />
          <input
            className="p-2"
            placeholder="To"
            name="toCity"
            type="text"
            required
            autocomplete="off"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          />
        </div>
        <div className="mr-4 bg-white">
          <DatePicker
            showIcon
            selected={journeyDate}
            onChange={(date) => setJourneyDate(date)}
            isClearable
            minDate={new Date()}
            closeOnScroll={true}
            placeholderText="Onward date"
            className="p-2"
            required
            form="journey-form"
          />
        </div>
        {/* <div className="mr-4 bg-white">
          <SingleDatePicker
            date={journeyDate}
            onOutsideClick={true}
            numberOfMonths={1}
            onDateChange={setJourneyDate}
            focused={focused}
            onFocusChange={onFocusChange}
            id="dob"
            required={true}
          />
        </div> */}
        {/* <input
          className="bg-red-600 font-bold p-2 cursor-pointer hover:scale-105 "
          type="submit"
          value="search buses"
        /> */}
        <button
          className="bg-red-600 font-bold p-2 cursor-pointer hover"
          type="submit"
          onClick={handleClick}
        >
          search buses
        </button>
      </form>
    </div>
  );
};

export default JourneyForm;
