import React from "react";

interface PrimaryButtonProps {
  label: string;
  onClick: any;
  type: "button" | "submit" | "reset" | undefined;
}
function PrimaryButton({ label, onClick, type }: PrimaryButtonProps) {
  return (
    <div className="mt-8 w-full">
      <button
        onClick={onClick}
        type={type}
        role={type}
        className="focus:ring-none focus:ring-none focus:ring-none text-sm font-semibold leading-none text-white focus:outline-none bg-primary border rounded  py-4 w-full"
      >
        {label}
      </button>
    </div>
  );
}

export default PrimaryButton;
