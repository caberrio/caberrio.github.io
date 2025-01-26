import { h } from "preact";
// import "./Skills.css";

const skills = [
  "Preact",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "Responsive Design",
];

const Skills = () => (
  <section id='skills'>
    <h2>Skills</h2>
    <ul className='skills-list'>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
