import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./gallery.css";
const Gallery = () => {
  const galleryLength = 15;
  const Images = [];
  for (let i = 1; i <= galleryLength; i++) {
    Images.push(require(`../../images/gallery${i}.jpg`));
  }
  console.log(Images);
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit
        nesciunt eos aut. Aliquam quo maiores quia non reiciendis fuga.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {Images.map((img, index) => (
            <article key={index}>
              <img src={img} alt="Gallery Photo" />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
