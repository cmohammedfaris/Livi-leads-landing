"use client";

import React, { useState, useEffect } from 'react';
import { phoneCountries, phoneLength, countries } from './PhoneNumberHelper';
import { getFormColor } from '@components/Common/CommonFormValidation';

async function detectCountryCode() {
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data && data.country_code) {
            return data.country_code;
        }
    } catch (e) {
        console.warn("ipapi.co failed, trying ip-api.com", e);
    }
    try {
        const res = await fetch("https://ip-api.com/json/");
        const data = await res.json();
        if (data && data.status === "success" && data.countryCode) {
            return data.countryCode;
        }
    } catch (e) {
        console.warn("ip-api.com failed, trying ipinfo.io", e);
    }
    try {
        const res = await fetch("https://ipinfo.io/json");
        const data = await res.json();
        if (data && data.country) {
            return data.country;
        }
    } catch (e) {
        console.warn("ipinfo.io failed", e);
    }
    return null;
}

function PhoneNumber({ 
    contactNumber = "", 
    setContactNumber,
    error,
    className,
    inputClassName,
    hideValidationText = false
}) {
    // Default to UAE (+971) if country code doesn't match or not provided
    const [country, setCountry] = useState(countries.find(c => c.countryCallingCode === "+971") || countries[0]);

    useEffect(() => {
        const detectAndSetCountry = async () => {
            // Only detect country automatically if contactNumber is empty or defaults to UAE code without input
            if (!contactNumber || contactNumber === "+971") {
                const code = await detectCountryCode();
                
                
                if (code) {
                    const matched = countries.find(c => 
                        c.code?.toLowerCase() === code.toLowerCase() ||
                        c.flags?.svg?.toLowerCase().includes(`/${code.toLowerCase()}.svg`)
                    );
                    if (matched) {
                        setCountry(matched);
                        setContactNumber(matched.countryCallingCode);
                    }
                }
            }
        };
        detectAndSetCountry();
    }, []);
    const [searchCountry, setSearchCountry] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const getRequiredLength = (countryCode) => {        
        return phoneLength[countryCode.toString()] || 10;
    };

    const validatePhoneNumber = (number, country) => {
        if (!number) return true; // Empty is valid unless marked required externally
        
        const safeNumber = number || "";
        const numberWithoutCode = safeNumber.replace(country.countryCallingCode, "");
        const requiredLength = getRequiredLength(country.countryCallingCode);
        return numberWithoutCode.length === requiredLength;
    };

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        const requiredLength = getRequiredLength(country.countryCallingCode);

        if (inputValue.length <= requiredLength) {
            setContactNumber(country.countryCallingCode + inputValue);
        }
    };

    const getExampleNumber = (countryCode) => {
        const length = getRequiredLength(countryCode);
        if (length === 10) return "eg: 123 456 7890";
        if (length === 9) return "eg: 50 123 4567";
        if (length === 11) return "eg: 12 345 678 901";
        if (length === 8) return "eg: 123 456 78";
        
        let example = "";
        for (let i = 1; i <= length; i++) {
            example += (i % 10).toString();
        }
        return `eg: ${example}`;
    };

    useEffect(() => {
        setIsValid(validatePhoneNumber(contactNumber, country));
    }, [contactNumber, country]);

    // Update selected country if contactNumber has a different country code prefix
    useEffect(() => {
        if (contactNumber) {
            // Find the longest matching country calling code to avoid +1 overriding +1242, etc.
            const matchedCountry = countries.reduce((bestMatch, c) => {
                if (contactNumber.startsWith(c.countryCallingCode)) {
                    if (!bestMatch || c.countryCallingCode.length > bestMatch.countryCallingCode.length) {
                        return c;
                    }
                }
                return bestMatch;
            }, null);

            if (matchedCountry && matchedCountry.countryCallingCode !== country.countryCallingCode) {
                setCountry(matchedCountry);
            }
        }
    }, [contactNumber, countries]);

    const getPhoneBorderColor = () => {
        const digits = (contactNumber || "").replace(country.countryCallingCode, "");
        if (!digits) return "border-gray-300";
        return isValid ? "!border-green-500" : "!border-red-500";
    };

    let filteredCountries = countries.filter(({ name }) =>
        name.toLowerCase().includes(searchCountry.toLowerCase())
    );

    const defaultClassName = `relative flex text-black input-base items-center justify-start gap-2 mt-3 2xl:mt-4 rounded-xl border bg-white ${getPhoneBorderColor()} ${getFormColor(error)} transition-colors duration-300 px-4 py-3`;
    const finalClassName = className !== undefined ? className : defaultClassName;
    
    const defaultInputClassName = "w-full bg-transparent outline-none border-none text-black";
    const finalInputClassName = inputClassName !== undefined ? inputClassName : defaultInputClassName;

    return (
        <div className="w-full">
            <div className={finalClassName}>
                <div className="shrink-0 flex items-center h-full  md:pl-0"> 
                    {/* Added pl-4 for mobile if parent custom class misses it, though mostly it's just ensuring flex centering */}
                    <div className="flex items-center h-full">
                        {country && (
                            <div 
                                className="flex justify-start items-center cursor-pointer h-full"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <div className="flex items-center justify-center">
                                    <img
                                        src={country.flags.svg}
                                        alt={country.name}
                                        className="h-[15px] w-[22px] shrink-0 rounded-[2px] shadow-sm hover:shadow-md object-cover animate-btn"
                                    />
                                </div>
                                <span className="ml-2 border-l border-gray-200 pl-2 text-[15px] leading-none font-medium opacity-80 text-gray-700 flex items-center h-[18px]">
                                    {country.countryCallingCode}
                                </span>
                            </div>
                        )}
                    </div>
                    {isOpen && (
                        <div className="absolute mt-2 left-0 w-[18rem] bg-white border border-[#e0ebff] shadow-xl rounded-xl z-50 overflow-hidden">
                            <input
                                onChange={(e) => setSearchCountry(e.target.value)}
                                className="h-12 w-full outline-none border-b border-gray-100 pl-4 text-sm text-black"
                                placeholder="Search country name"
                                autoFocus
                            />
                            <div className="max-w-full max-h-[14rem] overflow-auto hidescroll text-black">
                                {(searchCountry ? filteredCountries : countries).map((countryItem) => (
                                    <div
                                        key={countryItem.name}
                                        className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0"
                                        onClick={() => {
                                            setCountry(countryItem);
                                            setIsOpen(false);
                                            setSearchCountry("");
                                            setContactNumber(countryItem.countryCallingCode);
                                        }}
                                    >
                                        <img
                                            src={countryItem.flags.svg}
                                            alt={countryItem.name}
                                            className="h-4 w-6 rounded shadow-sm object-cover shrink-0"
                                        />
                                        <span className="text-sm truncate flex-1">{countryItem.name}</span>
                                        <span className="ml-auto text-xs font-semibold opacity-60">
                                            {countryItem.countryCallingCode}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex-1 flex items-center">
                    <input
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        value={(contactNumber || "").replace(country.countryCallingCode, "")}
                        onChange={handlePhoneChange}
                        placeholder={getExampleNumber(country.countryCallingCode)}
                        className={finalInputClassName}
                        maxLength={getRequiredLength(country.countryCallingCode)}
                    />
                </div>
            </div>
            {contactNumber && (contactNumber.replace(country.countryCallingCode, "").length > 0) && !isValid && !hideValidationText && (
                <p className="text-xs mt-1 text-red-500 font-medium ml-1">
                    Please enter a valid {phoneCountries[country.countryCallingCode]} phone number ({getRequiredLength(country.countryCallingCode)} digits)
                </p>
            )}
        </div>
    );
}

export default PhoneNumber;