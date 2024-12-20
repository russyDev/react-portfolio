import React, { useState } from 'react';
import { Modal } from '../../../components/modal';
import reactBg from 'src/assets/bg/react-bg.jpeg';
import fullStack from 'src/assets/bg/fullstack-bg.jpeg';
import fullStack2 from 'src/assets/bg/fullstack-bg-2.jpeg';
import fullStack3 from 'src/assets/bg/fullstack-bg-3.jpeg';
import wordpress from 'src/assets/bg/wordpress-bg.jpeg';

const experiences = [
  {
    position: 'Senior Frontend Developer',
    company: 'Svitla Systems, Inc.',
    date: 'oct 2022 - ongoing',
    description: [
      'Since October 2022, I have been working with Svitla Systems, Inc., a leading software development company known for delivering top-quality solutions to clients. In my current role, I have been actively involved in creating a new website using the React JS framework.',
      "Working with Svitla Systems has provided me the opportunity to leverage my expertise in React to build a modern, high-performance website that offers an exceptional user experience. I have been collaborating closely with the team to ensure that the site's frontend architecture is robust, scalable, and easy to maintain.",
    ],
    bg: reactBg,
  },
  {
    position: 'Full Stack Engineer',
    company: 'Hero Teams',
    date: 'sep 2018 - oct 2022',
    description: [
      'During my time here, I have primarily focused on harnessing the power of React to create visually appealing and highly functional frontend applications.',
      'In addition to my expertise in React, I have also gained proficiency in writing autotests using the Cypress framework. This experience has allowed me to ensure the reliability and stability of the applications I develop, providing users with seamless and intuitive experiences.',
      'My tenure at the IT Company has provided me with the opportunity to work on a variety of projects, constantly expanding my skill set and delivering top-notch solutions to clients.',
    ],
    bg: fullStack,
  },
  {
    position: 'Full-stack Developer',
    company: 'Loud & Clear',
    date: 'dec 2013 - sep 2018',
    description: [
      'From December 2013 to September 2018, I held the position of a Full-stack Developer at Loud & Clear. During my time there, I was responsible for a wide range of tasks that showcased my versatility and expertise in web development.',
      'One of my primary responsibilities was creating custom WordPress themes and plugins, which allowed clients to have a unique and tailored digital presence. My work in WordPress helped businesses establish their brand identity and create a strong online foundation.',
      'Another area of focus during my tenure at Loud & Clear was backend API development using the Laravel framework. My proficiency in Laravel allowed me to build robust and secure backend systems, streamlining data management and ensuring seamless integration with frontend interfaces.',
      'Overall, my time at Loud & Clear provided me with valuable experience and a diverse skill set that allowed me to excel as a Full-stack Developer, delivering top-notch solutions across various aspects of web development.',
    ],
    bg: fullStack2,
  },
  {
    position: 'Full-stack Developer',
    company: 'PixelTeh',
    date: 'jan 2013 - dec 2013',
    description: [
      'From February 2013 to December 2013, I worked as a Full-stack Developer at PixelTeh, an innovative web development agency. My tenure at the company provided me with a solid foundation in various aspects of web development, allowing me to hone my skills and expertise.',
      'One of my primary responsibilities at PixelTeh was creating custom WordPress themes and plugins. This involved working closely with clients to understand their unique requirements and delivering tailor-made solutions that helped establish their online presence and brand identity.',
      'In addition to my work with WordPress, I also gained valuable experience in building websites from scratch using the CodeIgniter framework. My proficiency in Codeigniter allowed me to create robust and scalable web applications that catered to the specific needs of each project.',
      'My time at PixelTeh served as a crucial stepping stone in my career as a Full-stack Developer, equipping me with the diverse skill set necessary to excel in the ever-evolving world of web development.',
    ],
    bg: fullStack3,
  },
  {
    position: 'Wordpress - developer',
    company: 'BestWebSoft',
    date: 'june 2011 - jan 2013',
    description: [
      'From June 2011 to February 2013, I worked as a WordPress Developer at BestWebSoft. This early stage of my career allowed me to develop a strong foundation in WordPress development, which has since become one of my core areas of expertise.',
      'During my time at BestWebSoft, my primary responsibilities included creating custom WordPress themes and plugins. This involved working closely with clients to understand their specific needs, preferences, and goals. With a keen eye for detail and a deep understanding of WordPress functionality, I was able to design and develop unique solutions that helped businesses establish a strong online presence and effectively communicate their brand values.',
      'My experience at BestWebSoft not only allowed me to refine my skills in WordPress development but also instilled in me a dedication to delivering high-quality and personalized web solutions that cater to the unique requirements of each client. This commitment to excellence has continued to shape my approach to web development throughout my career.',
    ],
    bg: wordpress,
  },
];

export const Experience = () => {
  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section className="container mx-auto px-4 mt-10">
      <p className="uppercase text-main font-medium mb-5">- Experience</p>
      <h1 className="text-4xl font-bold text-primaryDark mb-10">Everything about me!</h1>

      <div className={`grid grid-cols-1 xl:grid-cols-2 gap-10`}>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white p-10 transition duration-300 cursor-pointer hover:translate-y-[-10px] rounded"
            onClick={() => {
              setSelectedExperience(experience);
              setOpen(true);
            }}
          >
            <div className="flex justify-between mb-1">
              <div className="text-orange-400 font-bold text-base capitalize">
                {experience.date}
              </div>
              <div className="text-main font-semibold text-xl">{experience.company}</div>
            </div>
            <h3 className="text-primaryDark font-bold text-xl mb-4">{experience.position}</h3>
            <p className="regular-text mb-4">{experience.description[0]}</p>
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="pb-4">
          <img
            src={selectedExperience.bg}
            alt={selectedExperience.position}
            className="object-cover w-full h-96 rounded-t"
          />
          <div className=" mt-4">
            <span className="inline-block rounded bg-primaryDark text-orange-400 font-bold text-base p-2 capitalize">
              {selectedExperience.date}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-main font-semibold text-base">{selectedExperience.company}</span>
          </div>
          <div className="mt-2">
            <h3 className="text-primaryDark font-bold text-2xl">{selectedExperience.position}</h3>
          </div>
          <div>
            {selectedExperience.description.map((desc, index) => (
              <p key={index} className="regular-text mt-4">
                {desc}
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};
