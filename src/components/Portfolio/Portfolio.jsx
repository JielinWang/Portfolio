import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">Portfolio</span>
            <p style={{ marginTop: "10px" }}>My Latest Works</p>
          </div>
          <span className="secondaryText">
            <a href="https://github.com/JielinWang">Explore More Works</a>
          </span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <a
            href="https://github.com/JielinWang/jw-bank-fullstack-app"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="./showCase1.png"
              alt="project"
            />
          </a>
          <a
            href="https://github.com/JielinWang/Food-Ordering-App"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.7, 0.6)}
              src="./showCase2.png"
              alt="project"
            />
          </a>
          <a
            href="https://github.com/JielinWang/Realtime-Chat-App"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.9, 0.6)}
              src="./showCase3.png"
              alt="project"
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
