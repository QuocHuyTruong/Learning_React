import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    // handle success
    console.log(response);
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};
const Photos = () => {
  //useEffect(callback,[dependencies])
  //   useEffect(function callback() {
  //     //side-effects
  //   }, []);
  //   console.log("outside");
  const [randomPhotos, setRandomPhots] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadmorePhotos = useRef({});
  handleLoadmorePhotos.current = async () => {
    const image = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...image];
    //   console.log(image);
    setRandomPhots(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    //side-effects
    // document.title = "wellcome to effects";
    // console.log("inside");
    handleLoadmorePhotos.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={item.id}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadmorePhotos.current}
          className="inline-block px-8 py-4 bg-purple-600 text-white cursor-pointer"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
