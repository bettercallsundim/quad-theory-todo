"use client";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import Slider from "./Slider";
function shuffleArray(array) {
  const shuffled = array.slice(); // Create a copy of the original array

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function Recommended() {
  const { loading, error, posts } = useSelector((state) => state.itemSlice);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  return (
    <div className="mt-20 container mx-auto px-4 md:px-16 ">
      <div className="flex items-center justify-between text-black">
        <span className="text-xl font-medium">Recommended</span>
        <span className="flex items-center gap-x-1">
          <button className="font-xl font-bold text-orange-500 px-2 py-1">
            Add More
          </button>
          <button
            ref={prevButtonRef}
            className="font-xl text-xl font-bold p-2 hover:text-orange-500"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextButtonRef}
            className="font-xl text-xl font-bold p-2 hover:text-orange-500"
          >
            <IoIosArrowForward />
          </button>
        </span>
      </div>
      <div className=" my-4  text-black">
        <Slider
          prevButtonRef={prevButtonRef}
          nextButtonRef={nextButtonRef}
          posts={shuffleArray(posts)}
        />
      </div>
    </div>
  );
}
