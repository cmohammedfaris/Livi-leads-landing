"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  Button,
  Alert,
} from "@material-tailwind/react";
import { XMarkIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import ModalViewTableList from "../TableList/ModalViewTableList";
import { tableHeadModal, tableDataModal } from "../../Test/Data/DummyData";
import { scanDocument } from "@components/Helpers/Pdf/Validation/FileValidator";
import DualTab from "../DualTab/DualTab";
import { Toast } from "@components/Helpers/Custom/Toast/CustomToast";

import { AlertTriangleIcon, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "../SplashScreen/SplashScreen";


const ACCEPTED_FILE_TYPES = ".jpg,.jpeg,.png,.pdf,.doc,.docx";

export default function DataPicker({
  open,
  handleClose,
  data = {},
  onConfirmUpload,
}) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [recentFiles, setRecentFiles] = useState([]);
  const [approvedFiles] = useState([]);

  const actions_Data_recentFiles = [
    { id: 1, label: "View", iconName: "EyeIcon", path: "view" },
    { id: 3, label: "Remove", iconName: "TrashIcon", path: "remove" },
  ];

  const actions_Data_approvedFiles = [
    { id: 1, label: "View", iconName: "EyeIcon", path: "view" },
    {
      id: 2,
      label: "Download",
      iconName: "ArrowDownTrayIcon",
      path: "download",
    },
  ];

  const tableData = activeTab === 0 ? recentFiles : approvedFiles;
  const action_Data =
    activeTab === 0 ? actions_Data_recentFiles : actions_Data_approvedFiles;

  const formatSize = (size) => {
    if (size < 1024) return `${size} B`;
    if (size < 1048576) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / 1048576).toFixed(1)} MB`;
  };

  const createDemoData = useCallback((file, id, status = "Pending") => ({
    id,
    document: file.name,
    size: formatSize(file.size),
    status,
    remarks: "-",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    url: URL.createObjectURL(file),
  }), []);

  const createBackendPayload = useCallback((file, id) => ({
    id,
    document_name: file.name,
    comments: "-",
    accepted_or_rejected_remarks: "-",
    size: formatSize(file.size),
    status: "Pending",
    accepted_or_rejected: "Pending",
    file,
    document_data: data?.id || data?.document_data || null,
  }), [data]);

  const handleConfirmUploadBackend = async () => {
    if (!tableData.length) {
      Toast("No files selected for upload.", "Upload Error", "e");
      return;
    }

    const backendPayloads = selectedFiles.map((item) =>
      item instanceof File ? createBackendPayload(item, Date.now() + "-" + Math.random()) : item
    );

    try {
      setSubmitting(true);
      await onConfirmUpload?.(backendPayloads);

      Toast("Files uploaded successfully!", "Success", "s");
      handleClose();
    } catch (err) {
      Toast("Upload failed. Please try again.", "Error", "e");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateRecentFiles = useCallback((updateArg) => {
    setRecentFiles((prevRecent) => {
      const newRecent = typeof updateArg === "function" ? updateArg(prevRecent) : updateArg;
      const activeIds = newRecent.map((item) => item.id);
      setSelectedFiles((prevSelected) =>
        prevSelected.filter((item) => activeIds.includes(item.id))
      );
      if (newRecent.length === 0) {
        setSelectedFile(null);
      }
      return newRecent;
    });
  }, []);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  }, []);

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);
      try {
        const scanResult = await scanDocument(file);
        setResult(scanResult);

        if (
          scanResult.pdfSecurityIssues.length > 0 ||
          scanResult.suspiciousCommands.length > 0 ||
          scanResult.suspiciousUrls.length > 0
        ) {
          return Toast(
            "The uploaded document has potential security issues.",
            "Vulnerability found",
            "e"
          );
        }

        const uniqueId = Date.now() + "-" + Math.random();
        const newData = createDemoData(file, uniqueId);

        setRecentFiles((prev) => {
          const isDuplicate = prev.some(
            (item) =>
              item.document === newData.document && item.size === newData.size
          );

          if (isDuplicate) {
            Toast("This file is already uploaded.", "Already exist", "e");
            return prev;
          }

          const backendData = createBackendPayload(file, uniqueId);
          setSelectedFiles((prevSelected) => [...prevSelected, backendData]);

          return [newData, ...prev];
        });
      } catch (error) {
        console.error("File scan error:", error);
      }
    }
  }, [data, createDemoData, createBackendPayload]);

  const handleFileChange = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);
      try {
        const scanResult = await scanDocument(file);
        setResult(scanResult);

        if (
          scanResult.pdfSecurityIssues.length > 0 ||
          scanResult.suspiciousCommands.length > 0 ||
          scanResult.suspiciousUrls.length > 0
        ) {
          return Toast(
            "The uploaded document has potential security issues.",
            "Vulnerability found",
            "e"
          );
        }

        const uniqueId = Date.now() + "-" + Math.random();
        const newData = createDemoData(file, uniqueId);

        setRecentFiles((prev) => {
          const isDuplicate = prev.some(
            (item) =>
              item.document === newData.document && item.size === newData.size
          );

          if (isDuplicate) {
            Toast("This file is already uploaded.", "Already exist", "e");
            return prev;
          }

          const backendData = createBackendPayload(file, uniqueId);
          setSelectedFiles((prevSelected) => [...prevSelected, backendData]);

          return [newData, ...prev];
        });
      } catch (error) {
        console.error("File scan error:", error);
      }
    }
  }, [data, createDemoData, createBackendPayload]);

  const handleBrowseClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.value = "";
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <Dialog
      open={open}
      handler={handleClose}
      size="lg"
      className="p-0 rounded-3xl max-h-[80%] top-0 outline-none mb-10"
    >
      <div className="bg-white dark:bg-darksecondary rounded-3xl shadow-lg">
        {/* Header */}
        <div className="bg-[#E6E5F1] dark:bg-darkprimary p-3 pl-5 pr-4 rounded-t-3xl flex justify-between items-center">
          <h3 className="text-textprimary dark:text-white text-lg font-semibold">
            {data["Document Name"] || "Tax Return Form"}
          </h3>

          <XMarkIcon
            onClick={handleClose}
            className="text-textprimary dark:text-white w-7 h-7 p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg cursor-pointer"
          />
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={ACCEPTED_FILE_TYPES}
          className="hidden"
        />

        {/* ---- Upload Section ---- */}
        {!selectedFile && (
          <DialogBody className="p-6">
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-2 transition ${
                dragActive
                  ? "border-indigo-500 bg-white dark:bg-darkprimary"
                  : "border-gray-300 bg-white dark:bg-darksecondary"
              }`}
            >
              <ArrowUpTrayIcon className="w-10 h-10 text-textprimary dark:text-white" />

              <p className="text-textprimary dark:text-white font-medium">
                Choose a file or drag & drop it here
              </p>
              <p className="text-sm text-textsecondary font-medium">
                JPEG, PNG, PDF and Word formats up to 3MB
              </p>
              <Button
                size="sm"
                className="mt-2 bg-gradient-to-br from-primary to-[#531DAB] w-32 rounded-xl h-10 capitalize text-sm outline-none shadow-md hover:shadow-lg transition"
                onClick={handleBrowseClick}
              >
                Browse File
              </Button>
            </div>
          </DialogBody>
        )}

        {/* ---- Table Section ---- */}
        {selectedFile && (
          <div>
            <div className="p-5">
              <DualTab
                Tab1="Recent Files"
                Tab2="Approved Files"
                setActiveTabMain={setActiveTab}
              />
            </div>

            <ModalViewTableList
              hight="max-h-[23rem]"
              tableData={tableData}
              tableHead={tableHeadModal}
              actions_Data={action_Data}
              setUpdatedTableData={handleUpdateRecentFiles}
            />

            <DialogFooter className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-end gap-3">
              {tableData.length > 0 && (
                <Button
                  onClick={handleConfirmUploadBackend}
                  disabled={submitting}
                  className={`capitalize flex font-medium text-sm h-10 items-center justify-center bg-gradient-to-br from-primary to-[#531DAB] ${
                    submitting ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {submitting ? (
                    <>
                      <SplashScreen />
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      {/* <ArrowUpTrayIcon className="w-5 h-5 mr-2" /> */}
                      <span>Submit</span>
                    </>
                  )}
                </Button>
              )}

              <Button
                onClick={handleBrowseClick}
                className="capitalize flex font-medium text-sm h-10 items-center justify-center bg-gradient-to-br from-primary to-[#531DAB]"
              >
                <ArrowUpTrayIcon className="w-5 h-5 mr-2" />
                <span>Upload More</span>
              </Button>
            </DialogFooter>
          </div>
        )}
      </div>

    </Dialog>
  );
}
