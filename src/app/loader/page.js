import React from "react";

export default function loader() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="p-4 bg-white border border-primary rounded-md">
        <div className="flex">
          {/* <div className="mr-4 bg-gray-200 border border-gray-200 h-16 w-16 rounded animate-pulse"></div> */}
          <div className="space-y-1 flex flex-col w-full">
            <div className="bg-gray-200 border border-gray-200 w-full h-[350px] animate-pulse"></div>
            <div className="bg-gray-200 border border-gray-200 w-full h-[20px] animate-pulse p"></div>
            <div className="bg-gray-200 border border-gray-200 w-[300px] h-[20px] animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
