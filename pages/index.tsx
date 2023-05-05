import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Layout from "@/components/Layout";
import Link from "next/link";

//axios
import axios from "axios";

//component
import MovieCard from "@/components/Home/MovieCard";
import Searchbox from "@/components/Home/Searchbox";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  const [data, setData] = useState<any>([]);

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

  return (
    <Layout>
      <div className="flex justify-center items-center mt-8 gap-4">
        <Searchbox
        // search={search}
        // setSearch={setSearch}
        // filterBySearch={filterBySearch}
        />
      </div>
      <div className="flex gap-4 mt-4 justify-center flex-wrap">
        {data?.map((itm: any) => {
          return (
            <Link href={`/${itm.show.id}`}>
              <MovieCard
                key={itm.score}
                title={itm?.show?.name}
                imageUrl={itm?.show?.image?.medium}
                rating={itm?.show?.rating?.average}
              />
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
