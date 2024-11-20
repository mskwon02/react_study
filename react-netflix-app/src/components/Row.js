import React, { useEffect, useState } from "react";
import axios_instance from "../api/axios";

export default function Row({ title, id, rUrl, isBig }) {
  const [netfilxOriginalList, setnetfilxOriginalList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios_instance.get(rUrl);
    setnetfilxOriginalList(result.data.results);
  };
  console.log("netflix list", netfilxOriginalList);
  return (
    <section className=" pt-16 bg-black">
      <h1 className="text-4xl font-semibold mb-4 ml-8 text-white">{title}</h1>
      <div className="relative ml-8">
        <div
          className=" flex absolute z-10 items-center justify-center text-white font-extrabold text-2xl w-20 h-full hover:bg-gradient-to-r from-black to-transparent cursor-pointer"
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 200;
          }}
        >
          <span>{"<"}</span>
        </div>
        <div
          id={id}
          className=" flex relative overflow-y-hidden overflow-x-scroll scroll-smooth no-scrollbar py-8"
        >
          {netfilxOriginalList.map((original) => {
            return (
              <span className="flex-shrink-0 w-1/5 flex flex-col mx-3 ">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    isBig ? original.poster_path : original.backdrop_path
                  } `}
                  className="rounded-md hover:scale-[1.1] hover:rounded-md"
                />
                <span className="text-white font-medium mt-8 overflow-hidden text-xl">
                  {original.title || original.name}
                </span>
              </span>
            );
          })}
        </div>
        <div
          className=" flex absolute right-0 top-0 z-10 items-center justify-center text-white font-extrabold text-2xl w-20 h-full hover:bg-gradient-to-r from-transparent to-black cursor-pointer"
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 200;
          }}
        >
          <span>{">"}</span>
        </div>
      </div>
    </section>
  );
}
