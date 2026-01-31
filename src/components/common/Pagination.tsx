import React from "react";
import { Button } from "../ui/button";

const Pagination = ({ currentPage, setCurrentPage, allPage }: any) => {
  return (
    <div className="w-full flex justify-between gap-4">
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => setCurrentPage((prev: any) => prev - 1)}
        className={`${
          currentPage === 1 ? "invisible" : "visible"
        } rounded-none`}
      >
        Previous
      </Button>
      <span>
        Page {currentPage} to {allPage}
      </span>
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => setCurrentPage((prev: any) => prev + 1)}
        className={`${
          currentPage === Number(allPage) ? "invisible" : "visible"
        } rounded-none`}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
