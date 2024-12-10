"use client";

import { PROJECTS } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLink, FaGithub } from "react-icons/fa";

const imageVariants = {
  beforeHover: {},
  onHover: { scale: 1.4 },
};

const Projects = () => {
  return (
    <section className="container mx-auto h-full pt-8 xl:pt-12 p-8">
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
              whileHover="onHover"
              transition={{ duration: 1 }}
              className={`w-full lg:w-1/4 rounded-[5px] bg-accent overflow-hidden relative`}
            >
              <motion.div
                variants={imageVariants}
                className="absolute top-0 left-0 w-full h-full bg-[url('./../public/projects/travel-nest.png')] bg-no-repeat bg-center bg-contain"
              />
              {/* <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="mb-6 rounded"
              /> */}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <Link
                className="mb-2 font-semibold hover:underline"
                href={project.link || ""}
              >
                {project.title}
              </Link>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="inline-block bg-neutral-900 text-accent text-xs px-2 py-1 rounded-full mr-2 mb-2"
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
