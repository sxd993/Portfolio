import React from 'react';
import Team from '@components/Home/Team/Team';
import WorkExperience from '@components/Home/WorkExperience/WorkExperience';
import WhyChooseUs from '@components/Home/WhyChooseUs/WhyChooseUs';
import Project from '@components/Home/Project/Project';
import TestimonialSlider from '@components/Home/TestimonialSlider/TestimonialSlider';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <WhyChooseUs />
      <Team />
      <WorkExperience />
      <Project />
      <TestimonialSlider />
    </div>
  );
};

export default Home;