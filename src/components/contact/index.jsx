import { h } from "preact";
// import "./Contact.css";

const Contact = () => (
  <section id='contact'>
    <h2>Contact</h2>
    <p>
      Email: <a href='mailto:your.email@example.com'>your.email@example.com</a>
    </p>
    <p>
      LinkedIn:{" "}
      <a
        href='https://linkedin.com/in/yourprofile'
        target='_blank'
        rel='noopener noreferrer'
      >
        Your LinkedIn
      </a>
    </p>
  </section>
);

export default Contact;
