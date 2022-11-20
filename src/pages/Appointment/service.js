import React from "react";

const Service = ({ service, openModal, setSelectedService, handleService }) => {
  const { name, slots } = service;
  //   const handleService = () => {
  //     openModal();
  //     setSelectedService(service);
  //   };

  return (
    <div>
      <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="dark:text-gray-100">{slots[0]}</p>
            <p className="dark:text-gray-100">
              {slots.length} spaces available{" "}
            </p>
          </div>
          <button
            onClick={() => handleService(service)}
            type="button"
            className="flex items-center justify-center w-full bg-violet-400 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
