import React, { useState } from "react";
import Modal from "../../utils/Modal";

function CustomerForm({
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
          firstName: "",
          lastName: "",
          email: "",
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
            firstName: "",
            lastName: "",
            email: "",
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
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default CustomerForm;
