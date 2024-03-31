import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FiUploadCloud } from "react-icons/fi";
interface FileUploadFieldProps {
  handleChange: any;
  name: string;
  types: string[];
  label: string;
  file: any;
  text?: string;
}

function FileUploadField({
  handleChange,
  name,
  types,
  label,
  file,
  text,
}: FileUploadFieldProps) {
  //   const [file, setFile] = useState(null);
  //   const handleChange = (file) => {
  //     setFile(file);,
  //   };
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none text-gray-600"
      >
        {label}
      </label>
      <FileUploader
        className="bg-gray-200 border focus:border-primary focus:outline-primary placeholder:text-gray-400  rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
        handleChange={handleChange}
        name={name}
        types={types}
        children={
          <div className="bg-gray-200 border  border-primary h-40 focus:border-primary focus:outline-primary placeholder:text-gray-400  rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2">
            <div className="flex justify-center text-secondary flex-col items-center mt-8">
              <FiUploadCloud size={30} className="text-secondary" />
              <p className="font-bold mt-3">
                {" "}
                {text ? text : "Click or Drag and drop files"}
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default FileUploadField;
