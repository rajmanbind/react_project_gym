import React from "react";
import "./trainers.css";
import HeaderImage from "../../images/header_bg_5.jpg"
import Header from "../../components/Header";
import { trainers } from "../../data";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Trainer from "../../components/Trainer";
const Trainers = () => {
  return (
    <>
      <Header className="Our Trainers"  image = {HeaderImage} title = "Trainers">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        quidem aut repellat perspiciatis non autem, facilis quasi impedit dolore
        soluta.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => (
            <Trainer
              key={id}
              image={image}
              name={name}
              job={job}
              socials={[
                {icon: <AiFillInstagram/>,link: socials[0]},
                {icon: <AiOutlineTwitter/>,link: socials[1]},
                {icon: <FaFacebookF/>,link: socials[2]},
                {icon: <FaLinkedin/>,link: socials[3]},
              ]}
            ></Trainer>
          ))}
        </div>
      </section>
    </>
  );
};

export default Trainers;
