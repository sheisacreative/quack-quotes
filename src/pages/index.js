import React from "react";
import Hero from "../components/sections/Hero";
import QuotesList from "@/src/components/sections/QuotesList";
import QuackTitle from "@/src/components/sections/QuackTitle";

const Home = () => {
  return (
    <main>
      <QuackTitle />
      <Hero />
      <QuotesList />
    </main>
  );
};

export default Home;
