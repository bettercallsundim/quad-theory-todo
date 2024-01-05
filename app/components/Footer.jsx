import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="  bg-[#F99F1C] mt-20 md:py-20  px-4 py-12 md:px-32 flex items-center justify-around">
      <div className="first w-full md:w-[50%]">
        <div>
          <div className="  relative bg-white rounded-[15px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-6 py-4 rounded-[15px]  bg-white pr-34 outline-none border-none text-black"
            />
            <button className="absolute rounded-[15px]  top-2 right-0 md:right-4 bottom-2 flex items-center justify-center px-10 py-2 md:bg-[#FC6011] text-[#FC6011] md:text-white text-base md:text-sm font-semibold hover:scale-105 duration-300">
              Subscribe{" "}
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-20 flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="mt-10 md:mt-[unset]">
            <h1 className="font-extrabold text-3xl mb-4 text-black text-center md:text-left">
              pti.
            </h1>
            <h4 className="font-extrabold  mb-4 text-black text-center md:text-left">
              Copyright&copy;Tripp.All Right Reserved
            </h4>
          </div>
          <div className="icons flex items-center justify-center gap-x-2">
            <a
              className="text-white bg-orange-500 md:bg-white md:text-orange-500 rounded-full p-3 hover:scale-105 duration-300"
              href="#"
            >
              <FaGoogle />
            </a>
            <a
              className="text-white bg-orange-500 md:bg-white md:text-orange-500 rounded-full p-3 hover:scale-105 duration-300"
              href="#"
            >
              <FaTwitter />
            </a>
            <a
              className="text-white bg-orange-500 md:bg-white md:text-orange-500 rounded-full p-3 hover:scale-105 duration-300"
              href="#"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[30%]">
        <img src="./Image2.png" alt="footer" />
      </div>
    </footer>
  );
}
