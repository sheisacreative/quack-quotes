import React from "react";
import Hero from "../components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import QuotesList from "@/components/sections/QuotesList";
import QuackTitle from "@/components/sections/QuackTitle";
import Footer from "@/components/sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <QuackTitle />
        <Hero />
        <QuotesList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
