import React from "react";
import AppointmentBanner from "./AppointmentBanner";
import Services from "./Services";

const Appointment = () => {
  const [selected, setSelected] = React.useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <Services selected={selected} setSelected={setSelected}></Services>
    </div>
  );
};

export default Appointment;
