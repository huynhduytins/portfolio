"use client";

import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

const imageVariants = {
  beforeHover: {},
  onHover: { scale: 1.4 },
};

const Projects = () => {
  return (
    <section className="container mx-auto h-full pt-8 xl:pt-12 p-8">
      <h1 className="my-20 text-center text-4xl">My Side Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex gap-8 xl:gap-16 flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              whileHover="onHover"
              transition={{ duration: 1 }}
              className={`w-full max-w-96 lg:w-1/4 min-h-44 rounded bg-white overflow-hidden relative`}
            >
              <motion.div
                variants={imageVariants}
                style={{
                  backgroundImage: `url('${project.image}')`,
                }}
                className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain"
              />
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
                <BiLinkExternal className="inline-block ml-2" />
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
