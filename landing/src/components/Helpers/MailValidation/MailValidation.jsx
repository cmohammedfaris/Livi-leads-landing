"use client";

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.length === 0 || emailRegex.test(email);
};

export const getEmailBorderColor = (email,emailValid) => {
    if (email.length === 0) return "border-gray-300";
    return emailValid ? "!border-green-500" : "!border-red-500";
};
//   const [email, setEmail] = useState("");
//   const [emailValid, setEmailValid] = useState(true);

{/* <div className={`flex text-black items-center justify-start gap-2 rounded-lg border ${getEmailBorderColor()} transition-colors duration-300 px-4 py-2`}>
            <div>
              <Mail className="icon text-textsecondprimary" />
            </div>
            <input 
              type="email" 
              className="w-full bg-transparent outline-none border-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {email && !emailValid && (
            <p className="text-sm mt-1 text-red-500">
              Please enter a valid email address
            </p>
          )} */}

//   useEffect(() => {
//     setEmailValid(validateEmail(email));
//   }, [email]);





{/* <div className="flex text-black input-base items-center justify-start gap-2">
            <div>
              <Mail className="icon text-textsecondprimary" />
            </div>
            <input type="email" className="input-main" placeholder="Email" />
          </div> */}