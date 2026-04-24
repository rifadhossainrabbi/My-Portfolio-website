import React from 'react';
import HTMLpic from '../../assets/html-removebg-preview.png'
import CSSpic from '../../assets//css-removebg-preview.png'
import Jspic from '../../assets/javascript-removebg-preview.png'
import Tailwind from '../../assets/tailwind-removebg.png'
import Reactimg from '../../assets/react-removebg.png'
import Figmaimg from '../../assets/figma.png'
// import Gitimg from '../../assets/github-icon-14-removebg-preview.png'
import { FaGithub } from 'react-icons/fa6';

const SkillsSection = () => {
  return (
    <div className="max-w-9/12 mx-auto">
      <p className="font-semibold text-[#494b90]">02</p>
      <p className='text-xl font-bold mb-2'>My Skills</p>
      <div className="grid grid-cols-4 gap-3">
        <div className="flex flex-col justify-center items-center rounded-md p-2 bg-[#161c2a]">
          <img src={HTMLpic} className="w-[100px]" alt="HTML5" />
          <p>HTML5</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md p-2 bg-[#161c2a]">
          <img src={CSSpic} className="w-[90px]" alt="CSS3" />
          <p>CSS3</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md p-2 bg-[#161c2a]">
          <img src={Jspic} className="w-[150px]" alt="Javascript" />
          <p>Javascript</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md p-2 bg-[#161c2a]">
          <img src={Tailwind} className="w-[110px]" alt="Tailwind CSS" />
          <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md p-2 bg-[#161c2a]">
          <img src={Reactimg} className="w-[80px]" alt="React" />
          <p>React</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md p-2 bg-[#161c2a]">
          <FaGithub size={70} />
          <p className='mt-2'>Git & Github</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md p-2 bg-[#161c2a]">
          <img src={Figmaimg} className="w-[80px]" alt="Figma" />
          <p className='mt-1.5'>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
