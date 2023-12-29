import React from 'react';
import { motion } from 'framer-motion';
import { LiaDownloadSolid } from 'react-icons/lia';
import fid from '../assets/images/fid.png';

function About() {
  return (
    <div id="About" className="bg-gray-50 py-28 dark:bg-neutral">
      <div className="max-w-custom mx-auto px-5">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-16 text-center text-newDarkGray dark:text-white"
        >
          <h2 className="font-semibold text-4xl mb-3">About Me</h2>
          <p>My introduction</p>
        </motion.article>
        <div className="card grid grid-cols-1 space-y-10 md:gap-12 md:space-y-0 md:grid-cols-2">
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={fid} alt="about-pics" className="h-80 " />
          </motion.figure>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="card-body p-0 dark:text-white"
          >
            <span>
              Hello, I’m a Front-End Developer! I specialize in crafting
              engaging and responsive user interfaces that bring websites and
              applications to life. Take a glance at some of my projects and
              expertise! If you appreciate my work and have a web design or
              front-end development project in mind, feel free to reach out. I'm
              eager to contribute to the success of your digital endeavors.
              <br />
              <br />
              Email me <br />
              <span className="font-semibold">Afimiafidelis95@gmail.com</span>
              <div>
                <a
                  href="https://drive.google.com/file/d/1Pf6WkcfjZY4F-ash5zu2v4X1rJuZITvG/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                  className="p-3 px-6 w-36 my-7 text-white font-bold bg-newYellow rounded-md flex gap-1 justify-center hover:bg-transparent hover:text-newDarkGray hover:border-2 hover:border-newYellow dark:hover:text-white"
                >
                  <LiaDownloadSolid className="text-2xl" />
                  Resume
                </a>
              </div>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
