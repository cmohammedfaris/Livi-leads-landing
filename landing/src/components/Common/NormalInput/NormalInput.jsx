import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

function NormalInput({ name, label, type = "text", placeholder = "", value, onChange, rounded="rounded-lg", height = "h-[48px]", text="font-normal", labelText="dark:text-textsecondary", error, disabled, readOnly, inputClassName }) {
    return (
        <div className='flex flex-col gap-2 w-full'>
            {label && <label htmlFor={name} className={`font-semibold text-[#212844] ${labelText} text-nowrap`}>{label}</label>}
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                readOnly={readOnly}
                className={inputClassName ? inputClassName : `flex items-center w-full gap-3 p-3 pl-4 ${height} ${text} outline-none dark:text-textsecondary dark:bg-darkprimary border border-[#DEDFEE] focus:border-[#5B04C5] ${error ? 'border-red-500' : 'dark:border-opacity-10 dark:border-black'} shadow-sm ${rounded} transition-colors ${disabled || readOnly ? 'bg-[#DEDFEE]/50 text-gray-500' : 'bg-white'}`}
            />
            {error && <p className="text-[10px] text-red-500 font-bold mt-[-4px] ml-1 uppercase tracking-tight">{error}</p>}
        </div>
    );
}

export default NormalInput;
