import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

function NormalInputTextAria({ name, label, type = "text", placeholder = "", value, onChange,rounded="rounded-lg" ,height = "h-24",text="font-medium", labelText="dark:text-textsecondary" }) {
    return (
        <div className='flex flex-col gap-2 w-full'>
            {label && <label htmlFor={name} className={`font-medium ${labelText} text-nowrap`}>{label}</label>}
            <textarea
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`flex items-center w-full gap-3 p-3 pl-5 ${height} ${text} hidescroll resize-none outline-none dark:text-textsecondary dark:bg-darkprimary border-2 dark:border-opacity-10 dark:border-black shadow-sm ${rounded}`}
            />
        </div>
    );
}

export default NormalInputTextAria;
