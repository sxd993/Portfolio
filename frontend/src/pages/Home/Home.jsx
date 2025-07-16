import React from 'react';
import Team from '@components/Team/Team';
import WorkExperience from '@components/WorkExperience/WorkExperience';
import WhyChooseUs from '@components/WhyChooseUs/WhyChooseUs';
import Project from '@components/Project/Project';
import TestimonialSlider from '@components/TestimonialSlider/TestimonialSlider';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Team />
      <WorkExperience />
      <WhyChooseUs />
      <Project />
      <TestimonialSlider />
    </div>
  );
};

export default Home;