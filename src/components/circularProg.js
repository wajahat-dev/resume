import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function circularProg({ skill }) {
  return (
    <li className="circleSkillContainer">
      <div>
        <svg style={{ height: 0, width: 0 }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgressbar
          value={skill.progress}
          text={`${skill.progress}%`}
          styles={buildStyles({
            pathColor: "url(#gradient)",
            textColor: "#00d4ff",
            trailColor: "rgba(102, 126, 234, 0.2)",
            textSize: "16px",
          })}
        />
      </div>
      <div>{skill.name}</div>
    </li>
  );
}
