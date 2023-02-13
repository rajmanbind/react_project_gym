import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/">
            <img src={Logo} alt="Footer Logo"  className="logo"/>
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            libero maiores fuga eos. Dolor sequi, mollitia modi fugit ullam
            ipsum!
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreFerrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreFerrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreFerrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreFerrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainer">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insight</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communication</Link>
            <Link to="/s">FAQs</Link>
        </article>
        <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 Raj ❤️ Roshan &copy; All Right Reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
