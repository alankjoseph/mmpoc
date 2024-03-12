"use client";
import dynamic from "next/dynamic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Loader from "./components/loader";
import Card from "./components/card";
const LazyCard = dynamic(() => import("./components/card"), {
  loading: () => <Loader />,
});

export default function Home() {
  const [article, setArticle] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/data");
    setArticle(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col max-w-[440px] my-0 mx-auto ">
      <div className="flex flex-col ">
        <div className="flex">
          <h2 className="font-semibold py-4">
            <MoreVertIcon className="text-red-600" /> QUICK READ
          </h2>
        </div>
        <div className="mx-[20px]">
          <Suspense fallback={<CircularProgress />}>
            {article.map((item, index) => (
              <LazyCard
                key={index}
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </Suspense>
        </div>
      </div>

      <button className="bg-red-600 text-white px-5 py-3 rounded-full font-normal fixed bottom-[100px] left-1/2 transform -translate-x-1/2">
        EXIT QUICK READ
      </button>
    </div>
  );
}
