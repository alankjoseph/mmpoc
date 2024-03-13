"use client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/loader";
import Card from "./components/card";
import fetch from "./components/fetch";

export default function Home() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/data");
    setArticle(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 20).join(" ") + "...";
  };

  return (
    <div className="flex flex-col max-w-[440px] my-0 mx-auto ">
      <div className="flex flex-col ">
        <div className="flex">
          <h2 className="font-semibold py-4">
            <MoreVertIcon className="text-red-600" /> QUICK READ
          </h2>
        </div>
        <div className="mx-[20px]">
          {isLoading ? (
            <>
              <Loader />
              <Loader />
              <Loader />
            </>
          ) : (
            <>
              {article.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  desc={truncateDescription(item.desc)}
                  img={item.img}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <button className="bg-red-600 text-white px-5 py-3 rounded-full font-normal fixed bottom-[100px] left-1/2 transform -translate-x-1/2">
        EXIT QUICK READ
      </button>
    </div>
  );
}
