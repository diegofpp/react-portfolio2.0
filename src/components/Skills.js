import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git'];

  return (
    <section id="skills">
    <div className="mt-1">
        <h1 className="text-3xl md:text-4xl font-bold mt-20 text-center tracking-tighter"><span className="text-white bg-black inline-block">Skills</span>.</h1>
    </div>

      <div className="border border-red-800 flex flex-wrap justify-center items-center mt-8 mb-16">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-200 rounded-full px-3 py-1 mx-2 my-2 text-xs md:text-sm font-medium text-gray-800"
          >
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
