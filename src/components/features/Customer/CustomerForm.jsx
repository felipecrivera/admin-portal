import React, { useState, useEffect } from "react";
import Modal from "../../utils/Modal";

function CustomerForm({
  record,
  title,
  handleOnSave,
  isUpdating,
  handleOnCancel,
}) {
  const [formData, setFormData] = useState({
    AccountId: "",
    AccountName: "",
    email: "",
    bookingGoal: 0,
    activationGoal: 0,
    dashboardDisplay: "Both",
    visibleDashboards: [],
    users: [],
    campaigns: [],
  });

  // If record is provided, populate the form data with it
  useEffect(() => {
    if (record) {
      setFormData(record);
    }
  }, [record]);

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="absolute rounded">
      <div className="fixed z-30 top-0 left-0 h-[100vh] w-full bg-slate-50 opacity-70 "></div>
      <Modal
        title={title}
        showCancel={true}
        cancelLabel="Cancel"
        saveLabel="Save"
        showSave={true}
        showLoading={isUpdating}
        handleOnCancel={() => {
          // Reset form data and invoke cancel handler
          setFormData({
            AccountId: "",
            AccountName: "",
            email: "",
            bookingGoal: 0,
            activationGoal: 0,
            dashboardDisplay: "Both",
            visibleDashboards: [],
            users: [],
            campaigns: [],
          });
          handleOnCancel();
        }}
        handleOnSave={() => {
          // Pass form data to save handler
          handleOnSave(formData);
        }}
      >
        <form className="flex justify-center gap-4">
          <div className="flex flex-wrap justify-between">
            <div className="flex  justify-center">
              <div className="flex flex-col gap-4 px-4">
                <div className="self-center my-1">
                  <div className="mb-1">
                    <label htmlFor="AccountId" className=" text-white">
                      Account Id
                    </label>
                  </div>
                  <input
                    id="AccountId"
                    onChange={handleOnChange}
                    type="text"
                    value={formData.AccountId}
                    name="AccountId"
                    className="rounded  p-1 focus:shadow-outline focus:outline-none"
                  />
                </div>
                <div className="self-center my-1">
                  <div className="mb-1">
                    <label htmlFor="AccountName" className=" text-white">
                      Account Name
                    </label>
                  </div>
                  <input
                    id="AccountName"
                    type="text"
                    onChange={handleOnChange}
                    name="AccountName"
                    value={formData.AccountName}
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
              </div>
              <div className="flex flex-col gap-4 px-4">
                <div className="self-center my-1">
                  <div className="mb-1">
                    <label htmlFor="bookingGoal" className=" text-white">
                      Booking Goal
                    </label>
                  </div>
                  <input
                    id="bookingGoal"
                    type="number"
                    value={formData.bookingGoal}
                    onChange={handleOnChange}
                    name="bookingGoal"
                    className="rounded  p-1 focus:shadow-outline focus:outline-none"
                  />
                </div>
                <div className="self-center my-1">
                  <div className="mb-1">
                    <label htmlFor="activationGoal" className=" text-white">
                      Activation Goal
                    </label>
                  </div>
                  <input
                    id="activationGoal"
                    type="number"
                    value={formData.activationGoal}
                    onChange={handleOnChange}
                    name="activationGoal"
                    className="rounded  p-1 focus:shadow-outline focus:outline-none"
                  />
                </div>
                <div className="self-center my-1">
                  <div className="mb-1">
                    <label htmlFor="dashboardDisplay" className="text-white">
                      Dashboard Display
                    </label>
                  </div>
                  <select
                    id="dashboardDisplay"
                    value={formData.dashboardDisplay}
                    onChange={handleOnChange}
                    name="dashboardDisplay"
                    className="rounded p-1  focus:shadow-outline focus:outline-none"
                  >
                    <option value="Both">Both</option>
                    <option value="Booking">Booking</option>
                    <option value="Activation">Activation</option>
                  </select>
                </div>
                <div className="self-center my-1">
                  <div className="mb-1">
                    <label htmlFor="visibleDashboards" className=" text-white">
                      Visible Dashboards
                    </label>
                  </div>
                  <input
                    id="visibleDashboards"
                    type="text"
                    value={formData.visibleDashboards}
                    onChange={handleOnChange}
                    name="visibleDashboards"
                    className="rounded  p-1 focus:shadow-outline focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default CustomerForm;
