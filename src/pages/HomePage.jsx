import React from 'react';
import HeroSection from '../components/homepageComponent/HeroSection';
import AboutMeSection from '../components/homepageComponent/AboutMeSection';
import SkillsSection from '../components/homepageComponent/SkillsSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="bg-linear-to-b from-[#10141f] to-[#0e151f] pb-8">
        <AboutMeSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default HomePage;
