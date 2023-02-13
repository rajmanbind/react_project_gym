import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
const About = () => {
  return (
    <div>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos velit,
        autem fuga error ut provident quae saepe necessitatibus magni ipsa iste
        impedit!
      </Header>
      <section className="about__story">
        <div className="container about__story_container">
          <div className="about__section_image">
            <img src={StoryImage} alt="About Story" />
          </div>
          <div className="about__section_content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates reiciendis eos cupiditate dolor commodi laborum ea, ut
              quisquam corrupti incidunt eveniet esse. Adipisci inventore
              obcaecati voluptatem perferendis placeat aliquid similique
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              quasi nam molestias labore ipsum iure nostrum, perspiciatis
              pariatur nemo error dignissimos impedit, eveniet fuga amet
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              temporibus nisi quis, nemo optio consectetur sunt inventore
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__story_container">
        
          <div className="about__section_content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates reiciendis eos cupiditate dolor commodi laborum ea, ut
              quisquam corrupti incidunt eveniet esse. Adipisci inventore
              obcaecati voluptatem perferendis placeat aliquid similique
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              quasi nam molestias labore ipsum iure nostrum, perspiciatis
              temporibus nisi quis, nemo optio consectetur sunt inventore
            </p>
          </div>
          <div className="about__section_image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission_container">
          <div className="about__section_image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section_content">
            <h1>Mision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates reiciendis eos cupiditate dolor commodi laborum ea, ut
              quisquam corrupti incidunt eveniet esse. Adipisci inventore
              obcaecati voluptatem perferendis placeat aliquid similique
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              quasi nam molestias labore ipsum iure nostrum, perspiciatis
              pariatur nemo error dignissimos impedit, eveniet fuga amet
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              temporibus nisi quis, nemo optio consectetur sunt inventore
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
