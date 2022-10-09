import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function Education() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2020 - 2024
                </span>
              </h5>
              <h3>Bachelor of Engineering</h3>
              <h4>Sindh Madressat-ul Islam</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Software Engineering</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2016-2018
                </span>
              </h5>
              <h3>High School</h3>
              <h4>Federal Collage Cantt</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span> <span>Science Group</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
