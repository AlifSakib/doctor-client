import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selected, setSelected }) => {
  //   const [selected, setSelected] = React.useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(currentData) => {
                if (currentData) {
                  setSelected(currentData);
                }
              }}
              footer={footer}
            />
          </div>
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};

export default AppointmentBanner;
