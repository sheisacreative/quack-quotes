import React from "react";
import Hero from "../components/sections/Hero";
import QuotesList from "@/components/sections/QuotesList";
import QuackTitle from "@/components/sections/QuackTitle";

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
