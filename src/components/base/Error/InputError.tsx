import React from "react";

interface InputErrorProps {
  message: string | null | undefined;
}
function InputError({ message }: InputErrorProps) {
  return (
    <div>
      <p className="text-red-500 text-xs">{message}</p>
    </div>
  );
}

export default InputError;
