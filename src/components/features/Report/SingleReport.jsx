import React from "react";

function SingleReport({ report, handleExporting }) {
  return (
    <tr className="flex  w-full p-1 my-2">
      <td>
        <div className="flex items-center mb-4">
          <input
            id="selection-checkbox"
            type="checkbox"
            value={false}
            onClick={(e) => {
              handleExporting(e.target.checked, report);
            }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </td>
      <td className="text-center w-1/4"> {report.firstName} </td>
      <td className="text-center w-1/4"> {report.lastName} </td>
      <td className="text-center w-1/4"> {report.company} </td>
      <td className="text-center w-1/4"> {report.campaign} </td>
    </tr>
  );
}

export default SingleReport;
