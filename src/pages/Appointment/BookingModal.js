import { Dialog, Transition } from "@headlessui/react";
import { format } from "date-fns";
import React, { Fragment } from "react";

const BookingModal = ({ isOpen, closeModal, selected, selectedService }) => {
  const { name, slots } = selectedService;
  const date = format(selected, "PP");
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
                    <form action="">
                      <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-2 text-gray-700"
                          >
                            Appointment Date
                          </label>
                          <input
                            type="text"
                            defaultValue={date}
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Appointment Date"
                          />
                        </div>
                      </div>
                      <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-2 text-gray-700"
                          >
                            Appointment Time
                          </label>
                          <select
                            className=" form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Appointment Time"
                          >
                            {slots.map((slot, i) => (
                              <option key={i} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-2 text-gray-700"
                          >
                            Patient Email
                          </label>
                          <input
                            type="text"
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Patient Emai"
                          />
                        </div>
                      </div>
                      <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-2 text-gray-700"
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-2 text-gray-700"
                          >
                            Patient Name
                          </label>
                          <input
                            type="text"
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Patient Name"
                          />
                        </div>
                      </div>
                    </form>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
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
