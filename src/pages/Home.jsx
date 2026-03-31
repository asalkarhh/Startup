import React from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsPreview from '../components/ProjectsPreview';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home = () => (
  <>
    <Hero />
    <AboutPreview />
    <ServicesPreview />
    <WhyChooseUs />
    <ProjectsPreview />
    <Stats />
    <Testimonials />
    <CTASection />
  </>
);

export default Home;