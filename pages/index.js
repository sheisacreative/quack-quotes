import React from "react";
import Hero from "../components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import QuotesList from "@/components/sections/QuotesList";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuotesList />
      </main>
    </>
  );
};

export default Home;
