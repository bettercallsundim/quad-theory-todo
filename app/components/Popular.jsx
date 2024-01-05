"use client";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import Form from "./Form";
import Slider from "./Slider";

export default function Popular() {
  const { loading, error, posts } = useSelector((state) => state.itemSlice);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const [portal, setPortal] = useState(false);
  return (
    <div className="mt-20 container mx-auto px-4 md:px-16 ">
      <div className="flex items-center justify-between text-black">
        <span className="text-base md:text-xl font-medium">Popular</span>
        <span className="flex items-center gap-x-1">
          <button
            onClick={() => {
              setPortal(true);
            }}
            className="font-xl font-bold text-orange-500 px-2 py-1"
          >
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
      {portal && createPortal(<Form setPortal={setPortal} />, document.body)}
      <div className=" my-4  text-black">
        <Slider
          prevButtonRef={prevButtonRef}
          nextButtonRef={nextButtonRef}
          posts={posts.filter((post) => post.IsPopular)}
        />
      </div>
    </div>
  );
}
