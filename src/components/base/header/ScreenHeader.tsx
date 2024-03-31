import React from "react";

interface ScreenHeaderProps {
  children: React.ReactNode;
}

function ScreenHeader({ children }: ScreenHeaderProps) {
  return <div className="h-32  bg-secondary w-full relative">{children}</div>;
}

export default ScreenHeader;
