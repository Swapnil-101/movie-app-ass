import React from "react";

interface MovieCardProps {
  title: string;
  imageUrl: string;
  rating:any;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, imageUrl, rating }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[22rem] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div
            className="h-[236px]"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {title}
            </p>

            <p className="text-[#7C7C80] font-[15px] mt-6">
              Our shrimp sauce is made with mozarella, a creamy taste of shrimp
              with extra kick of spices.
            </p>

            <div className="flex flex-row justify-end">
              <div className="flex items-center">
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
                  {rating}
                </p>
              </div>
            </div>

            <a
              target="_blank"
              href="foodiesapp://food/1001"
              className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Click to View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
