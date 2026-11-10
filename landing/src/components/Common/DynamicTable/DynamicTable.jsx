"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import NormalInput from "../NormalInput/NormalInput";
import SelectInput from "../SelectInput/SelectInput";
import CalendarComponent from "../Calendar/Calendar";

// Dynamic Table Head Component
const DynamicTableHead = ({ columns }) => {
  return (
    <thead className="border-blue-gray-100 dark:border-primary bg-[#E9E6F1] dark:bg-[#4E525D] p-5 text-nowrap capitalize">
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            className="leading-none text-textsecondprimary dark:text-white font-medium px-6 py-3 text-left  tracking-wider"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

function DocumentTableComponent({
  rowsData,
  setRowsData,
  docTypesList,
  documentNameList,
}) {
  const [isCalender, setIsCalender] = useState(false);

  // Define table columns
  const tableColumns = [
    "SI No.",
    "Document Name",
    "Comments",
    "Document Type",
    "Due Date",
    "Action",
    "",
  ];

  // Add new row
  const addRow = () => {
    const newRow = {
      id: rowsData.length + 1,
      docName: "",
      comments: "",
      docType: "",
      dueDate: "",
      referenceType: "",
      documentNumber: "",
    };
    setRowsData((prevRows) => [...prevRows, newRow]);
  };

  // Delete row and re-index IDs
  const deleteRow = (id) => {
    setRowsData((prevRows) => {
      const filtered = prevRows.filter((row) => row.id !== id);
      // reassign sequential ids (1,2,3,...)
      return filtered.map((row, index) => ({ ...row, id: index + 1 }));
    });
  };

  // Update row field
  const updateRow = (id, field, value) => {
    setRowsData((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row)),
    );
  };

  return (
    <div className="w-full h-full ">
      <br />
      <h2 className="font-medium pb-3 dark:text-textsecondary text-nowrap text-md">
        Document Details
      </h2>
      <div className="w-full shadow rounded-xl hidescroll h-full overflow-x-auto border dark:border-primary border-gray-100">
        <table className="w-full min-w-max rounded-xl h-full">
          <DynamicTableHead columns={tableColumns} />
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {rowsData.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-50 dark:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white text-nowrap capitalize">
                  {row.id}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-[180px]">
                    <SelectInput
                      height="h-8"
                      text="text-sm"
                      value={row.docName}
                      rounded="rounded-md"
                      options={documentNameList}
                      onChange={(e) =>
                        updateRow(row.id, "docName", e.target.value)
                      }
                      placeholder="Type or choose..."
                    />
                  </div>
                </td>

                {/* Comments */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-[200px]">
                    <NormalInput
                      height="h-8"
                      text="text-sm"
                      name="comments"
                      rounded="rounded-md"
                      placeholder="Enter Comments"
                      value={row.comments}
                      onChange={(e) =>
                        updateRow(row.id, "comments", e.target.value)
                      }
                    />
                  </div>
                </td>

                {/* Document Type */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-[180px]">
                    <SelectInput
                      height="h-8"
                      text="text-sm"
                      value={row.docType}
                      rounded="rounded-md"
                      onChange={(e) =>
                        updateRow(row.id, "docType", e.target.value)
                      }
                      options={docTypesList}
                      placeholder="Choose..."
                    />
                  </div>
                </td>
                {/* Due Date */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className="flex items-center gap-2 w-[180px]"
                    onClick={() => setIsCalender(!isCalender)}
                  >
                    <NormalInput
                      height="h-8"
                      text="text-sm"
                      name="dueDate"
                      rounded="rounded-md"
                      placeholder="DD/MM/YYYY | 00:00"
                      value={row.dueDate}
                      onChange={(e) =>
                        updateRow(row.id, "dueDate", e.target.value)
                      }
                    />
                    {isCalender && index === rowsData.length - 1 && (
                      <CalendarComponent
                        setSelectedDate={(date) =>
                          updateRow(row.id, "dueDate", date)
                        }
                      />
                    )}
                  </div>
                </td>

                {/* Action */}
                <div className=" px-6 py-4 whitespace-nowrap">
                  {index === rowsData.length - 1 && (
                    <button
                      onClick={() => {
                        setIsCalender(false);
                        addRow();
                      }}
                      // onClick={addRow}
                      className="flex items-center text-nowrap gap-2 px-4 py-2 text-sm text-primary  hover:bg-blue-50 dark:hover:bg-gray-900/20 rounded-md transition-colors"
                    >
                      <Plus size={16} />
                      Add Row
                    </button>
                  )}
                </div>
                <td className="px-6 py-4 whitespace-nowrap">
                  {rowsData.length > 1 && (
                    <button
                      onClick={() => {
                        deleteRow(row.id);
                        setIsCalender(false);
                      }}
                      className="flex items-center text-nowrap  gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50  dark:hover:bg-red-900/20 rounded-md transition-colors"
                    >
                      <Minus size={16} />
                      Remove
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentTableComponent;
