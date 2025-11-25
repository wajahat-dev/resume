import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  const projects = [
    {
      title: "SuperSecure Project",
      description: "A comprehensive security solution designed to protect applications from various cyber threats, including data leakage, insecure APIs, and third-party integration risks. Built with modern security best practices.",
      technologies: ["React.js", "TypeScript", ".NET Core", "Security"],
      liveUrl: "https://lbs-rmnmtqz5i-wajahat-dev.vercel.app/",
      github: "https://github.com/wajahat-dev",
    },
    {
      title: "Crypto App",
      description: "A user-friendly cryptocurrency application that enables secure storage, management, and transactions of various digital assets. Features real-time market data and portfolio tracking.",
      technologies: ["React.js", "JavaScript", "Node.js", "Blockchain"],
      liveUrl: "https://invoice-a4.vercel.app/",
      github: "https://github.com/wajahat-dev",
    },
    {
      title: "SendMyDetails",
      description: "A secure platform facilitating the sharing of personal information and demands with trusted entities, ensuring data privacy and integrity. Streamlined communication solution.",
      technologies: ["React.js", "TypeScript", "Node.js", "Security"],
      liveUrl: "https://sendmydemand.com/",
      github: "https://github.com/wajahat-dev",
    },
    {
      title: "Infringement Control",
      description: "A comprehensive tool designed to monitor and manage intellectual property rights, helping users detect and address potential infringements. Automated monitoring and reporting system.",
      technologies: ["React.js", "TypeScript", ".NET Core", "API Integration"],
      liveUrl: "https://infringement-control.vercel.app/",
      github: "https://github.com/wajahat-dev",
    },
    {
      title: "Unity Business Solutions",
      description: "A comprehensive business solutions platform offering corporate branding, office supplies, digital marketing, event management, and global travel services. End-to-end business solution provider.",
      technologies: ["React.js", "TypeScript", "Node.js", "Full-Stack"],
      liveUrl: "https://unitybusiness.solutions/",
      github: "https://github.com/wajahat-dev",
    },
    {
      title: "Trip and Travel",
      description: "A full-featured travel platform for planning vacations with visa assistance, hotel bookings, worldwide travel insurance, international and domestic tours, and Umrah services. Complete travel management solution.",
      technologies: ["React.js", "TypeScript", "Node.js", "AWS", "Payment Integration"],
      liveUrl: "https://tripntravel.pk/",
      github: "https://github.com/wajahat-dev",
    },
  ];

  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContProjects">
        <div id="projects" className="target"></div>
        <header>
          <h2>Projects</h2>
        </header>
        <div className="cardContainer">
          <div className="card">
            <div className="cardContent">
              {projects.map((project, index) => (
                <div key={index} className="cardCont">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <strong>Technologies: </strong>
                    <span>{project.technologies.join(" • ")}</span>
                  </div>
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
                    {project.liveUrl && (
                      <a
                        target="_blank"
                        href={project.liveUrl}
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "var(--red)",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        target="_blank"
                        href={project.github}
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "var(--red)",
                          textDecoration: "none",
                        }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        <span>View on GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

