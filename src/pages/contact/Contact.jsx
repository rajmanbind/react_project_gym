import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <Header image={HeaderImage} title=" Get In Touch">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, similique
        maiores! Et tempora doloremque sunt voluptatum, vero in reiciendis
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:rajmanbind3535@gmail.com" target = "_blank" rel="noreferrer nopener">
              <MdEmail />
            </a>
            <a href="https://m.me/ernest_archiever" target = "_blank" rel="noreferrer nopener">
              <BsMessenger />
            </a>
            <a href="https://wa.me/+917518413033" target = "_blank" rel="noreferrer nopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
