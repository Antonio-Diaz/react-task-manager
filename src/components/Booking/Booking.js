import React from "react";
import PropTypes from "prop-types";

const Booking = ({ booking, deleteBooking }) => (
  <div className="date">
    <p>
      <span>Pet: </span> {booking.pet}{" "}
    </p>
    <p>
      <span>Owner: </span> {booking.owner}{" "}
    </p>
    <p>
      <span>Date: </span> {booking.date}{" "}
    </p>
    <p>
      <span>Time: </span> {booking.time}{" "}
    </p>
    <p>
      <span>Ailment: </span> {booking.ailment}{" "}
    </p>

    <button
      className="button delete u-full-width"
      onClick={() => deleteBooking(booking.id)}
    >
      Delete &times;
    </button>
  </div>
);

Booking.propTypes = {
  booking: PropTypes.object.isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

export default Booking;
