import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

export default function Experience() {
  return (
    <section className="sectionCont sectionContExperience">
      <div id="experience" className="target"></div>
      <header>
        <h2>Experience</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 21/02/2024 - Current
                </span>
              </h5>
              <h3>Software Engineer</h3>
              <h4>Logiciel Services</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Developed responsive UIs with React.js, TypeScript, JavaScript</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Designed scalable backend services with .NET APIs</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Implemented micro-frontend architecture</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Integrated AWS services (EC2, S3)</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Authored Jest & Cypress tests, reducing regressions by 40%</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Collaborated in Agile teams with Jira and code reviews</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 15/10/2021 - 20/02/2024
                </span>
              </h5>
              <h3>Software Engineer</h3>
              <h4>KCompute</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Delivered full-stack solutions for client & server sides</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Enhanced ReactJS SPAs with REST APIs</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Customized Redux-based components</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Debugged and optimized applications</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Used Jira for bug tracking and project timelines</span>
                </li>
              </ul>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}
