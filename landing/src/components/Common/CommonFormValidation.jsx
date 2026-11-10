export const getFormColor = (data) => {
    if (data === null || data === undefined) {
        return "border-gray-300";
    } else if (typeof data === 'string' && (data.includes("cannot be empty") || data.includes("invalid") || data.includes("do not match") || data.includes("must be"))) {
        return "!border-red-500";
    } else if(typeof data === 'string' && data.trim()==="") {
        return "!border-green-500";
    }
    return "border-gray-300";
};
