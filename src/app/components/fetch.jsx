import React from "react";
import Card from "../components/card";
async function getData() {
  try {
    const res = await fetch(
      `http://655ef4c0879575426b4439fa.mockapi.io/api/quick_read`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    throw new Error("Error while fetching the data");
  }

  
}
const truncateDescription = (description) => {
  const words = description.split(" ");
  return words.slice(0, 20).join(" ") + "...";
};
export default async function page() {
  const data = await getData();

  return (
    <>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          desc={truncateDescription(item.desc)}
          img={item.img}
        />
      ))}
    </>
  );
}
