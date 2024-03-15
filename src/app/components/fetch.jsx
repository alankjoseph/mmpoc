
import React from "react";
import Card from "../components/card";
async function getData() {
  const res = await fetch("http://localhost:8080/data");
    
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 20).join(" ") + "...";
  };
export default async function page() {
  const data = await getData();
 
  return (
    <>
      {data.map((item, index) => (
        <Card key={index} title={item.title} desc={truncateDescription(item.desc)} img={item.img} />
      ))}
    </>
  );
}
