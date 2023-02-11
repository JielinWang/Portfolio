import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="contact"></a>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start to <a>Contact Me</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="primaryText">Get In Touch</span>
            <p className="secondaryText">Chicago, IL </p>
          </div>
          <ul className={css.menu}>
            <li>
              <AiTwotoneMail size={30} color="#286F6C" />
              <a href="mailto:jielinwang777@gmail.com">
                wangjielin777@gmail.com
              </a>
            </li>
            <li>
              <FiPhoneCall size={30} color="#286F6C" />
              <a>+1 (847)-494-6507</a>
            </li>
            <li>
              <FiLinkedin size={30} color="#286F6C" />
              <a>jielin-wang</a>
            </li>
            <li>
              <BsGithub size={30} color="#286F6C" />
              <a>Jielin Wang</a>
            </li>
          </ul>
        </div>
      </motion.div>
      <br />
      <div className={`innerWidth flexCenter ${css.sign}`}>
        <p>
          Build with ReactJS by Jielin Wang &copy;{new Date().getFullYear()}
        </p>
      </div>
    </motion.section>
  );
};

export default Footer;
