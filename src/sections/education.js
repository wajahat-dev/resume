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
              <h3>Bachelor of Software Engineering</h3>
              <h4>Sindh Madressatul Islam University</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Karachi, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
