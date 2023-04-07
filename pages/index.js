import React from "react";
import Hero from "../components/sections/Hero";
import Navbar from "@/components/sections/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
