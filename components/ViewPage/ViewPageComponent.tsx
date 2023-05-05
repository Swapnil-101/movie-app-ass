import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Header from "@/components/Home/Header"

//axios
import axios from "axios";
import Model from "./Model";

const ViewPageComponent: React.FC = () => {
  const [data, setData] = useState<any>([]);

  const router = useRouter();

  //api call
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("state", data);
  }, [data]);

  const datatwo = data?.find(
    (itm: any) => Number(itm.show.id) === Number(router.query.id)
  );

  console.log("datatwo", datatwo);
  console.log(
    "asdad==>",
    data.find((i: any) => {
      console.log("data", Number(i.show.id) === Number(router.query.id));
    })
  );

  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const sanitizedText = datatwo?.show?.summary
    .replace(/<br>/g, "")
    .replace(/<\/?p>/g, "")
    .replace(/<\/?b>/g, "");
  return (
    <div>
      <Header/>
      <section>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50% 75%",
            backgroundImage: `url(${datatwo?.show?.image?.original})`,
            height: "800px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  {datatwo?.show?.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="bg-gray-100 flex flex-col justify-center">
        <div className="relative m-3 flex flex-wrap mx-auto justify-center">
          <div className="min-w-[340px]flex flex-col group">
            <div className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
              <img
                src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
                className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                alt=""
              />
              <div className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
            </div>
            <a
              href="./single_post.html"
              className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1"
            >
              Wild West Hoodie
            </a>
            <p className="mb-4 font-light text-sm md:text-sm text-center text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className="flex justify-center gap-x-3">
              <a
                href="/track_order.html"
                className="px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold"
              >
                Add
              </a>
              <a
                href="/track_order.html"
                className="px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={datatwo?.show?.image?.original}
              alt="image"
            />
            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                {datatwo?.show?.name}
              </h1>
              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                {sanitizedText}
              </p>

              <div className="">
                <div className="mt-5 flex items-center">
                  <h1 className="text-yellow-400">IMDB</h1>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                    {datatwo?.show?.rating?.average}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1>
                  Released:{" "}
                  <span className="text-[#FFC933]">
                    {datatwo?.show?.premiered}
                  </span>
                </h1>
                <h1>
                  Status:{" "}
                  <span className="text-[#FFC933]">
                    {datatwo?.show?.status}
                  </span>
                </h1>

                <h1>
                  Type:{" "}
                  <span className="text-[#FFC933]">{datatwo?.show?.type}</span>
                </h1>

                <h1>
                  {" "}
                  language:{" "}
                  <span className="text-[#FFC933]">
                    {datatwo?.show?.language}
                  </span>
                </h1>
              </div>
              <div className="mt-5">
                <Model moviename={datatwo?.show?.name} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewPageComponent;
