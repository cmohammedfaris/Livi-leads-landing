"use client";

{/* <div className={`flex text-black input-base items-center justify-start gap-2 rounded-lg border ${getBorderColor()} transition-colors duration-300 px-4 py-2`}>
<div>
  <LockKeyhole className="icon text-textsecondprimary" />
</div>
<input
  type={showPassword ? "text" : "password"}
  className="w-full outline-none border-none"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
<div 
  onMouseDown={() => setShowPassword(true)}
  onMouseUp={() => setShowPassword(false)}
  onMouseLeave={() => setShowPassword(false)}
  onTouchStart={() => setShowPassword(true)}
  onTouchEnd={() => setShowPassword(false)}
>
  {showPassword ? (
    <EyeOffIcon className="icon text-textsecondprimary animate-btn" />
  ) : (
    <EyeIcon className="icon text-textsecondprimary animate-btn" />
  )}
</div>
</div>
{password && (
<p className={`text-sm mt-1 ${
  passwordStrength === "strong" ? "text-green-500" :
  passwordStrength === "medium" ? "text-yellow-500" :
  "text-red-500"
}`}>
  Password strength: {passwordStrength}
</p>
)} */}


// const [passwordStrength, setPasswordStrength] = useState("");

export const validatePassword = (pass) => {
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const hasNumbers = /\d/.test(pass);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    const isLongEnough = pass.length >= 8;

    if (pass.length === 0) return "";
    if (isLongEnough && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar) {
      return "strong";
    } else if (pass.length >= 8 && (hasUpperCase || hasLowerCase) && hasNumbers) {
      return "medium";
    }
    return "weak";
  };

 export const PasswordgetBorderColor = (passwordStrength) => {
    switch (passwordStrength) {
      case "strong":
        return "!border-green-500";
      case "medium":
        return "!border-yellow-500";
      case "weak":
        return "!border-red-500";
      default:
        return "border-gray-300";
    }
  };
  export const PasswordgetTextColor = (passwordStrength) => {
    switch (passwordStrength) {
      case "strong":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "weak":
        return "text-red-500";
      default:
        return "text-gray-300";
    }
  };

//   useEffect(() => {
//     setPasswordStrength(validatePassword(password));
//   }, [password]);