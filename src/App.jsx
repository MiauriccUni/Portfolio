import { Nb } from "./components/Nb";
import Description from "./components/Description";
import { Skills } from "./components/skills";
import { Footer } from "./components/Footer";
import Carousel from "./components/Carousel";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

import image1 from "./assets/skillslogos/1692192289141.png";
import image2 from "./assets/skillslogos/645629-css-wallpaper-top-free-css-background.jpg";
import image3 from "./assets/skillslogos/Azure_SQL_Server.jpg";
import image4 from "./assets/skillslogos/How-to-Run-MySQL-on-Kubernetes-With-Oracles-Operator.jpg";
import image5 from "./assets/skillslogos/OIP.jpg";
import image6 from "./assets/skillslogos/asp.jpg";
import image7 from "./assets/skillslogos/js.jpg";
import image8 from "./assets/skillslogos/react free course.jpg";

import "./assets/css/App.css";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

function App() {
  return (
    <>
      <Nb />
      <section id="home">
        <Description />
      </section>
      <setion id="skills">
        <Skills />
      </setion>
      <Carousel images={images} />
      <section id="proyects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
