import React from "react";
import Banner from "../../Components/Banner/Banner";
import Lawyers from "../../Components/Lawyers/Lawyers";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Lawyers data={data}></Lawyers>
    </div>
  );
};

export default Home;
