"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Printer,
  Maximize2,
  X,
  Minus,
  Plus,
} from "lucide-react";

export default function PdfReader({
  open,
  onClose,
  fileUrl,
  fileName,
  onAccept,
  onReject,
}) {
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef(null);

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setZoom(100);
      setIsFullscreen(false);
    }
  }, [open]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (modalRef.current?.requestFullscreen) {
        modalRef.current.requestFullscreen();
      } else if (modalRef.current?.webkitRequestFullscreen) {
        modalRef.current.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 50));

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center py-10"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="w-[842px] h-[768px] max-w-[95vw] max-h-[90vh] flex flex-col bg-[#525659] rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Figma Styling */}
        <div className="bg-[#323639] h-[56px] px-5 flex justify-between items-center shrink-0 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-3 flex-1">
            <h3 className="text-white font-inter font-medium text-base truncate max-w-[200px]" title={fileName}>
              {fileName || "PDF Document"}
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-1 justify-center">
             {/* Page Control */}
             <div className="flex items-center gap-2 px-6">
                <div className="bg-[#191B1C] w-6 h-6 flex items-center justify-center text-white text-xs font-medium">1</div>
                <span className="text-white text-sm">/</span>
                <span className="text-white text-sm">1</span>
             </div>

             <div className="w-[1px] h-6 bg-[#BDBDC7] opacity-50 mx-2"></div>

             {/* Zoom Control */}
             <div className="flex items-center gap-4 px-6">
                <Minus onClick={handleZoomOut} className="w-5 h-5 text-white cursor-pointer hover:opacity-80" />
                <div className="bg-[#191B1C] px-3 h-6 flex items-center justify-center text-white text-xs font-medium min-w-[50px]">
                  {zoom}%
                </div>
                <Plus onClick={handleZoomIn} className="w-5 h-5 text-white cursor-pointer hover:opacity-80" />
             </div>

             <div className="w-[1px] h-6 bg-[#BDBDC7] opacity-50 mx-2"></div>

             {/* Mode / Rotate */}
             <div className="flex items-center gap-4 px-6">
                <Maximize2
                  onClick={toggleFullscreen}
                  className="w-5 h-5 text-white cursor-pointer hover:opacity-80"
                />
                <RotateCw onClick={() => {}} className="w-5 h-5 text-white cursor-pointer hover:opacity-80" />
             </div>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <Download
              onClick={() => {
                const link = document.createElement("a");
                link.href = fileUrl;
                link.download = fileName || "document.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-6 h-6 text-white cursor-pointer hover:bg-white/10 p-1 rounded transition-colors"
            />
            <Printer
              onClick={() => {
                const win = window.open(fileUrl, "_blank");
                win.print();
              }}
              className="w-6 h-6 text-white cursor-pointer hover:bg-white/10 p-1 rounded transition-colors"
            />
            <X
              onClick={onClose}
              className="text-white w-6 h-6 hover:bg-white/10 p-1 rounded cursor-pointer transition-colors"
            />
          </div>
        </div>

        {/* PDF Viewer Area */}
        <div className="flex-1 overflow-hidden bg-[#525659] flex items-center justify-center p-4">
          <div className="w-full h-full bg-white shadow-lg relative">
            <iframe
              src={`${fileUrl}#zoom=${zoom}`}
              className="w-full h-full"
              style={{ border: "none" }}
              title="PDF Document"
            />
          </div>
        </div>

        {/* Footer - Figma Styling (Conditional) */}
        {(onAccept || onReject) && (
          <div className="bg-[#525659] h-[80px] px-8 flex justify-end items-center gap-4 shrink-0 border-t border-[#7B7B7B]">
            {onReject && (
              <button
                onClick={() => {
                  onReject();
                  onClose();
                }}
                className="w-[85px] h-[40px] bg-[#EF2929] hover:bg-[#d42424] text-white font-lato font-bold text-base rounded-lg transition-colors flex items-center justify-center"
              >
                Reject
              </button>
            )}
            {onAccept && (
              <button
                onClick={() => {
                  onAccept();
                  onClose();
                }}
                className="w-[90px] min-w-[100px] h-[40px] bg-[#06B48A] hover:bg-[#059673] text-white font-lato font-bold text-base rounded-lg transition-colors flex items-center justify-center"
              >
                Accept
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
