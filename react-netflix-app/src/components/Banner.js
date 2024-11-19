import React, { useEffect, useState } from "react";
import axios_instance from "../api/axios";
import requests_defined from "../api/requests_defined";

function Banner() {
  const [bannerMovie, setbannerMovie] = useState([]);
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    const result = await axios_instance.get(requests_defined.fetchNowPlaying);
    const banner_movie_list = result.data.results;

    const banner_movie_id =
      banner_movie_list[Math.floor(Math.random() * banner_movie_list.length)]
        .id;
    const { data: banner_movie_detail } = await axios_instance.get(
      `movie/${banner_movie_id}`,
      { params: { append_to_response: "video" } }
    );
    setbannerMovie(banner_movie_detail);
  };

  return (
    <header
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}')`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      className="h-[650px] object-contain flex flex-col justify-center"
    >
      <div className="p-16 flex flex-col justify-between h-2/3 mt-16">
        <h1 className="text-white font-bold text-6xl">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div>
          <button className="mr-6 bg-white px-6 py-2 rounded-md text-2xl font-semibold">
            play
          </button>
          <button className=" bg-gray-400 bg-opacity-55 px-4 py-2 rounded-md text-2xl font-semibold text-white">
            More Information
          </button>
        </div>
        <h1 className="text-white font-bold text-xl w-1/2">
          {bannerMovie?.overview?.length > 100
            ? bannerMovie?.overview?.substr(0, 99) + "..."
            : bannerMovie?.overview}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
