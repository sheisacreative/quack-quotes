import React from "react";
import Hero from "../components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import QuotesList from "@/components/sections/QuotesList";
import QuackTitle from "@/components/sections/QuackTitle";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <QuackTitle />
        <Hero />
        <QuotesList />
      </main>
    </>
  );
};

export default Home;
