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
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2021 - Present
                </span>
              </h5>
              <h3>React Developer</h3>
              <h4>Kcompute </h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>UI Components Development</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Binding of UI element to Backend</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Responsive to change request</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>debugging, fixings</span>
                </li>
              </ul>
            </div>
            {/* <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2019
                </span>
              </h5>
              <h3>Quality Assurance Assistant</h3>
              <h4>{' & '}</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Product quality assurance and control</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Supply chain management</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Value chain analysis</span>
                </li>
              </ul>
            </div> */}
          </div> 
        </div>
      </div>
    </section>
  );
}
