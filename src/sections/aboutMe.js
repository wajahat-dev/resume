import { useContext } from 'react';
import { Contexto } from '../appContext';

export default function AboutMe() {
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  const email = 'aliwajahat021@gmail.com';
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>about me</h2>
          <h3>
            Hi! My name is Wajahat,{' '}
            <span className="colorRed">Web Developer</span>
          </h3>
        </header>

        <p>
        I am a software engineer with expertise in full-stack development, specializing in modern web technologies. 
        I have extensive experience developing responsive user interfaces with React.js, TypeScript, and JavaScript, 
        and designing scalable backend services using .NET Core APIs. My work includes implementing micro-frontend 
        architectures, integrating cloud services like AWS (EC2, S3), and writing comprehensive test suites with Jest 
        and Cypress. I am proficient in technologies including C#, TypeScript, JavaScript, Node.js, React.js, Redux, 
        Docker, Git, AWS, RESTful APIs, and GraphQL.
        </p>
        <p>
          I am very passionate and dedicated to my work, i have plenty of
          problem solving, communication and leadership skills; and I'm very
          good at teamwork. You can get in touch with me by filling this{' '}
          <strong>
            <a onClick={openModal}>📄form</a>
          </strong>
          , or you can send me an email to
          <br />
          <strong>
            <a href={`mailto:${email}`}>📧{email}</a>
          </strong>
          ; also you are more than welcome to follow my work on my{' '}
          <strong>
            <a target="_blank" href="https://github.com/wajahat-dev">
              github
            </a>
          </strong>{' '}
          and visit my{' '}
          <strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wajahat-dev/"
            >
              linkedin
            </a>
          </strong>{' '}
          profile.
        </p>
      </div>
    </section>
  );
}
