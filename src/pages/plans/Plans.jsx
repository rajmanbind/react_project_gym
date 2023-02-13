import React from "react";
import { plans } from "../../data";
import Card from "../../UI/Card";
import HeaderImage from "../../images/header_bg_4.jpg";
import "./plans.css";
import Header from "../../components/Header";
const Plans = () => {
  return (
    <>
      <Header image={HeaderImage} title="Membership Plans">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
        repellat adipisci molestias tenetur mollitia distinctio at nesciunt?
        Blanditiis, quaerat adipisci.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, features, price }) => (
            <Card className="plan" key={id}>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>

              {features.map(({ feature, available }, index) => (
                <p key={index} className={!available ? "disable" : ""}>
                  {feature}
                </p>
              ))}
              <button className="btn lg">Choose Plan</button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Plans;
