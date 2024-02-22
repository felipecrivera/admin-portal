import React, { useState } from "react";
import Modal from "../../utils/Modal";
import { useGetCustomersQuery } from "../../../redux/customerApi";
function UserForm({ record, title, handleOnSave, isUpdating, handleOnCancel }) {
  const { data: customers, isLoading } = useGetCustomersQuery();

  const [formData, setFormData] = useState(
    record
      ? record
      : {
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          customer: "",
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
            title: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            customer: "",
          });
          handleOnCancel();
        }}
        handleOnSave={() => {
          handleOnSave(formData);
        }}
      >
        <form className="flex gap-4 justify-center flex-col ">
          {title == "Create user" ? (
            <div className="self-center my-1 flex-grow">
              <div className="mb-1">
                <label htmlFor="customer" className=" text-white">
                  Select Customer
                </label>
              </div>
              <select
                id="customer"
                type="text"
                onInput={handleOnChange}
                value={formData.customer}
                name="customer"
                className="rounded w-full  p-1 focus:shadow-outline focus:outline-none"
              >
                <option value=""> Select Customer </option>
                {customers &&
                  customers.map((item) => {
                    return (
                      <option key={item._id} value={item._id}>
                        {item.AccountName}
                      </option>
                    );
                  })}
              </select>
            </div>
          ) : (
            <></>
          )}

          <div className="self-center my-1 ">
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

          <div className="self-center my-1">
            <div className="mb-1">
              <label htmlFor="phoneNumber" className=" text-white">
                Phone Number
              </label>
            </div>
            <input
              id="phoneNumber"
              type="text"
              onChange={handleOnChange}
              name="phoneNumber"
              value={formData.phoneNumber}
              className="rounded  p-1 focus:shadow-outline focus:outline-none"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default UserForm;
