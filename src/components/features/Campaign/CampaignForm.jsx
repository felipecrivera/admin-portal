import React, { useState } from "react";
import Modal from "../../utils/Modal";
function CampaignForm({
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
          campaignName: "",
          description: "",
          type: "",
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
            campaignName: "",
            description: "",
            type: "",
          });
          handleOnCancel();
        }}
        handleOnSave={() => {
          handleOnSave(formData);
        }}
      >
        <form className="flex gap-4 justify-center flex-col ">
          <div className="self-center my-1 ">
            <div className="mb-1">
              <label htmlFor="campaignName" className=" text-white">
                Campaign Name
              </label>
            </div>
            <input
              id="campaignName"
              type="text"
              onChange={handleOnChange}
              name="campaignName"
              value={formData.campaignName}
              className="rounded  p-1 focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="self-center my-1">
            <div className="mb-1">
              <label htmlFor="description" className=" text-white">
                Description
              </label>
            </div>
            <input
              id="description"
              onChange={handleOnChange}
              type="text"
              value={formData.description}
              name="description"
              className="rounded  p-1 focus:shadow-outline focus:outline-none"
            />
          </div>

          <div className="self-center my-1 flex-grow">
            <div className="mb-1">
              <label htmlFor="type" className=" text-white">
                Select Campaign type
              </label>
            </div>
            <select
              id="type"
              onInput={handleOnChange}
              value={formData.type}
              name="type"
              className="rounded w-full  p-1 focus:shadow-outline focus:outline-none"
            >
              <option value=""> Select Campaign type </option>
              <option value="Activate"> Activate </option>
              <option value="Boost"> Boost </option>
            </select>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default CampaignForm;
