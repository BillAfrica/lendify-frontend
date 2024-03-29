import React from "react";
import OtpInput, { AllowedInputTypes } from "react-otp-input";

interface OTPInputFieldProps {
  value: string;
  onChange: any;
  numInputs: number;
}
function OTPInputField({ value, onChange, numInputs }: OTPInputFieldProps) {
  return (
    <div>
      <OtpInput
        value={value}
        onChange={onChange}
        numInputs={numInputs}
        renderSeparator={<span>-</span>}
        // Update the width class here. Example: Change 'w-16' to 'w-32' for a wider input.
        inputStyle={{
          width: "3rem",
          height: "3rem",
          fontSize: "1.5rem",
          margin: "0 1rem",
          borderRadius: "0.5rem",
          border: "1px solid #E5E7EB",
        }}
        containerStyle="flex justify-between w-full"
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
}

export default OTPInputField;
