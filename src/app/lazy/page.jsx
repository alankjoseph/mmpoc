"use client";
import Card from "../components/card";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useEffect, useState } from "react";
export default function Page() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  const fetchMoreData = () => {
    fetch(
      `https://65f0377eda8c6584131b2640.mockapi.io/api/v1/news-quick-read?page=${count}&limit=4`
    ).then(async (d) => {
      let tem = [...data];
      let resp = await d.json();
      tem.push(...resp);
      setCount(count + 1);
      setData(tem);
    });
  };

  useEffect(() => {
    if (count === 1) {
      fetchMoreData();
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      fetchMoreData();
    }
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
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.headline}
              desc={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>

      <button className="bg-red-600 text-white px-5 py-3 rounded-full font-normal fixed bottom-[100px] left-1/2 transform -translate-x-1/2">
        EXIT QUICK READ
      </button>
    </div>
  );
}
