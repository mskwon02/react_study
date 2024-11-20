import React from "react";

export default function MovieModal({ selectedMovie, setisClicked }) {
  console.log("movie", selectedMovie);

  return (
    <div className="flex justify-center  fixed top-24 z-20 w-full h-full bg-black bg-opacity-60">
      <div className="relative flex flex-col bg-black w-[60vw] h-[90vh] rounded-lg overflow-y-scroll no-scrollbar">
        <div className="flex absolute right-5 top-5 justify-end">
          <button
            onClick={() => {
              setisClicked(false);
            }}
            className="bg-white  rounded-full size-10 "
          >
            {"X"}
          </button>
        </div>
        <div className=" w-full">
          <img
            src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path} `}
            className="object-cover w-full h-full "
          />
        </div>
        <div className="flex flex-col p-8">
          <div className="flex items-center mb-3 text-xl font-semibold">
            <span className="pr-4  text-white">100% for you</span>
            <span className=" pr-4  text-green-800">
              {selectedMovie.first_air_date || selectedMovie.release_date}
            </span>
          </div>
          <h1 className="font-extrabold text-4xl text-white">
            {selectedMovie.name || selectedMovie.title}
          </h1>
          <p className="mt-7 text-white text-xl ">{`평점:${selectedMovie.vote_average}`}</p>
          <p className="mt-4 text-white text-xl ">{selectedMovie.overview}</p>
        </div>
      </div>
    </div>
  );
}
