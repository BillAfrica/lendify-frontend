import { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import InputError from "../../base/Error/InputError";

interface PasswordInputFieldProps {
  label: string;
  placeholder: string;
  error?: string | null;
  onBlur: any;
  onChange: any;
  value: any;
  name: string;
  maxLength?: number;
  minLength?: number;
}
function PasswordInputField({
  label,
  placeholder,
  error,
  onBlur,
  onChange,
  value,
  name,
  maxLength,
  minLength,
}: PasswordInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative my-2">
      <label
        htmlFor="email"
        className="text-sm font-medium leading-none text-gray-600"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-labelledby={name}
        type={showPassword ? "text" : "password"}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        className="bg-gray-200 border focus:border-primary focus:outline-primary placeholder:text-gray-400  rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
      />

      {showPassword ? (
        <FaRegEyeSlash
          size={20}
          className="absolute right-4 top-12 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <IoEyeOutline
          size={20}
          className="absolute right-4 top-12 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowPassword(true)}
        />
      )}

      {error ? <InputError message={error} /> : null}
    </div>
  );
}

export default PasswordInputField;
