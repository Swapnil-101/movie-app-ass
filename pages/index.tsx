import getConfig from "next/config";

import Layout from "@/components/Layout";

//component
import MovieCard from "@/components/Home/MovieCard";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <div className="flex gap-4 mt-4 justify-center flex-wrap">
        <MovieCard
          title={"something"}
          imageUrl={
            "https://i0.wp.com/gainsx.in/wp-content/uploads/2023/01/Muscle-Rulz-Pro-Rulz-Chocolate-5lbs.webp?fit=800%2C800&ssl=1"
          }
        />
        <MovieCard
          title={"something"}
          imageUrl={
            "https://i0.wp.com/gainsx.in/wp-content/uploads/2023/01/Muscle-Rulz-Pro-Rulz-Chocolate-5lbs.webp?fit=800%2C800&ssl=1"
          }
        />
        <MovieCard
          title={"something"}
          imageUrl={
            "https://i0.wp.com/gainsx.in/wp-content/uploads/2023/01/Muscle-Rulz-Pro-Rulz-Chocolate-5lbs.webp?fit=800%2C800&ssl=1"
          }
        />{" "}
        <MovieCard
          title={"something"}
          imageUrl={
            "https://i0.wp.com/gainsx.in/wp-content/uploads/2023/01/Muscle-Rulz-Pro-Rulz-Chocolate-5lbs.webp?fit=800%2C800&ssl=1"
          }
        />
        <MovieCard
          title={"something"}
          imageUrl={
            "https://i0.wp.com/gainsx.in/wp-content/uploads/2023/01/Muscle-Rulz-Pro-Rulz-Chocolate-5lbs.webp?fit=800%2C800&ssl=1"
          }
        />
        <MovieCard
          title={"something"}
          imageUrl={
            "https://i0.wp.com/gainsx.in/wp-content/uploads/2023/01/Muscle-Rulz-Pro-Rulz-Chocolate-5lbs.webp?fit=800%2C800&ssl=1"
          }
        />
      </div>
    </Layout>
  );
};

export default Home;
