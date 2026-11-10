"use client";

import React, { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-easy-crop';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Button, Dialog } from '@material-tailwind/react';
import { Toast } from '../../Custom/Toast/CustomToast';

import { getCroppedImg } from '../ImageCropper/ImageCropper';


const ImagePicker = ({ head, fixedCropHeight = 300, fixedCropWidth = 300, setimage, }) => {
    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [isCropping, setIsCropping] = useState(false);
    const fileInputRef = useRef(null);

    const handleImageValidation = (file) => {
        if (!['image/png', 'image/jpeg'].includes(file.type)) {
            Toast('Please upload a PNG or JPG image', 'e');
            return false;
        }

        if (file.size > 1 * 1024 * 1024) {
            Toast('File size should be less than 1MB', 'e');
            return false;
        }
        return true;
    };

    const processImage = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImageFile(file);
            setimage(file)
            setPreviewImage(reader.result);
            setIsCropping(true);
        };
        reader.readAsDataURL(file);
    };

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (handleImageValidation(file)) {
            processImage(file);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg']
        },
        multiple: false
    });

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (handleImageValidation(file)) {
            processImage(file);
        }
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleCrop = async () => {
        try {
            const croppedImage = await getCroppedImg(
                previewImage,
                croppedAreaPixels
            );
            setPreviewImage(croppedImage);
            setIsCropping(false);
        } catch (e) {
            // Error handling
        }
    };

    const resetImage = () => {
        setImageFile(null);
        setPreviewImage(null);
        setIsCropping(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const openFileSelector = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <h4 className="text-black text-sm lato-bold pt-3 pb-3">{head}</h4>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/png, image/jpeg"
                className="hidden"
            />

            {(
                <div
                    {...getRootProps()}
                    onClick={openFileSelector}
                    className={`
            flex gap-4 cursor-pointer
            ${isDragActive ? 'border-blue-500' : 'border-gray-300'}
          `}
                >
                    <div className='p-2 w-20 h-14 relative rounded-xl bg-[#D6D7E6] border-[#D6D7E6] shadow-[1px_1px_5px_rgba(0,0,0,0.2)]'>
                        {imageFile && !isCropping ? (
                            <>
                                <img
                                    src={previewImage}
                                    alt="Uploaded"
                                    className="w-full h-full rounded-lg"
                                />
                                <XMarkIcon onClick={resetImage} className="w-5 h-5 animate-btn  absolute top-0 right-0 bg-red-600 p-1 text-white rounded-full" />
                            </>
                        ) : (
                            <PhotoIcon className='w-full h-full ' />
                        )}
                    </div>
                    <div
                        className='border-dashed border-2 animate-btn text-center p-2 border-borderprimary w-full h-full rounded-xl bg-white'
                    >
                        <input {...getInputProps()} />
                        <h1 className='text-blue-700 lato-bold text-sm'>
                            {isDragActive ? 'Drop file here' : 'Click to upload'}
                        </h1>
                        <p className='text-second text-xs'>PNG or JPG less than 1MB</p>
                    </div>
                </div>
            )}

            {isCropping && previewImage && (
                <Dialog open={isCropping}
                    size='xs'
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }} className="mt-4 rounded-xl p-5 flex flex-col items-center justify-center ">
                    <div className="relative h-64 w-64 mb-4 border-borderprimary border-2">
                        <Cropper
                            image={previewImage}
                            crop={crop}
                            zoom={zoom}
                            aspect={fixedCropWidth / fixedCropHeight}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            cropSize={{ width: fixedCropWidth, height: fixedCropHeight }}
                            showGrid={true}
                            restrictPosition={false}
                        />
                    </div>
                    <div className="flex justify-between mt-4 gap-3 items-center ">
                        <input
                            type="range"
                            value={zoom}
                            min={1}
                            max={100}
                            step={1}
                            aria-labelledby="Zoom"
                            onChange={(e) => setZoom(Number(e.target.value))}
                            className="w-full mr-4 outline-none"
                        />
                        <p className='text-second lato-bold text-center'>{parseInt(zoom)}</p>
                        <Button
                            onClick={handleCrop}
                            className="animate-btn bg-primary"
                        >
                            Update
                        </Button>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

export default ImagePicker;