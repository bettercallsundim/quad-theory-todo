"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addPosts } from "../redux/itemSlice";

const Form = ({ setPortal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const photoRef = useRef();
  const [photoErr, setPhotoErr] = useState(false);
  const dispatch = useDispatch();
  const validate = () => {
    const test1 = watch("Popular");
    const test2 = watch("Recommended");

    return test1 || test2;
  };
  const onSubmit = (data) => {
    if (
      photoRef.current.files[0] &&
      photoRef.current.files[0].type.includes("image")
    ) {
      const PhotoUrl = URL.createObjectURL(photoRef.current.files[0]);
      dispatch(
        addPosts({
          Id: String(Date.now()),
          Name: data["Item Name"],
          Price: data["Price"],
          ImageUrl: PhotoUrl,
          IsPopular: data["Popular"] ? true : false,
          IsRecommended: data["Recommended"] ? true : false,
        })
      );
      const notify = () => toast.success("Post Added");
      notify();
      setTimeout(() => {
        setPortal(false);
      }, 1000);
    } else {
      setPhotoErr(true);
    }
  };
  return (
    <div className="fixed inset-0 bg-white text-black z-[999] flex items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="">
        <button
          onClick={() => setPortal(false)}
          className=" bg-orange-500 text-white p-4 rounded-full absolute top-4 right-4 z-[999999] hover:bg-slate-300 hover:text-orange-500 hover:scale hover:shadow-lg duration-300"
        >
          <IoMdClose />
        </button>

        <div className="glass p-4 md:p-8 rounded-lg w-[80%] mx-auto">
          <form
            className="flex flex-col gap-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <p>
              {" "}
              <span className="font-bold text-lg">Item Name : </span>{" "}
              <input
                className="bg-transparent border-2 py-2 px-4 rounded outline-none"
                type="text"
                placeholder="Item Name"
                {...register("Item Name", {
                  required: "Item Name is required",
                })}
              />
            </p>
            {errors["Item Name"] && (
              <span className="text-red-500">
                * {errors["Item Name"].message}
              </span>
            )}
            <p>
              <span className="font-bold text-lg">Price : </span>{" "}
              <input
                className="bg-transparent border-2 py-2 px-4 rounded outline-none"
                type="number"
                placeholder="Price"
                {...register("Price", { required: "Price is required" })}
              />
            </p>
            {errors["Price"] && (
              <span className="text-red-500">* {errors["Price"].message}</span>
            )}
            <p>
              <span>
                {" "}
                <span className="mr-4 font-bold">
                  <input
                    className="mr-2 "
                    type="checkbox"
                    placeholder="Popular"
                    {...register("Popular", { validate })}
                  />
                  Is Popular
                </span>
                <span className="font-bold">
                  <input
                    className="mr-2 "
                    type="checkbox"
                    placeholder="Recommended"
                    {...register("Recommended", { validate })}
                  />
                  Is Recommended
                </span>
              </span>
            </p>
            {errors["Popular"] && errors["Recommended"] && (
              <span className="text-red-500">
                * Select atleast one checkbox
              </span>
            )}
            <p>
              <input
                onChange={() => {
                  if (
                    photoRef.current.files[0] &&
                    photoRef.current.files[0].type.includes("image")
                  ) {
                    setPhotoErr(false);
                  }
                }}
                ref={photoRef}
                type="file"
                name=""
                id=""
              />
            </p>
            {photoErr && (
              <span className="text-red-500">* Photo is required</span>
            )}
            <button
              type="submit"
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg    hover:bg-slate-300 hover:text-orange-500 hover:scale hover:shadow-lg duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
