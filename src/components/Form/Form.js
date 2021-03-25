import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Form = ({ createBooking }) => {
  const [booking, setBooking] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    ailment: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, date, time, ailment } = booking;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      ailment.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);
    booking.id = uuidv4();

    createBooking(booking);

    setBooking({
      pet: "",
      owner: "",
      date: "",
      time: "",
      ailment: "",
    });
  };

  return (
    <Fragment>
      <h2>Create date</h2>

      {error ? <p className="alert-error">complete all form </p> : ""}

      <form onSubmit={handleSubmit}>
        <label>Pet name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="pet name"
          onChange={handleChange}
          value={pet}
        />

        <label>Owner name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="owner name"
          onChange={handleChange}
          value={owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>ailments</label>
        <textarea
          name="ailment"
          className="u-full-width"
          onChange={handleChange}
          value={ailment}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          create date
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createBooking: PropTypes.func.isRequired,
};

export default Form;
