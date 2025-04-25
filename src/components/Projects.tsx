import React from "react";
import swal from "sweetalert";

export function Projects() {
  const projects = [
    {
      id: 1,
      image: "/src/assets/logo/github.svg",
      title: "Clinica Virtual Simepci",
      description:
        "Una clinica virtual que permite a los usuarios, registrarse e iniciar una membresia, para poder acceder a los servicios de la clinica. Tambien se administran diferentes roles como, Cliente, Cliente Premium, Administrador y Medico.",
      tags: ["Bootstrap", "MVC", ".Net 8", "C#", "Azure SQL", "jQuery"],

      githubUrl: "https://github.com/MiauriccUni/Clinica",
    },
    {
      id: 2,
      image: "/src/assets/logo/github.svg",
      title: "Gymnasio Virtual Rambo's Gym",
      description:
        "Un Gymnasion con un sistema de membresias, donde los usuarios pueden registrarse y pagar su membresia, ademas de poder ver los diferentes servicios que ofrece el gimnasio.",
      tags: ["Bootstrap", "MVC", ".Net 8", "C#", "Azure SQL", "jQuery"],

      githubUrl: "https://github.com/MiauriccUni/Proyecto",
    },
  ];
  return (
    <section id="projects" className="section-padding bg-light fluid">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h2 className="display-5 fw-bold mb-3">Mis Proyectos</h2>
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
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 ">
              <div className="card project-card shadow-sm">
                <img
                  src={project.image || "/placeholder.svg"}
                  className="card-img-top project-image"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge bg-primary me-1 mb-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-footer container center">
                  <a
                    href={project.githubUrl}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="bi bi-github me-1"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
