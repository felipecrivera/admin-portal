import React, { useEffect, useRef, useState } from "react";
import SingleRecord from "./SingleRecord";
import { createPortal } from "react-dom";
import RecordForm from "./RecordForm";
import { read, utils } from "xlsx";
import {
  recordApi,
  useCreateRecordMutation,
} from "../../../redux/recordApi.js";
import Loading from "../../utils/Loading.jsx";

function Record(props) {
  const fileRef = useRef();

  const [showForm, setShowForm] = useState(false);

  const { data: records, error, isLoading } = recordApi.useGetRecordQuery();
  const [createRecord, { isLoading: isUpdating }] = useCreateRecordMutation();

  const onCreateRecordTap = () => {
    setShowForm(true);
  };

  const handleParse = (e) => {
    const csvFile = e.target.files[0];

    if (csvFile) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          console.log(rows);
          await createRecord(rows);
        }
      };
      reader.readAsArrayBuffer(csvFile);
    }
  };

  const handleOnCancel = () => {
    setShowForm(false);
  };

  const handleOnSave = async (formData) => {
    const rows = [formData];

    await createRecord(rows);

    setShowForm(false);
  };

  return (
    <>
      {showForm &&
        createPortal(
          <RecordForm
            title="Create record"
            handleOnCancel={handleOnCancel}
            handleOnSave={handleOnSave}
            isUpdating={isUpdating}
          />,
          document.getElementById("portal")
        )}
      <main
        className={`relative z-20 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-3xl rounded-t-2xl bg-slate-50 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16 `}
      >
        <div className="hidden">
          <input
            hidden
            ref={fileRef}
            onChange={handleParse}
            accept=".csv, .xlsx"
            type="file"
          />
        </div>
        <div className="w-full flex justify-end ">
          <button
            onClick={onCreateRecordTap}
            className="p-2 mx-2 bg-[#10113A] text-white rounded"
          >
            Create record
          </button>
          <button
            onClick={() => {
              fileRef?.current?.click();
            }}
            className="p-2 mx-2 bg-[#10113A] text-white rounded"
          >
            Upload CSV
          </button>
        </div>

        <div className="w-full flex flex-col ">
          {isLoading && <Loading />}
          {error && !isLoading && <p> {error.toString()}</p>}

          {!isLoading &&
            !error &&
            records &&
            (records.length > 0 ? (
              records.map((item) => {
                return <SingleRecord key={item._id} record={item} />;
              })
            ) : (
              <p className="font-semibold mx-auto my-2">No records available</p>
            ))}
        </div>
      </main>
    </>
  );
}

export default Record;
