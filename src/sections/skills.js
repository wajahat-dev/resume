import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const mainTechSkills = [
    { name: "C#", progress: "85" },
    { name: "TypeScript", progress: "90" },
    { name: "JavaScript", progress: "95" },
    { name: "Node.js", progress: "85" },
    { name: ".NET Core", progress: "85" },
    { name: "React.js", progress: "90" },
    { name: "Redux", progress: "85" },
    { name: "GraphQL", progress: "75" },
    { name: "RESTful APIs", progress: "90" },
  ];
  const overallCirSkills = [
    { name: "Full-Stack", progress: "90" },
    { name: "AWS", progress: "80" },
    { name: "Docker", progress: "75" },
  ];
  const softSkills = [
    "Problem-Solving",
    "Agile Methodology",
    "Code Reviews",
    "Team Collaboration",
  ];
  const softwareSkills = [
    { name: "Git", progress: "90" },
    { name: "Docker", progress: "75" },
    { name: "AWS (EC2, S3)", progress: "80" },
    { name: "Jira", progress: "85" },
    { name: "Jest & Cypress", progress: "80" },
    { name: "VS Code", progress: "90" },
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
