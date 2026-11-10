"use client";

import React, { useState } from "react";
import {
  Tooltip,
  IconButton,
  Dialog,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ArrowUpTrayIcon,
  EyeIcon,
  PencilSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import * as ActionIcons from "@heroicons/react/24/outline";
import * as Icons from "lucide-react";
import { getStatusClass } from "@components/validation/StatusValidations";
import DocumentsViewModal from "../../../Modal/Documents/DocumentsViewModal";
import DataPicker from "../DataPicker/DataPicker";
import {
  uploadDocumentFiles,
  uploadReturnDocumentFile,
} from "@api/modules/documentsApi";
import { Toast } from "@components/Helpers/Custom/Toast/CustomToast";
import ReturnUploadModal from "../DataPicker/ReturnUploadModal";
import SelectInput from "../SelectInput/SelectInput";
import NormalInput from "../NormalInput/NormalInput";

function DynamicTableView({
  head,
  data,
  isSelf,
  isReturn,
  isReturnEditable = true,
  updateDocumentRow,
  onReturnCommentChange = () => {},
  onReturnDocumentTypeChange = () => {},
  onView,
  onEdit,
}) {
  const [isModal, setIsModal] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [singleData, setSingleData] = useState(null);

  const handleOpen = () => setIsModal(!isModal);

  const actionDataForSelf = [
    { id: 1, label: "View", iconName: "EyeIcon", path: "view" },
  ];
  if (onEdit) {
    actionDataForSelf.push({ 
      id: 2, 
      label: "Edit", 
      iconName: "PencilSquareIcon", 
      path: "edit" 
    });
  }

  const docTypeOptions = [
    { value: "Soft Copy", label: "Soft Copy" },
    { value: "Hard Copy", label: "Hard Copy" },
  ];

  const returnActions = [
    { id: 1, label: "View", iconName: "EyeIcon", path: "view" },
    {
      id: 3,
      label: "Upload",
      iconName: "ArrowUpTrayIcon",
      path: "upload",
    },
  ];
  const actionData = [
    { id: 1, label: "View", iconName: "EyeIcon", path: "view" },
  ];

  if (onEdit) {
    actionData.push({ 
      id: 2, 
      label: "Edit", 
      iconName: "PencilSquareIcon", 
      path: "edit" 
    });
  }

  actionData.push({
    id: 3,
    label: "Upload",
    iconName: "ArrowUpTrayIcon",
    path: "upload",
  });

  const handleAction = (path, row) => {
    switch (path) {
      case "view":
        handleView(row);
        break;
      case "accept":
        handleAccept(row);
        break;
      case "reject":
        handleReject(row);
        break;
      case "download":
        handleDownload(row);
        break;
      case "edit":
        handleEdit(row);
        break;
      case "upload":
        handleUpload(row);
        break;
      default:
        break;
    }
  };

  // 📄 View handler
  const handleView = (row) => {
    if (onView) {
      onView(row);
    } else {
      setSingleData(row);
      handleOpen();
    }
  };
  const handleAccept = (row) => {};
  const handleReject = (row) => {};
  const handleDownload = (row) => {};
  const handleEdit = (row) => {
    if (onEdit) {
      onEdit(row);
    }
  };

  const handleUpload = (row) => {
    setSingleData(row);
    setIsUploadOpen(true);
  };
  const handleFilesUpload = async (filesPayload) => {
    if (!filesPayload?.length) {
      Toast("No files selected for upload.", "Upload Error", "e");
      return { ok: false, message: "No files" };
    }

    try {
      const formData = new FormData();

      const metaList = filesPayload.map((item) => ({
        document_data: item.document_data,
        document_name: item.document_name,
        comments: item.comments || "-",
        size: item.size,
        status: item.status || "Pending",
        is_available: true,
      }));

      formData.append("metadata", JSON.stringify(metaList));
      filesPayload.forEach((item) => formData.append("files", item.file));

      const res = await uploadDocumentFiles(formData);

      if (res?.status === 200) {
        if (res?.data?.success) {
          Toast(res.data.message || "File uploaded!", "Success", "s");

          if (singleData?.id && typeof updateDocumentRow === "function") {
            updateDocumentRow(singleData.id, {
              status: "Submitted",
            });
          }

          return { ok: true, data: res.data.data ?? null };
        } else {
          const msg = res?.data?.message || "Upload rejected by server";
          Toast(msg, "Error", "e");

          return { ok: false, message: msg, errors: res.data?.errors ?? null };
        }
      }

      Toast("Unexpected server response.", "Error", "e");
      return { ok: false, message: "Unexpected server response" };
    } catch (err) {
      if (err?.response) {
        const status = err.response.status;
        const body = err.response.data;
        if (status >= 500) {
          Toast("Server error. Please try again later.", "Error", "e");
        } else {
          Toast(body?.message || `Upload failed (${status}).`, "Error", "e");
        }
        return {
          ok: false,
          message: body?.message ?? `HTTP ${status}`,
          error: body,
        };
      } else {
        Toast("Network error. Check your connection.", "Error", "e");
        return { ok: false, message: "Network error", error: err };
      }
    }
  };

  const handleReturnFilesUpload = async (payload) => {
    try {
      const formData = new FormData();

      formData.append("file", payload.file);
      formData.append("document_name", payload.document_name);
      formData.append("document_data", payload.document_data);
      formData.append("comments", payload.comments || "-");
      formData.append("remarks", payload.remarks || payload.comments || "-");
      formData.append("size", payload.size);
      formData.append("status", payload.status);
      formData.append("is_available", payload.is_available);
      formData.append("file_type", payload.file_type);

      if (payload.from_date) formData.append("from_date", payload.from_date);
      if (payload.to_date) formData.append("to_date", payload.to_date);

      const res = await uploadReturnDocumentFile(formData);

      if (res?.data?.success) {
        Toast("Return file uploaded!", "Success", "s");
        if (payload?.document_data && typeof updateDocumentRow === "function") {
          updateDocumentRow(payload.document_data, {
            return_status: "Submitted",
          });
        }
        return { ok: true, data: res.data.data, message: res.data.message };
      } else {
        Toast(res?.data?.message || "Upload failed.", "Error", "e");

        return {
          ok: false,
          message: res?.data?.message || "Upload failed",
          errors: res?.data?.errors,
        };
      }
    } catch (err) {
      Toast("Unexpected error occurred!", "Error", "e");

      const msg =
        err?.response?.data?.message || err?.message || "Network error";
      return { ok: false, message: msg, error: err };
    }
  };

  // const handleStatusChange = (newStatus) => {
  //   setSingleData((prev) => ({
  //     ...prev,
  //     Status: newStatus, // IMPORTANT: your data uses "Status" not "status"
  //   }));
  // };

  // Helper to render the Actions Menu (ellipsis)
  const RenderActionsMenu = ({ row }) => {
    const viewOnlyAction = [
      { id: 1, label: "View", iconName: "EyeIcon", path: "view" },
    ];

    const rawStatus =
      row.status ?? row.Status ?? row.return_status ?? row.returnStatus ?? "";

    const normalizedStatus =
      typeof rawStatus === "object" &&
      rawStatus !== null &&
      !React.isValidElement(rawStatus)
        ? rawStatus.label || rawStatus.name || rawStatus.status || ""
        : String(rawStatus || "");

    const finalStatus = normalizedStatus.trim().toLowerCase();
    const completedStates = ["completed", "complete"];
    const isCompleted = completedStates.includes(finalStatus);

    const actionsToUse = isCompleted
      ? viewOnlyAction
      : isReturn
      ? isSelf
        ? returnActions
        : [{ id: 1, label: "View", iconName: "EyeIcon", path: "view" }]
      : isSelf
      ? actionDataForSelf
      : actionData;

    return (
      <Tooltip content="Edit Document" placement="top">
        <Menu>
          <MenuHandler>
            <div className="animate-btn rounded-full bg-textprimary outline-none dark:bg-white dark:bg-opacity-10 bg-opacity-10 p-2 hover:shadow-[0_0_4px_#00000040] dark:shadow-[0_0_4px_#ffffff20] cursor-pointer">
              <Icons.EllipsisIcon className="text-textprimary dark:text-white w-5 h-5 font-semibold" />
            </div>
          </MenuHandler>
          <MenuList className="rounded-xl shadow-[5px_1px_4px_#00000040] outline-none dark:bg-darksecondary border-none dark:shadow-[1px_1px_4px_#ffffff20] z-[9999]">
            <div>
              {actionsToUse
                .filter(({ path }) => {
                  if (isCompleted) return path === "view";
                  if (["accepted"].includes(finalStatus)) {
                    return ["view", "download"].includes(path);
                  }
                  return true;
                })
                .map(({ id, label, iconName, path }) => {
                  const IconComponent = ActionIcons[iconName];
                  return (
                    <MenuItem
                      key={id}
                      className="flex items-center gap-3 font-semibold outline-none border-none text-textprimary dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
                      onClick={() => handleAction(path, row)}
                    >
                      {IconComponent && (
                        <IconComponent className="w-5 h-5 text-textprimary dark:text-gray-200 stroke-[2]" />
                      )}
                      {label}
                    </MenuItem>
                  );
                })}
            </div>
          </MenuList>
        </Menu>
      </Tooltip>
    );
  };

  return (
    <div className="mt-6 w-full mb-6">
      {/* -------- Desktop Table View -------- */}
      <div className="hidden lg:block overflow-auto rounded-xl shadow bg-white dark:bg-[#1E1E2A] transition-colors duration-300">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#E9E6F1] dark:bg-[#2A2D3A] border-b border-gray-300 dark:border-gray-700">
              {head.map((title, index) => (
                <th
                  key={index}
                  className="p-4 text-left text-[13px] font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide whitespace-nowrap"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`transition-colors duration-200 ${
                  rowIndex % 2 === 1
                    ? "bg-gray-50 dark:bg-[#252836]"
                    : "bg-white dark:bg-[#1E1E2A]"
                } hover:bg-gray-100 dark:hover:bg-[#323645]`}
              >
                {Object.entries(row)
                  .filter(([key]) => key.toLowerCase() !== "id")
                  .map(([key, value], colIndex) => {
                    const lowerKey = key.toLowerCase();
                    const rowReturnCompleted =
                      (row.return_status || "").toString().toLowerCase() ===
                      "completed";
                    const rowReturnReadOnly =
                      !isReturnEditable || rowReturnCompleted;

                    if (lowerKey === "status") {
                      if (React.isValidElement(value)) {
                        return (
                          <td
                            key={colIndex}
                            className="py-3 px-4 text-center font-medium text-sm"
                          >
                            {value}
                          </td>
                        );
                      }
                      const rawText =
                        typeof value === "object" && value !== null
                          ? value.label || value.name || value.status || "-"
                          : value || "-";
                      const statusText =
                        typeof rawText === "string" && rawText.length
                          ? rawText.charAt(0).toUpperCase() + rawText.slice(1)
                          : String(rawText);

                      return (
                        <td
                          key={colIndex}
                          className="py-3 px-4 text-center font-medium text-sm"
                        >
                          <span
                            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                              statusText
                            )}`}
                          >
                            {statusText}
                          </span>
                        </td>
                      );
                    }

                    if (lowerKey === "actions") {
                      return (
                        <td
                          key={colIndex}
                          className="py-3 px-4 text-center whitespace-nowrap"
                        >
                          <div className="flex items-center justify-center">
                            <RenderActionsMenu row={row} />
                          </div>
                        </td>
                      );
                    }

                    if (isReturn && lowerKey === "comments") {
                      if (rowReturnReadOnly) {
                        return (
                          <td
                            key={colIndex}
                            className="py-3 px-4 w-96 text-sm text-textprimary dark:text-white"
                          >
                            {value === "-" || value === null ? "-" : value}
                          </td>
                        );
                      }
                      return (
                        <td key={colIndex} className="py-3 px-4 w-96">
                          <NormalInput
                            placeholder="Add return comments..."
                            value={value === "-" || value === null ? "" : value}
                            onChange={(e) =>
                              typeof onReturnCommentChange === "function" &&
                              onReturnCommentChange(row.id, e.target.value)
                            }
                          />
                        </td>
                      );
                    }

                    if (isReturn && lowerKey === "document type") {
                      if (rowReturnReadOnly) {
                        return (
                          <td key={colIndex} className="py-3 px-4 text-sm">
                            {value === "-" || value === null ? "-" : value}
                          </td>
                        );
                      }
                      return (
                        <td key={colIndex} className="py-3 px-4">
                          <SelectInput
                            value={value === "-" || value === null ? "" : value}
                            onChange={(e) =>
                              typeof onReturnDocumentTypeChange ===
                                "function" &&
                              onReturnDocumentTypeChange(row.id, e.target.value)
                            }
                            options={docTypeOptions}
                            placeholder="Select your Document Type"
                          />
                        </td>
                      );
                    }

                    return (
                      <td
                        key={colIndex}
                        className="py-3 px-4 text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words"
                      >
                        {typeof value === "string" && value.length > 85
                          ? value.slice(0, 85) + "..."
                          : value}
                      </td>
                    );
                  })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* -------- Mobile Card View -------- */}
      <div className="lg:hidden flex flex-col gap-4">
        {data.map((row, rowIndex) => {
          // Identify primary title (usually Document Name) and Status
          const rowEntries = Object.entries(row).filter(
            ([k]) => k.toLowerCase() !== "id" && k.toLowerCase() !== "sl no"
          );
          const firstEntry = rowEntries.find(
            ([k]) => k.toLowerCase() === "document name"
          ) || rowEntries[0];
          const statusEntry = rowEntries.find(([k]) => k.toLowerCase() === "status");

          return (
            <div
              key={rowIndex}
              className="rounded-2xl border border-[#DEDFEE] dark:border-gray-800 bg-white dark:bg-[#1E1E2A] p-5 shadow-sm flex flex-col gap-5"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-[#9397BB] dark:text-gray-500 uppercase tracking-widest">
                    {firstEntry?.[0] || "Details"}
                  </span>
                  <h4 className="text-base font-bold text-[#212844] dark:text-white line-clamp-2">
                    {String(firstEntry?.[1] || "-")}
                  </h4>
                </div>
                <RenderActionsMenu row={row} />
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
                {rowEntries
                  .filter(
                    ([k]) =>
                      k !== firstEntry?.[0] &&
                      k.toLowerCase() !== "actions" &&
                      k.toLowerCase() !== "status"
                  )
                  .map(([key, value], idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-[#9397BB] dark:text-gray-500 uppercase tracking-wider">
                        {key}
                      </span>
                      <span className="text-sm font-semibold text-[#293056] dark:text-gray-300 break-words">
                        {typeof value === "string" && value.length > 40
                          ? value.slice(0, 40) + "..."
                          : String(value ?? "-")}
                      </span>
                    </div>
                  ))}
              </div>

              {statusEntry && (
                <div className="flex items-center justify-between bg-gray-50 dark:bg-black/20 rounded-xl p-3">
                  <span className="text-xs font-bold text-[#9397BB] dark:text-gray-500 uppercase">
                    Current Status
                  </span>
                  {React.isValidElement(statusEntry[1]) ? (
                    statusEntry[1]
                  ) : (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
                        typeof statusEntry[1] === "object"
                          ? statusEntry[1]?.label || statusEntry[1]?.status
                          : String(statusEntry[1])
                      )}`}
                    >
                      {String(
                        typeof statusEntry[1] === "object"
                          ? statusEntry[1]?.label || statusEntry[1]?.status
                          : statusEntry[1]
                      )}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* ✅ View Modal */}
      <Dialog
        open={isModal}
        handler={handleOpen}
        size="lg"
        className="bg-white dark:bg-darksecondary rounded-3xl shadow-lg outline-none"
      >
        <DocumentsViewModal
          data={singleData}
          onClose={() => setIsModal(false)}
          isSelf={isSelf}
          isReturn={isReturn}
          handleStatusChange={(newStatus) => {
            // 1) update modal header (local)
            setSingleData((prev) =>
              prev ? { ...prev, Status: newStatus } : prev
            );

            // 2) update canonical parent docsData via updateDocumentRow
            // For normal flow update `status`, for return flow update `return_status`
            if (typeof updateDocumentRow === "function" && singleData?.id) {
              if (isReturn) {
                updateDocumentRow(singleData.id, { return_status: newStatus });
              } else {
                updateDocumentRow(singleData.id, { status: newStatus });
              }
            }
          }}
        />
      </Dialog>
      {/* ✅ Upload Modal (DataPicker) */}

      <Dialog
        open={isUploadOpen}
        handler={() => setIsUploadOpen(false)}
        size="md"
        className="p-0 rounded-3xl max-h-[80%] top-0 outline-none mb-10"
      >
        {isReturn ? (
          <ReturnUploadModal
            data={singleData}
            onClose={() => setIsUploadOpen(false)}
            onConfirmUpload={handleReturnFilesUpload}
          />
        ) : (
          <DataPicker
            open={isUploadOpen}
            handleClose={() => setIsUploadOpen(false)}
            data={singleData}
            onConfirmUpload={handleFilesUpload}
          />
        )}
      </Dialog>
    </div>
  );
}

export default DynamicTableView;
