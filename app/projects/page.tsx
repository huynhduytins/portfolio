"use client";

import { PROJECTS } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="container mx-auto h-full pt-8 xl:pt-12">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex gap-16 flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="inline-block bg-neutral-900 text-neutral-100 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
