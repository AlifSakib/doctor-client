import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./service";

const Services = ({ selected, setSelected }) => {
  const [selectedService, setSelectedService] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleService = (service) => {
    openModal();
    setSelectedService(service);
  };

  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointments");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="text-center text-4xl text-violet-600 font-bold my-16">
        <h1>Available appointments on {format(selected, "PP")}</h1>
      </div>
      <section className=" dark:bg-gray-800 dark:text-gray-100 w-9/12 mx-auto">
        <div className=" grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Service
              key={service._id}
              service={service}
              openModal={openModal}
              isOpen={isOpen}
              closeModal={closeModal}
              setIsOpen={setIsOpen}
              setSelectedService={setSelectedService}
              handleService={handleService}
            ></Service>
          ))}
        </div>
      </section>
      <BookingModal
        selected={selected}
        openModal={openModal}
        isOpen={isOpen}
        closeModal={closeModal}
        setIsOpen={setIsOpen}
        selectedService={selectedService}
      ></BookingModal>
    </div>
  );
};

export default Services;
