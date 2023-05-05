import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//axios
import axios from "axios";

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

  const sanitizedText = datatwo?.show?.summary.replace(/<br\s*\/?>/gm, "");
  return (
    <div>
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
        <div
          className="container px-6 py-10 mx-auto"
        
        >
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
              <h3 className="mt-6 text-lg font-medium text-blue-500">
                Mia Brown
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Marketing Manager at Stech
              </p>
              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  title="right arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewPageComponent;