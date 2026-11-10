"use client";

import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import { getStatusClass } from "@components/validation/StatusValidations";
import {
  Dialog,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import * as ActionIcons from "@heroicons/react/24/outline";
import * as Icons from "lucide-react";
import PdfReader from "@components/Helpers/Pdf/Reader/PdfReader";
import ImageReader from "@components/Helpers/Image/Reader/ImageReader";
import ApproveModal from "../Modal/ApproveModal";
import RejectModal from "../Modal/RejectModal";
import { actionOnDocumentFile } from "@api/modules/documentsApi";
import { Toast } from "@components/Helpers/Custom/Toast/CustomToast";

const ModalViewTableList = ({
  tableHead,
  tableData,
  actions_Data,
  hight = "max-h-[calc(100svh-18rem)]",
  setUpdatedTableData,
  isReturn,
  handleStatusChange,
}) => {
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [pendingFile, setPendingFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpenApprove = () => setApproveOpen(!approveOpen);
  const handleOpenReject = () => setRejectOpen(!rejectOpen);

  const [fileViewer, setFileViewer] = useState({
    open: false,
    type: "",
    url: "",
  });

  const handleActionFile = (row, path) => {
    if (path === "view") {
      handleOpenFile(row);
    }
    if (path === "download") {
      const link = document.createElement("a");
      link.href = row.url;
      link.download = row.document;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    if (path === "accept") {
      setPendingFile(row);
      setApproveOpen(true);
    }
    if (path === "reject") {
      setPendingFile(row);
      setRejectOpen(true);
    }
    if (path === "remove") {
      const updatedData = tableData.filter((item) => item.id !== row.id);
      setUpdatedTableData(updatedData);
    }
  };

  const handleApprove = async (uniqueNumber) => {
    if (!pendingFile) return;
    setLoading(true);
    try {
      const res = await actionOnDocumentFile(pendingFile.id, "approved", {
        remarks: uniqueNumber,
      }, isReturn);

      if (res?.data?.success) {
        Toast("Document approved successfully!", "Success", "s");
        setApproveOpen(false);

        // Update local state functionally to preserve other files
        setUpdatedTableData((prev) =>
          prev.map((item) =>
            item.id === pendingFile.id
              ? { ...item, status: "Approved", remarks: uniqueNumber }
              : item
          )
        );

        // Update overall document status if applicable
        if (typeof handleStatusChange === "function") {
          handleStatusChange("Accepted");
        }
      } else {
        Toast(res?.data?.message || "Failed to approve.", "Error", "e");
      }
    } catch (err) {
      Toast(
        err?.response?.data?.message || "Something went wrong!",
        "Error",
        "e"
      );
    } finally {
      setLoading(false);
      setPendingFile(null);
    }
  };

  const handleReject = async (reason) => {
    if (!pendingFile) return;
    setLoading(true);
    try {
      const res = await actionOnDocumentFile(pendingFile.id, "rejected", {
        remarks: reason,
      }, isReturn);

      if (res?.data?.success) {
        Toast("Document rejected.", "Success", "s");
        setRejectOpen(false);

        // Update local state functionally to preserve other files
        setUpdatedTableData((prev) =>
          prev.map((item) =>
            item.id === pendingFile.id
              ? { ...item, status: "Rejected", remarks: reason }
              : item
          )
        );

        // Update overall document status if applicable
        if (typeof handleStatusChange === "function") {
          handleStatusChange("Rejected");
        }
      } else {
        Toast(res?.data?.message || "Failed to reject.", "Error", "e");
      }
    } catch (err) {
      Toast(
        err?.response?.data?.message || "Something went wrong!",
        "Error",
        "e"
      );
    } finally {
      setLoading(false);
      setPendingFile(null);
    }
  };

  const handleOpenFile = (row) => {
    const extension = row.document.split(".").pop().toLowerCase();
    setPendingFile(row);

    if (extension === "pdf") {
      setFileViewer({
        open: true,
        type: "pdf",
        url: row.url,
        name: row.document,
      });
    } else if (["png", "jpg", "jpeg", "gif"].includes(extension)) {
      setFileViewer({
        open: true, 
        type: "image", 
        url: row.url,
        name: row.document,
      });
    } else {
      // Unsupported file type
    }
  };

  return (
    <div
      className={`${hight} hidescroll overflow-scroll w-full mt-4 bg-transparent rounded-b-3xl`}
    >
      <div className="lg:block hidden">
        <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-100 overflow-y-auto">
          {/* ---------- Table Head ---------- */}
          <thead className="bg-[#E6E5F1] dark:bg-[#2A2D3A] border-y border-[#DEDFEE] dark:border-gray-700">
            <tr>
              {tableHead.map((head, index) => (
                <th
                  key={index}
                  className="px-5 py-3 text-nowrap text-[#212844] dark:text-gray-200 font-lato font-bold text-sm uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          {/* ---------- Table Body ---------- */}
          <tbody className="bg-white dark:bg-[#1E1E2A] divide-y divide-[#DEDFEE] dark:divide-gray-700">
            {tableData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-white/5"
              >
                {/* Document Column */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    {row.document?.toLowerCase().endsWith(".pdf") && (
                      <div className="w-6 h-6 shrink-0">
                        <Icons.FileText className="w-full h-full text-red-500" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span
                        className="text-[#212844] dark:text-white font-lato font-semibold text-sm truncate max-w-[200px]"
                        title={row.document || ""}
                      >
                        {row.document || "Unnamed Document"}
                      </span>
                      <span className="text-[#9397BB] font-inter text-[10px] mt-1">
                        {row.date} | {row.time} • {row.size}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Status Column */}
                <td className="px-5 py-4 whitespace-nowrap text-start">
                  <span
                    className={`px-2 py-1 rounded text-[10px] font-lato ${getStatusClass(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>

                {/* Remarks Column */}
                <td className="px-5 py-4 text-[#9397BB] font-lato text-xs">
                  {row.remarks}
                </td>

                {/* Action Column */}
                <td className="px-5 py-4 whitespace-nowrap text-start">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenFile(row)}
                      className="text-[#004EFD] font-lato font-medium text-xs hover:underline outline-none bg-transparent border-none cursor-pointer"
                    >
                      View
                    </button>

                    {/* Desktop Action Menu */}
                    <Menu>
                      <MenuHandler>
                        <div className="rounded-full bg-textprimary/10 dark:bg-white/10 p-1 hover:shadow cursor-pointer">
                          <Icons.EllipsisVertical className="text-textprimary dark:text-white w-4 h-4" />
                        </div>
                      </MenuHandler>
                      <MenuList className="rounded-xl shadow-[5px_1px_4px_#00000040] outline-none dark:bg-darksecondary border-none dark:shadow-[1px_1px_4px_#ffffff20] z-[9999] ">
                        {actions_Data
                          .filter(({ path }) => {
                            const status = row.status?.toLowerCase();
                            // If file already has a final state, hide the action buttons
                            if (["approved", "rejected", "accepted"].includes(status)) {
                              return !["accept", "reject"].includes(path);
                            }
                            return true;
                          })
                          .map(({ id, label, iconName, path }) => {
                            const IconComponent = ActionIcons[iconName];
                            return (
                              <MenuItem
                                key={id}
                                className="flex items-center gap-3 font-semibold text-textprimary dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
                                onClick={() => handleActionFile(row, path)}
                              >
                                {IconComponent && (
                                  <IconComponent className="w-5 h-5 text-textprimary dark:text-gray-200" />
                                )}
                                {label}
                              </MenuItem>
                            );
                          })}
                      </MenuList>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden block">
        <div className="p-5 w-full">
          {tableData.map((row, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-[#1E1E2A] mb-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:shadow-md"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3
                    className="font-semibold text-base truncate max-w-[220px]"
                    title={row.document || ""}
                  >
                    {row.document?.length > 30
                      ? row.document.slice(0, 30) + "..."
                      : row.document || "Unnamed Document"}
                  </h3>
                  <p className="text-xs text-textsecondary">
                    {row.date} | {row.time}
                  </p>
                </div>

                {/* Action Menu */}
                <Menu>
                  <MenuHandler>
                    <div className="rounded-full bg-textprimary/10 dark:bg-white/10 p-1 hover:shadow cursor-pointer">
                      <Icons.EllipsisVertical className="text-textprimary dark:text-white w-5 h-5" />
                    </div>
                  </MenuHandler>
                  <MenuList className="rounded-xl shadow-[5px_1px_4px_#00000040] outline-none dark:bg-darksecondary border-none dark:shadow-[1px_1px_4px_#ffffff20] z-[9999] ">
                    {actions_Data
                      .filter(({ path }) => {
                        const status = row.status?.toLowerCase();
                        if (
                          ["approved", "rejected", "accepted"].includes(status)
                        ) {
                          return !["accept", "reject"].includes(path);
                        }
                        return true;
                      })
                      .map(({ id, label, iconName, path }) => {
                        const IconComponent = ActionIcons[iconName];
                        return (
                          <MenuItem
                            key={id}
                            className="flex items-center gap-3 font-semibold text-textprimary dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
                            onClick={() => handleActionFile(row, path)}
                          >
                            {IconComponent && (
                              <IconComponent className="w-5 h-5 text-textprimary dark:text-gray-200" />
                            )}
                            {label}
                          </MenuItem>
                        );
                      })}
                  </MenuList>
                </Menu>
              </div>

              {/* Card Content */}
              <div className="space-y-2 text-sm">
                {Object.keys(row).map((key) => {
                  if (["document", "date", "time", "url", "id"].includes(key))
                    return null;
                  const value = row[key];
                  return (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400 capitalize">
                        {key.replace(/_/g, " ")}
                      </span>

                      {key === "status" ? (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                            value,
                          )}`}
                        >
                          {value}
                        </span>
                      ) : key === "size" ? (
                        <span className="px-3 py-1 text-xs border border-gray-400 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-[#2A2D3A] text-gray-700 dark:text-gray-300">
                          {value}
                        </span>
                      ) : (
                        <span className="text-gray-700 dark:text-gray-200">
                          {value}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Footer ---------- */}
      <div className="px-6 py-4 border-t border-[#DEDFEE] dark:border-gray-700 flex justify-end">
        <span className="text-[#9397BB] font-inter text-sm">
          {tableData.length} item{tableData.length !== 1 && "s"}
        </span>
      </div>

      {fileViewer.type === "pdf" && (
        <PdfReader
          open={fileViewer.open}
          onClose={() => setFileViewer({ ...fileViewer, open: false })}
          fileUrl={fileViewer.url}
          fileName={fileViewer.name}
          onAccept={
            actions_Data.some((a) => a.path === "accept") &&
            !["approved", "rejected", "accepted"].includes(
              pendingFile?.status?.toLowerCase()
            )
              ? () => setApproveOpen(true)
              : undefined
          }
          onReject={
            actions_Data.some((a) => a.path === "reject") &&
            !["approved", "rejected", "accepted"].includes(
              pendingFile?.status?.toLowerCase()
            )
              ? () => setRejectOpen(true)
              : undefined
          }
        />
      )}

      {fileViewer.type === "image" && (
        <ImageReader
          open={fileViewer.open}
          onClose={() => setFileViewer({ ...fileViewer, open: false })}
          imageUrl={fileViewer.url}
          fileName={fileViewer.name}
          onAccept={
            actions_Data.some((a) => a.path === "accept") &&
            !["approved", "rejected", "accepted"].includes(
              pendingFile?.status?.toLowerCase()
            )
              ? () => setApproveOpen(true)
              : undefined
          }
          onReject={
            actions_Data.some((a) => a.path === "reject") &&
            !["approved", "rejected", "accepted"].includes(
              pendingFile?.status?.toLowerCase()
            )
              ? () => setRejectOpen(true)
              : undefined
          }
        />
      )}
      <Dialog
        open={approveOpen}
        handler={handleOpenApprove}
        size="xs"
        className="bg-white dark:bg-darksecondary rounded-3xl shadow-lg outline-none"
      >
        <ApproveModal
          onClose={() => setApproveOpen(false)}
          onApprove={handleApprove}
        />
      </Dialog>
      <Dialog
        open={rejectOpen}
        handler={handleOpenReject}
        size="xs"
        className="bg-white dark:bg-darksecondary rounded-3xl shadow-lg outline-none"
      >
        <RejectModal
          onClose={() => setRejectOpen(false)}
          onReject={handleReject}
        />
      </Dialog>
    </div>
  );
};

export default ModalViewTableList;
