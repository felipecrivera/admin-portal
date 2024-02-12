import React from "react";
import { createPortal } from "react-dom";
import { useState } from "react";
import RecordForm from "./RecordForm";
import { useUpdateRecordMutation } from "../../../redux/recordApi";

function SingleRecord({ record }) {
  const [showForm, setShowForm] = useState(false);

  const [updateRecord, { isLoading: isUpdating }] = useUpdateRecordMutation();

  const handleOnCancel = () => {
    setShowForm(false);
  };

  const handleOnSave = async (recordData) => {
    console.log(recordData);
    await updateRecord({ id: recordData._id, record: recordData });
    setShowForm(false);
  };

  const openEditRecordForm = () => {
    setShowForm(true);
  };
  return (
    <>
      {showForm &&
        createPortal(
          <RecordForm
            title="Edit record"
            handleOnCancel={handleOnCancel}
            handleOnSave={handleOnSave}
            record={record}
            isUpdating={isUpdating}
          />,
          document.getElementById("portal")
        )}

      <tr className="flex w-full p-1 my-2">
        <td className="text-center w-1/5"> {record.firstName} </td>
        <td className="text-center w-1/5"> {record.lastName} </td>
        <td className="text-center w-1/5"> {record.company} </td>
        <td className="text-center w-1/5"> {record.campaign} </td>
        <tr className="text-center w-1/5">
          <svg
            className="w-6 h-6 mx-auto  text-[#10113A] cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => openEditRecordForm()}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
            />
          </svg>
        </tr>
      </tr>
    </>
  );
}

export default SingleRecord;
