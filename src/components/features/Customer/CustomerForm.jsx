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
    firstName: "",
    lastName: "",
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

  // Function to render form inputs dynamically based on schema keys
  const renderFormInputs = () => {
    const schemaKeys = Object.keys(formData);
    return schemaKeys.map((key) => (
      <div className="w-[40%] my-1" key={key}>
        <div className="mb-1">
          <label htmlFor={key} className="text-white">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        </div>
        <input
          id={key}
          type={typeof formData[key] === "number" ? "number" : "text"} // Adjust input type dynamically
          value={formData[key]}
          onChange={handleOnChange}
          name={key}
          className="p-1 rounded focus:shadow-outline focus:outline-none"
        />
      </div>
    ));
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
            firstName: "",
            lastName: "",
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
            {renderFormInputs()}
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default CustomerForm;
