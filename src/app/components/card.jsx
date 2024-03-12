import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function card() {
  return (
    <div class="max-w-sm md:max-w-xl  bg-white border  border-gray-200 rounded-lg shadow-md mb-5 last:mb-[180px]">
      <a href="#">
        <img class="rounded-t-lg" src="/supreme-court.avif" alt="" />
      </a>
      <div class="p-5">
        <p className="text-sm text-[#333994] font-semibold mb-2">TOP NEWS</p>
        <h5 class="mb-2 text-xl font-bold tracking-tight  text-gray-900 ">
          തിരഞ്ഞെടുപ്പ് കടപ്പത്രം: വിധി വന്ന് 26 ദിവസമായിട്ടും എന്തു
          ചെയ്തുവെന്ന് സുപ്രീംകോടതി
        </h5>

        <p class="mb-3 font-normal text-[gray-700]  ">
          ന്യൂഡൽഹി . തിരഞ്ഞെടുപ്പു കടപ്പത്രം വഴി 2019 മുതൽ രാഷ്ട്രീയ
          പാർട്ടികൾക്കു ലഭിച്ച സംഭാവനയുടെ വിശദാംശങ്ങൾ പരസ്യപ്പെടുത്താൻ സാവകാശം
          ആവശ്യപ്പെട്ട് എസ്ബിഐ സമർപ്പിച്ച ഹർജി സുപ്രീം കോടതി പരിഗണിക്കുന്നു.
          ചീഫ് ജസ്റ്റിസ് ഡി.വൈ ചന്ദ്രചൂഡ് അധ്യക്ഷനായ അഞ്ചംഗ ബെഞ്ചാണ് വാദം
          കേൾക്കുന്നത്...
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
