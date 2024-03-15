import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function card({title, desc, img}) {
  return (
    <div className="max-w-sm md:max-w-xl  bg-white border  border-gray-200 rounded-lg shadow-md mb-5 last:mb-[200px]">
      <a href="#">
        <img height={229} className="rounded-t-lg min-h-[229px] " src={img} alt="" />
      </a>
      <div className="p-5">
        <p className="text-sm text-[#333994] font-semibold mb-2">TOP NEWS</p>
        <h5 className="mb-2 text-xl font-bold tracking-tight  text-gray-900 ">
          {title}
        </h5>

        <p className="mb-3 font-normal text-[gray-700]  ">
          {desc}
        </p>
        <hr />
        <div className="flex mt-3">
          <p className=" flex font-medium tracking-tight mr-auto items-center justify-center">
            READ FULL STORY <KeyboardDoubleArrowRightIcon className="text-red-600"/>
          </p>
          <BookmarkBorderIcon className="text-gray-600 mx-2" />
          <ShareIcon className="text-gray-600 mx-2" />
          <WhatsAppIcon className="text-gray-600 mx-2" />
        </div>
      </div>
    </div>
  );
}

export default card;
