import { useQuery } from "@tanstack/react-query";
import React from "react";
import Service from "./service";

const Services = () => {
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
        <h1>Available appointments on</h1>
      </div>
      <section className=" dark:bg-gray-800 dark:text-gray-100 w-9/12 mx-auto">
        <div className=" grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
