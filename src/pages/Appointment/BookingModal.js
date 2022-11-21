import { Dialog, Transition } from "@headlessui/react";
import { format } from "date-fns";
import React, { Fragment, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({
  isOpen,
  closeModal,
  selected,
  selectedService,
  refetch,
}) => {
  const { user } = useContext(AuthContext);
  const { name, slots = [] } = selectedService;
  const date = format(selected, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    let form = e.target;
    const bookingDetails = {
      patient: form.name.value,
      email: form.email.value,
      appointmentDate: form.date.value,
      slot: form.time.value,
      phone: form.phone.value,
      treatment: selectedService.name,
      serviceId: selectedService._id,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Done");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {name}
                    </Dialog.Title>
                    <form onSubmit={handleBooking} action="">
                      <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label inline-block mb-2 text-gray-700"
                          >
                            Appointment Date
                          </label>
                          <input
                            type="text"
                            disabled
                            defaultValue={date}
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Appointment Date"
                            name="date"
                            // {...register("date")}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label inline-block mb-2 text-gray-700"
                          >
                            Appointment Time
                          </label>
                          <select
                            className=" form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Appointment Time"
                            name="time"
                            // {...register("time")}
                          >
                            {slots.map((slot, i) => (
                              <option key={i} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label inline-block mb-2 text-gray-700"
                          >
                            Patient Email
                          </label>
                          <input
                            type="text"
                            defaultValue={user?.email}
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Patient Emai"
                            name="email"
                            // {...register("email")}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label inline-block mb-2 text-gray-700"
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Phone"
                            name="phone"
                            // {...register("phone")}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label inline-block mb-2 text-gray-700"
                          >
                            Patient Name
                          </label>
                          <input
                            type="text"
                            defaultValue={user?.displayName}
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Patient Name"
                            name="name"
                            // {...register("name")}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Confirm Booking
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default BookingModal;
