import React from "react";
import InputError from "../../base/Error/InputError";

interface PrimaryInputFieldProps {
  label: string;
  placeholder: string;
  error?: string | null;
  onBlur: any;
  onChange: any;
  value: any;
  type: string;
  name: string;
  maxLength?: number;
}
function PrimaryInputField({
  label,
  placeholder,
  error,
  onBlur,
  onChange,
  value,
  type,
  name,
  maxLength,
}: PrimaryInputFieldProps) {
  return (
    <div className="my-2">
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
        type={type}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        className="bg-gray-200 placeholder:text-gray-400 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
        placeholder={placeholder}
        maxLength={maxLength}
      />

      {error ? <InputError message={error} /> : null}
    </div>
  );
}

export default PrimaryInputField;
