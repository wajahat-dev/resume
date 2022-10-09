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
            Hi! My name is Wajahat Ali,{' '}
            <span className="colorRed">Web Developer</span>
          </h3>
        </header>

        <p>
        I am a software engineer, having expertise in web techonologies and cybersecurity. I have good programming experience like, 
        javascript and its frameworksb for creating frontend and backend in collaboration with react, nodejs. I have good knowledge of DBMS.
         i use mongoose. all of these technologies make me A MERN stack developer. 
        In security I have good practice in api security with the help of burpsuite a leading intusdry software. Last I can work in any cloud api.
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
