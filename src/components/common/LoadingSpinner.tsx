import React from "react";
import { Spinner } from "../ui/spinner";

const LoadingSpinner = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center gap-4">
      <Spinner className="size-8" />
    </div>
  );
};

export default LoadingSpinner;
