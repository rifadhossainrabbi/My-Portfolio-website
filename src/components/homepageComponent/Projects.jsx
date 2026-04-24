import React from 'react';
import useProjects from '../../assets/hooks/allProjects';
import { HashLoader } from 'react-spinners';

const Projects = () => {
  const { projects, loading } = useProjects();
  console.log(projects, 'Projects', loading, 'Loadign');

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <HashLoader color="blue" />
      </div>
    );
  }
  return (
    <div className="max-w-9/12 mx-auto">
      <p className="font-semibold text-[#494b90]">03</p>
      <p className="text-xl font-bold mb-2">My Projects</p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#151b29]">
            <figure>
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-[200px] object-coverl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
