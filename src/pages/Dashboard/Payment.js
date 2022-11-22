import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  return (
    <div>
      <p>Booking for {booking.treatment}</p>
      <p>Please pay {booking.price}$ for your appointment</p>
    </div>
  );
};

export default Payment;
