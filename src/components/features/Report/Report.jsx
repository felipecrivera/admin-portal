import React, { useState, useEffect, useRef, useCallback } from "react";
import SingleReport from "./SingleReport";
import Loading from "../../utils/Loading";
import { useSearchRecordsQuery } from "../../../redux/reportApi";
import { utils, writeFile } from "xlsx";
import { useSearchParams } from "react-router-dom";

function Report(props) {
  const [searchParams] = useSearchParams();
  const campaignId = searchParams.get("campaign");
  const searchTermRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const [searchQuery, setSearchQuery] = useState(
    campaignId ? "campaign=" + campaignId : ""
  );
  const [selected, setSelected] = useState(['65d8a5e45b855336e9ac5d1c']);
  const { data: records, isLoading } = useSearchRecordsQuery(searchQuery);

  const search = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    if (searchTermRef.current.value)
      urlParams.set("searchTerm", searchTermRef.current.value);

    if (startDateRef.current.value)
      urlParams.set("startDate", startDateRef.current.value);

    if (endDateRef.current.value)
      urlParams.set("endDate", endDateRef.current.value);

    if (campaignId) urlParams.set("campaign", campaignId);

    const urlSearchQuery = urlParams.toString();

    setSearchQuery(urlSearchQuery);
  };

    const exportToCSV = () => {
      var sel = records.filter(e => selected.includes(e._id))
      const worksheet = utils.json_to_sheet(sel);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, "Sheet1");
      writeFile(workbook, "Report.xlsx");
    };


  const handleExporting = (checked, record_id) => {
    if (checked) {
      setSelected([...selected, record_id]);
    } else {
      setSelected(selected.filter((e) => e != record_id))
    }
  };
  const toggleAll = (checked) => {
    if (checked) {
      setSelected(records.map((e) => e._id))
    } else {
      setSelected([])
    }
  }
  return (
    <main
      className={`relative mx-2 z-20 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-3xl rounded-t-2xl bg-slate-50 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16 `}
      style={{ minHeight: "100vh" }}
    >
      <div className="w-full flex justify-around my-4">
        <form onSubmit={search} className="flex gap-4 flex-col md:flex-row">
          <div className="flex items-center gap-2">
            <input
              ref={searchTermRef}
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="date"
              ref={startDateRef}
              id="startDate"
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="date"
              ref={endDateRef}
              id="endDate"
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-slate-700 text-white p-2 px-3 rounded-lg uppercase hover:opacity-95">
              Search
            </button>
            <button
              type="button"
              onClick={exportToCSV}
              className="bg-slate-700 text-white p-2 px-3 rounded-lg uppercase hover:opacity-95"
            >
              Export to CSV
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {isLoading && <Loading />}

                {!isLoading &&
                  records &&
                  (records.length > 0 ? (
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr className="">
                          <th scope="col" className="px-6 py-4">
                            <input
                              id="selection-checkbox"
                              type="checkbox"
                              onClick={(e) => {
                                toggleAll(e.target.checked)
                              }}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Account Id
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Account Name
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Activation Date
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Campaign
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Company
                          </th>
                          <th scope="col" className="px-6 py-4">
                            First name
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Last name
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Title
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Phone
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Address
                          </th>
                          <th scope="col" className="px-6 py-4">
                            City
                          </th>
                          <th scope="col" className="px-6 py-4">
                            State
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Zip Code
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Outcome
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Notes
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {records.map((item) => {
                          return (
                            <SingleReport
                              handleExporting={handleExporting}
                              key={item._id}
                              checked={selected.includes(item._id)}
                              report={item}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <p className="font-semibold mx-auto my-2">
                      No reports available
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Report;
