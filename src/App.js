import React, { Fragment, useState, useEffect } from "react";
import From from "./components/Form/Form";
import Booking from "./components/Booking/Booking";

function App() {
  let initialBookings = JSON.parse(localStorage.getItem("listBookings")); 
  if (!initialBookings) {
    initialBookings = [];
  }

  const [listBookings, setListBookings] = useState(initialBookings);

  const createBooking = (booking) => {
    setListBookings([...listBookings, booking]);
  };

  useEffect(() => {
    if (initialBookings) {
      localStorage.setItem("listBookings", JSON.stringify(listBookings));
    } else {
      localStorage.setItem("listBookings", JSON.stringify([]));
    }
  }, [listBookings, initialBookings]);

  const deleteBooking = (id) => {
    const newBookings = listBookings.filter((booking) => booking.id !== id);
    setListBookings(newBookings);
  };

  const title =
    listBookings.length === 0 ? "No booking" : "Manager your bookings";

  return (
    <Fragment>
      <h1>Patient's manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <From createBooking={createBooking} />
          </div>
          <div className="one-half column">
            <h1>{title}</h1>
            {listBookings.map((booking) => (
              <Booking
                booking={booking}
                deleteBooking={deleteBooking}
                key={booking.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
