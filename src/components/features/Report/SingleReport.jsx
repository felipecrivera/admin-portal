import React from "react";

function SingleReport({ report, handleExporting }) {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="cursor-pointer whitespace-nowrap px-6 py-4">
          <input
            id="selection-checkbox"
            type="checkbox"
            value={false}
            onClick={(e) => {
              handleExporting(e.target.checked, report);
            }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
      </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.activationDate} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.campaign} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.company} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.firstName} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.lastName} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.title} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.email} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.phone} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.address} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.city} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.state} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.zipCode} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.outCome} </td>
      <td className="cursor-pointer whitespace-nowrap px-6 py-4"> {report.notes} </td>
    </tr>
  );
}

export default SingleReport;
