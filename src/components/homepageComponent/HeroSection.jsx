import React from 'react';
import HeroImage from '../../assets/image_by_grok2-removebg-preview.png';
import { IoArrowForwardOutline, IoLogoGithub } from 'react-icons/io5';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="h-auto lg:h-[50vh] my-6">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center max-w-9/12 mx-auto gap-6">
        {/* Right side Image Section */}
        <img
          src={HeroImage}
          alt="Hero Image"
          className="max-w-sm w-8/12 sm:w-6/12 lg:w-10/12 rounded-full"
        />

        {/* Left side section */}
        <div className="mt-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl">
            <span className="bg-linear-to-tl from-[#7263e4] to-[#6b57ff] bg-clip-text text-transparent">
              Hi, I'm
            </span>
          </h1>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Rifad Hossain
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl">
            Aspiring{' '}
            <span className="bg-linear-to-r from-[#3599e8] to-[#475ae8] bg-clip-text text-transparent font-bold">
              Full Stack
            </span>{' '}
            Web Developer
          </h2>

          <p className="py-4 text-sm sm:text-base">
            I build modern, responsive and user-friendly web applications
          </p>

          {/* Left side buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-center lg:justify-start">
            <button className="btn btn-primary bg-blue-500 rounded-md w-full sm:w-auto">
              View Projects <IoArrowForwardOutline />
            </button>

            <button className="btn btn-primary bg-transparent rounded-md w-full sm:w-auto">
              Contact Me <IoArrowForwardOutline />
            </button>
          </div>

          <div className="mt-4">
            <p className="mb-2.5">Follow me on</p>

            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href="https://github.com/rifadhossainrabbi"
                target="_blank"
                rel="noopener noreferrer">
                <IoLogoGithub size={25} />
              </a>

              <a
                href="https://linkedin.com/in/rifad-hossain-rabbi-6b51443b6"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin size={25} color="#1564cc" />
              </a>

              <a
                href="https://www.facebook.com/rifad.hossain.7796"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook size={25} color="#1564cc" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
