import React, { useState } from "react";
import Modal from "../../utils/Modal";

function RecordForm({
  record,
  title,
  handleOnSave,
  isUpdating,
  handleOnCancel,
}) {
  const [formData, setFormData] = useState(
    record
      ? record
      : {
          campaign: "",
          activationDate: "",
          company: "",
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          outCome: "",
          notes: "",
          bookingDate: "",
          bookingTime: "",
        }
  );

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="absolute rounded">
      <div className=" fixed z-30 top-0 left-0 h-[100vh] w-full bg-slate-50 opacity-70 "></div>
      <Modal
        title={title}
        showCancel={true}
        cancelLabel="Cancel"
        saveLabel="Save"
        showSave={true}
        showLoading={isUpdating}
        handleOnCancel={() => {
          setFormData({
            campaign: "",
            activationDate: "",
            company: "",
            title: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            outCome: "",
            notes: "",
            bookingDate: "",
            bookingTime: "",
          });
          handleOnCancel();
        }}
        handleOnSave={() => {
          handleOnSave(formData);
        }}
      >
        <form className="flex gap-4 justify-center">
          <div className="flex flex-col justify-center">
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="campaign" className="  text-white">
                  Campaign
                </label>
              </div>

              <input
                id="campaign"
                type="text"
                name="campaign"
                value={formData.campaign}
                className="rounded p-1  focus:shadow-outline focus:outline-none"
                onChange={handleOnChange}
              />
            </div>
            <div className="self-center my-1 w-full">
              <div className="mb-1">
                <label htmlFor="activationDate" className="  text-white">
                  Activation Date
                </label>
              </div>

              <input
                id="activationDate"
                type="date"
                name="activationDate"
                value={formData.activationDate}
                className="rounded w-full  p-1 focus:shadow-outline focus:outline-none"
                onChange={handleOnChange}
              />
            </div>
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="company" className=" text-white">
                  Company
                </label>
              </div>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={handleOnChange}
                name="company"
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="title" className=" text-white">
                  Title
                </label>
              </div>
              <input
                id="title"
                type="text"
                onChange={handleOnChange}
                name="title"
                value={formData.title}
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="firstName" className=" text-white">
                  First Name
                </label>
              </div>
              <input
                id="firstName"
                onChange={handleOnChange}
                type="text"
                value={formData.firstName}
                name="firstName"
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="lastName" className=" text-white">
                  Last Name
                </label>
              </div>
              <input
                id="lastName"
                type="text"
                onChange={handleOnChange}
                name="lastName"
                value={formData.lastName}
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="email" className=" text-white">
                  Email
                </label>
              </div>
              <input
                id="email"
                type="text"
                value={formData.email}
                onChange={handleOnChange}
                name="email"
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="self-center my-1 w-full">
              <div className="mb-1">
                <label htmlFor="email" className=" text-white">
                  Booking Date
                </label>
              </div>
              <input
                id="bookingDate"
                type="date"
                value={formData.bookingDate}
                onChange={handleOnChange}
                name="bookingDate"
                className="rounded w-full p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="phone" className=" text-white">
                  Phone
                </label>
              </div>
              <input
                id="phone"
                type="text"
                onChange={handleOnChange}
                name="phone"
                value={formData.phone}
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>

            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="address" className=" text-white">
                  Address
                </label>
              </div>
              <input
                id="address"
                type="text"
                onChange={handleOnChange}
                name="address"
                value={formData.address}
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>

            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="city" className=" text-white">
                  City
                </label>
              </div>
              <input
                id="city"
                type="text"
                value={formData.city}
                onChange={handleOnChange}
                name="city"
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="state" className=" text-white">
                  State
                </label>
              </div>
              <input
                id="state"
                type="text"
                onChange={handleOnChange}
                name="state"
                value={formData.state}
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="zipCode" className=" text-white">
                  Zip Code
                </label>
              </div>
              <input
                id="zipCode"
                value={formData.zipCode}
                type="text"
                onChange={handleOnChange}
                name="zipCode"
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="outCome" className=" text-white">
                  Outcome
                </label>
              </div>
              <input
                id="outCome"
                type="text"
                value={formData.outCome}
                onChange={handleOnChange}
                name="outCome"
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>

            <div className="self-center my-1">
              <div className="mb-1">
                <label htmlFor="notes" className=" text-white">
                  Notes
                </label>
              </div>
              <input
                id="notes"
                type="text"
                value={formData.notes}
                onChange={handleOnChange}
                name="notes"
                className="rounded  p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="self-center w-full my-1">
              <div className="mb-1">
                <label htmlFor="notes" className=" text-white">
                  Boooking Time
                </label>
              </div>
              <input
                id="bookingTime"
                type="time"
                value={formData.bookingTime}
                onChange={handleOnChange}
                name="bookingTime"
                className="rounded w-full p-1 focus:shadow-outline focus:outline-none"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default RecordForm;
