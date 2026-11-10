"use client";

import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Dialog } from '@material-tailwind/react';
import getCroppedImg from '../../Utils/cropImage';

const ImageCropperModal = ({ isOpen, onClose, imageSrc, aspect, onCropDone, title = "Crop Image" }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    try {
      setIsCropping(true);
      const croppedImageFile = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        0,
        { horizontal: false, vertical: false },
        `cropped_image_${Date.now()}.jpg`
      );
      onCropDone(croppedImageFile);
      onClose();
    } catch (e) {
      console.error(e);
    } finally {
      setIsCropping(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      size="sm"
      dismiss={{ outsidePress: false }}
      className="bg-white dark:bg-[#1a1c23] outline-none p-0 overflow-hidden rounded-2xl w-full max-w-[500px] m-auto"
    >
      <div className="flex flex-col h-[500px]">
        <div className="flex items-center justify-between border-b border-[#DEDFEE] dark:border-gray-800 p-4">
          <h3 className="text-[18px] font-bold text-[#212844] dark:text-white">
            {title}
          </h3>
        </div>
        
        <div className="relative flex-1 w-full bg-black/10 dark:bg-black/50">
          {imageSrc && (
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          )}
        </div>

        <div className="p-4 border-t border-[#DEDFEE] dark:border-gray-800 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Zoom</span>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e) => setZoom(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isCropping}
              className="px-4 py-2 text-sm font-semibold text-[#5B04C5] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleCrop}
              disabled={isCropping}
              className="px-6 py-2 text-sm font-semibold text-white bg-[#5B04C5] hover:bg-[#534ece] rounded-lg transition-colors disabled:opacity-50"
            >
              {isCropping ? "Applying..." : "Apply Crop"}
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ImageCropperModal;
