import React from "react";
// src/main.tsx or main.jsx
import "bootstrap-icons/font/bootstrap-icons.css";

export function Skills() {
  const skillscategories = [
    {
      id: 1,
      title: "Frontend",
      icon: "bi-laptop",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    },
    {
      id: 2,
      title: "Backend",
      icon: "bi-server",
      technologies: ["C#", ".Net Core8", "ASP.NET"],
    },
    {
      id: 3,
      title: "Database",
      icon: "bi-database",
      technologies: ["Azure SQL", "Oracle SQL", "MySQL"],
    },
    {
      id: 4,
      title: "Librerias",
      icon: "bi-book",
      technologies: ["Newtonsoft", "Linq", "Security.Cryptography"],
    },
    {
      id: 5,
      title: "Otras Habilidades",
      icon: "bi-tools",
      technologies: ["Git", "Postman", "Swagger", "Github", "Azure DevOps"],
    },
    {
      id: 6,
      title: "Otros lenguages de programación",
      icon: "bi-code-slash",
      technologies: ["Python", "Java", "Typescript", "C++"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h2 className="display-5 fw-bold mb-3">Mis habilidades</h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="bi bi-star-fill"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {skillscategories.map((category) => (
            <div key={category.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className={`bi ${category.icon} skill-icon`}></i>
                  <h3 className="h4 mb-3">{category.title}</h3>
                  <div className="d-flex flex-wrap justify-content-center gap-2 fluid">
                    {category.technologies.map((skill) => (
                      <span
                        key={skill}
                        className="badge bg-light text-dark p-2 mb-1"
                        id="skillcard"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
