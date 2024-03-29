import React from "react";

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
    <div>
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
        className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
        placeholder={placeholder}
        maxLength={maxLength}
      />

      {error ? <p className="text-red-500 text-xs italic">{error}</p> : null}
    </div>
  );
}

export default PrimaryInputField;
