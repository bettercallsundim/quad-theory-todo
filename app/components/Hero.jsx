"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import image from "../../public/Image1.png";
import { fetchPosts } from "../redux/itemSlice";
const Hero = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="mt-20 container mx-auto px-2 sm:px-4 md:px-16 ">
      <div className="flex flex-col md:flex-row items-center justify-around py-8 px-4 md:px-8 lg:px-20 rounded-[30px] md:bg-[#F99F1C]">
        <div>
          <h1 className="font-extrabold md:font-normal text-black md:text-white text-center md:text-left text-3xl md:text-4xl lg:text-5xl capitalize">
            Deliver food to your door step
          </h1>
          <p className="text-black md:text-slate-300 mt-6 text-xl text-center md:text-left">
            Authentic Food, Quick Service, Free Delivery
          </p>
        </div>
        <div className="bg-[#FD9460] md:bg-[unset]  rounded-[30px] md:rounded-[unset] overflow-hidden md:overflow-[unset] mt-14 sm:mt-20 md:mt-[unset]">
          <Image
            className="scale-[1.2] md:scale-[unset] -mt-8 md:-mt-[unset]"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
