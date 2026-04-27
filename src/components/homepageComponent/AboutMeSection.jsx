import React from 'react';
import BannerImg from '../../assets/BAnnerImage2.png';
import { IoPerson } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';

const AboutMeSection = () => {
  return (
    <div className="py-5">
      <div className="max-w-9/12 mx-auto">
        <p className="mb-1 font-semibold text-[#494b90]">01</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 min-h-[40vh]">
          {/* left side image */}
          <div className="lg:col-span-6">
            <p className="text-xl font-bold mb-2">About me</p>

            <img
              src={BannerImg}
              className="w-full max-w-[500px] mx-auto lg:mx-0 rounded-lg shadow-2xl"
            />
          </div>

          {/* right side */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl font-bold">
              I am a passionate{' '}
              <span className="text-[#4a8bb9]">Web Developer</span>. <br />
              Who loves to build amazing web experiences.
            </h1>

            <p className="py-6 text-sm sm:text-base">
              I enjoy turning ideas into real-world products using <br />
              modern technologies. Currently, I'm focused on <br />
              building Next.js applications and improving my problem solving
              skills.
            </p>

            {/* Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <div className="bg-[#1c2440] rounded-md p-2">
                  <IoPerson size={25} />
                </div>
                <div>
                  <h1>Name</h1>
                  <p className="text-sm">Rifad Hossain</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <div className="bg-[#1c2440] rounded-md p-2">
                  <FaLocationDot size={25} color="white" />
                </div>
                <div>
                  <h1>Location</h1>
                  <p className="text-sm">Bangladesh</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <div className="bg-[#1c2440] rounded-md p-2">
                  <MdOutlineMailOutline size={25} color="#6dadf7" />
                </div>
                <div>
                  <h1>Email</h1>
                  <p className="text-sm break-all">rifatraihansha@gmail.com</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <div className="bg-[#1c2440] rounded-md p-2">
                  <FaDotCircle size={25} color="green" />
                </div>
                <div>
                  <h1>Availability</h1>
                  <p className="text-sm">Available for work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider max-w-9/12 mx-auto"></div>
    </div>
  );
};

export default AboutMeSection;
