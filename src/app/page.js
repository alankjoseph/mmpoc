"use client";
import Image from "next/image";
import Card from "./components/card";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Data from "./data/data.json";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    console.log(Data);
  });
  return (
    <div className="flex flex-col  items-center">
      <div className="flex flex-col">
        <div className="flex ">
          <h2 className="font-extrabold  py-4">
            <MoreVertIcon className="text-red-600" /> QUICK READ
          </h2>
        </div>
        {Data.map((item) => (
          <Card title={item.title} desc={item.desc} img={item.img} />
        ))}
      </div>
      <button className="bg-red-600 text-white px-5 py-3 rounded-full font-normal fixed bottom-[100px] left-1/2 transform -translate-x-1/2">
        EXIT QUICK READ
      </button>
    </div>
  );
}
