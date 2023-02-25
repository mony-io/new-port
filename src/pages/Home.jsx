import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
      </section>
    </div>
  );
};

export default Home;
