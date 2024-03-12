import Image from "next/image";
import Card from "./components/card";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Home() {
  return (
    <div className="flex flex-col  items-center">
     
      <div className="flex flex-col">
         <div className="flex ">
        <h2 className="font-extrabold  py-4">
          
          <MoreVertIcon className="text-red-600" /> QUICK READ
        </h2>
      </div>
      <Card />
        <Card />
        <Card />
      </div>
      <button className="bg-red-600 text-white px-5 py-3 rounded-full font-normal fixed bottom-[100px] left-1/2 transform -translate-x-1/2">
        EXIT QUICK READ
      </button>
    </div>
  );
}
