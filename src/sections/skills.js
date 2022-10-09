import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const mainTechSkills = [
    { name: "React", progress: "90" },
    { name: "Nodejs", progress: "80" },
    { name: "JavaScript", progress: "95" },
    { name: "HTML, CSS, Bootstrap", progress: "80" },
    { name: "GraphQL", progress: "50" },
    { name: "Googling", progress: "90" },
  ];
  const overallCirSkills = [
    { name: "MERNG", progress: "90" },
    { name: "DBMS", progress: "75" },
    { name: "OOP", progress: "85" },
  ];
  const softSkills = [
    "Analytical",
    "Responsible",
    "Problem-Solving",
    "OOP mindset",
  ];
  const softwareSkills = [
    { name: "VS Code", progress: "80" },
    { name: "Visual Studio", progress: "50" },
    { name: "SQL server Studio", progress: "75" },
    { name: "Burp Suite", progress: "75" },
    { name: "Adobe Photoshop", progress: "60" },
    { name: "MS Office", progress: "90" },
  ];
  return (
    <section className="container">
      <div className="containerCont sectionCont  sectionContSkills">
        <header>
          <h2>Skills</h2>
        </header>
        <div className="rowFlexRes breakMainTechOverall">
          <div className="cardContainer">
            <div className="card">
              <h3>Main Tech</h3>
              <ul>
                {mainTechSkills.map((skill, pos) => (
                  <Skill key={pos} skill={skill} />
                ))}
              </ul>
            </div>
          </div>
          <div className="cardContainer">
            <div className="card">
              <h3>Overall</h3>
              <ul className="rowFlexRes breakOverall">
                {overallCirSkills.map((skill, pos) => (
                  <CircularProg key={pos} skill={skill} />
                ))}
              </ul>
              <ul>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(0, 2).map((skill, pos) => (
                      <li key={pos}>
                        <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(2, 4).map((skill, pos) => (
                      <li key={pos}>
                        <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{`${skill}`}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <h3>Software</h3>
            <ul>
              {softwareSkills.map((skill, pos) => (
                <Skill key={pos} skill={skill} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
