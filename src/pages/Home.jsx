import React from 'react';
import About from '../components/About';
import AllProjects from '../components/AllProjects';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="h-[90vh] lg:h-screen">
        <Hero />
      </section>
      <section className="h-[110vh] md:h-screen">
        <About />
      </section>
      <section className="h-[60vh] lg:h-[50vh]">
        <Skills />
      </section>
      <section className="h-auto">
        <Projects />
      </section>
      <section className="h-auto">
        <AllProjects />
      </section>
      <section className='h-auto'>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
