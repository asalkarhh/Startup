import React from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsPreview from '../components/ProjectsPreview';
// import Stats from '../components/Stats';
// import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home = () => (
  <>
    <Hero />
    <AboutPreview />
    <ServicesPreview />
    <WhyChooseUs />
    <ProjectsPreview />
    {/* <Stats /> */}{/* Commented out — no clients yet; re-enable once we have real data */}
    {/* <Testimonials /> */}{/* Commented out — no client reviews yet */}
    <CTASection />
  </>
);

export default Home;