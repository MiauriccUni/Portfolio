import React from "react";
import pr from "../assets/logo/1721343141361.jpg";
import { Container } from "react-bootstrap";

function Description() {
  const dowloadCV = () => {
    const fileUrl =
      "https://1drv.ms/b/c/7caa4847af6ec76a/EaPt_J76dqZGg9qUFHHOi1YBjqbzq9SkZKR25sUeYI9GGg?e=TayVJ3";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV_Ricardo_Valverde.pdf"; // Nombre del archivo a descargar
    link.click();
  };
  return (
    <>
      <section id="description" className="center-content">
        <Container className="text-content">
          <div className="text-center">
            <div className="imgprofile center-content">
              <img src={pr} alt="img" className="photo fluid" />
            </div>
            <h1>Acerca de Mí</h1>
            <p className="center fluid">
              Me llamo Ricardo, soy Desarrollador Web Full Stack con enfoque en
              desarrollo Web y APIs Rest, usando tecnologías como: C# con
              .Netcore 8 para el Back-end y enlace con la base de datos, Azure
              SQL para la base de datos y el modelo MVC para la arquitectura y
              el patrón de diseño en el Front-End. Tambien soy Tecnico en
              Electronica y Mantenimiento de Equipos de Computo y Tecnico en
              Redes.
            </p>
            <button id="buttonCV" onClick={dowloadCV} className="center btn">
              <p>Acá puesdes descargar mi CV en PDF, español e ingles.</p>
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Description;
