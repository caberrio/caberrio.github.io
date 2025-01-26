import { h } from "preact";
// import "./Experience.css";

const experiences = [
  {
    company: "Company A",
    role: "Front End Developer",
    period: "Jan 2022 - Present",
    description:
      "Worked on building responsive web applications using Preact.js.",
  },
  {
    company: "Company B",
    role: "Web Developer",
    period: "Jan 2020 - Dec 2021",
    description:
      "Developed and maintained several projects using JavaScript, HTML, and CSS.",
  },
];

const Experience = () => (
  <section id='experience'>
    <h2>Work Experience</h2>
    <div className='experience-list'>
      {experiences.map((exp, index) => (
        <div key={index} className='experience-item'>
          <h3>
            {exp.role} @ {exp.company}
          </h3>
          <p>{exp.period}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
