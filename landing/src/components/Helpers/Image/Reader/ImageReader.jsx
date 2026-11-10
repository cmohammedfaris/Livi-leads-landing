"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Maximize2,
  X,
  Minus,
  Plus,
  Printer,
} from "lucide-react";

export default function ImageReader({
  open,
  onClose,
  imageUrl,
  fileName,
  onAccept,
  onReject,
}) {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      setZoom(100);
      setRotation(0);
      setIsFullscreen(false);
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 300));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 25));
  const handleRotateRight = () => setRotation((prev) => (prev + 90) % 360);
  const handleRotateLeft = () => setRotation((prev) => (prev - 90 + 360) % 360);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName || "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              {fileName || "Image Viewer"}
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-1 justify-center">
            {/* Zoom Control */}
            <div className="flex items-center gap-4 px-6">
              <Minus
                onClick={handleZoomOut}
                className="w-5 h-5 text-white cursor-pointer hover:opacity-80"
              />
              <div className="bg-[#191B1C] px-3 h-6 flex items-center justify-center text-white text-xs font-medium min-w-[50px]">
                {zoom}%
              </div>
              <Plus
                onClick={handleZoomIn}
                className="w-5 h-5 text-white cursor-pointer hover:opacity-80"
              />
            </div>

            <div className="w-[1px] h-6 bg-[#BDBDC7] opacity-50 mx-2"></div>

            {/* Mode / Rotate */}
            <div className="flex items-center gap-4 px-6">
              <Maximize2
                onClick={toggleFullscreen}
                className="w-5 h-5 text-white cursor-pointer hover:opacity-80"
              />
              <RotateCw
                onClick={handleRotateRight}
                className="w-5 h-5 text-white cursor-pointer hover:opacity-80"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <Download
              onClick={handleDownload}
              className="w-6 h-6 text-white cursor-pointer hover:bg-white/10 p-1 rounded transition-colors"
            />
            <Printer
              onClick={() => {
                const win = window.open(imageUrl, "_blank");
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

        {/* Image Viewer Area */}
        <div className="flex-1 overflow-auto bg-[#525659] flex items-center justify-center p-4 custom-scrollbar">
          <div className="relative flex items-center justify-center transition-transform duration-300 ease-out"
               style={{
                 transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
               }}>
            <img
              src={imageUrl}
              alt="Viewer"
              className="shadow-2xl max-w-full max-h-full object-contain"
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
                className="w-[90px] min-w-[90px] h-[40px] bg-[#06B48A] hover:bg-[#059673] text-white font-lato font-bold text-base rounded-lg transition-colors flex items-center justify-center"
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