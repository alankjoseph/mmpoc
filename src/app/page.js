
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Fetch from "./components/fetch";

export default function Home() {
  
 

  return (
    <div className="flex flex-col max-w-[440px] my-0 mx-auto ">
      <div className="flex flex-col ">
        <div className="flex">
          <h2 className="font-semibold py-4">
            <MoreVertIcon className="text-red-600" /> QUICK READ
          </h2>
        </div>
        <div className="mx-[20px]">
          <Fetch/>
        </div>
      </div>

      <button className="bg-red-600 text-white px-5 py-3 rounded-full font-normal fixed bottom-[100px] left-1/2 transform -translate-x-1/2">
        EXIT QUICK READ
      </button>
    </div>
  );
}
