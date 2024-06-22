"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/Logo";

const dataProjects = [
  {
    id: 1,
    title: "Car showrooms",
    desc: "An innovative tool that allows users to visualize and customize their dream car in a fully interactive 3D environment",
  },
  {
    id: 2,
    title: "Exhibitions and conferences",
    desc: "bring professionals together to showcase innovations, share knowledge, and network through speeches and workshops",
  },
  {
    id: 3,
    title: "Construction and management companies",
    desc: "Handle project planning, design, construction, and maintenance, ensuring projects are completed on time and within budget",
  },
  {
    id: 4,
    title: "Educational centres",
    desc: "Learning opportunities and resources for students of all ages. Classes, workshops, and programs to enhance knowledge and skills in various subjects",
  },
];

const Projects = () => {
  return (
    <section className="container mx-auto mb-36">
      <div className="mt-[70px] grid gap-y-12">
        {dataProjects.map((project) => {
          return (
            <div key={project.id} className="grid grid-cols-2 gap-x-12">
              <div
                className={`${project.id % 2 === 0 ? " order-1" : ""} rounded-xl border border-blue-500 bg-[#17171A66] p-[58px]`}
              >
                <div className="bg-blue-400 p-8 h-full rounded-xl">
                  <Logo />
                  <div className="mt-6">
                    <h3 className="font-medium text-2xl text-gray-100 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-100 text-base">{project.desc}</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full bg-gray-400">Mock</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
