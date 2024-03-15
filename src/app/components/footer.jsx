import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PortraitIcon from '@mui/icons-material/Portrait';
import WidgetsIcon from '@mui/icons-material/Widgets';
function footer() {
  return (
    <div className="fixed bottom-0 w-full h-[70px] bg-[#15173d] rounded-t-lg inline-grid grid-cols-5 justify-around items-center px-5">
      <div className="flex flex-col items-center">
        <HomeIcon className="text-slate-400 text-3xl" />
        <p className="text-gray-400 text-xs  text-center">HOME</p>
      </div>
      <div className="flex flex-col items-center">
        <SearchIcon className="text-slate-400 text-3xl" />
        <p className="text-gray-400 text-xs  text-center">SEARCH</p>
      </div>
      <div className="flex flex-col items-center">
        <PortraitIcon className="text-slate-400 text-3xl" />
        <p className="text-gray-400 text-xs  text-center">OBITUARY</p>
      </div>
      <div className="flex flex-col items-center">
        <FlashOnIcon className="text-slate-400 text-3xl" />
        <p className="text-gray-400 text-xs  text-center">READ</p>
      </div>
      <div className="flex flex-col items-center">
        <WidgetsIcon className="text-slate-400 text-3xl" />
        <p className="text-gray-400 text-xs text-center">OUR SITES</p>
      </div>
    </div>
  );
}

export default footer;
