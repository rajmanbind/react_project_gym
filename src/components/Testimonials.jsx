import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Card from "../UI/Card";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, avatar, quote } = testimonials[index];
  //   useEffect(() => {
  //   }, [index]);

  //   const left = () => {
  //     setIndex(index - 1);
  //     if(index<=0){
  //         setIndex(testimonials.length-1)
  //     }
  //     console.log("left", index);
  //   };
  //   const right = () => {
  //     setIndex(index + 1);
  //     if(index>=testimonials.length-1){
  //         setIndex(0);
  //     }
  //     console.log("right", index);
  //   };
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHeader
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn_container">
          <button
            className="testimonials__btn"
            onClick={() =>
              index <= 0
                ? setIndex(testimonials.length - 1)
                : setIndex(index - 1)
            }
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials__btn"
            onClick={() =>
              index >= testimonials.length - 1
                ? setIndex(0)
                : setIndex(index + 1)
            }
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
