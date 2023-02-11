import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import { HiPresentationChartLine } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

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
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./showCase1.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./showCase2.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./showCase3.png"
            alt="project"
          />
        </div>
        <div className={`flexCenter paddings innerWidth ${css.icons}`}>
          <div style={{ background: "#EEC048" }}>
            <a href="https://drive.google.com/file/d/13jsViaJFAOzt-DYv8QirfAsuV3_PCqWm/view?usp=sharing">
              <HiPresentationChartLine size={30} color="white" />
            </a>
          </div>
          <div style={{ background: "#286F6C" }}>
            <a href="https://github.com/JielinWang/jw-bank-fullstack-app">
              <BsGithub size={30} color="white" />
            </a>
          </div>

          <div style={{ background: "#EEC048" }}>
            <a href="https://drive.google.com/file/d/1br3lfN7TH7YVLLE79yvOUa7RXjoapOn2/view?usp=sharing">
              <HiPresentationChartLine size={30} color="white" />
            </a>
          </div>
          <div style={{ background: "#286F6C" }}>
            <a href="https://github.com/JielinWang/Food-Ordering-App">
              <BsGithub size={30} color="white" />
            </a>
          </div>

          <div style={{ background: "#EEC048" }}>
            <a href="https://drive.google.com/file/d/1PVdko3p1qbne178rge2OHU_K43NjGwsc/view?usp=sharing">
              <HiPresentationChartLine size={30} color="white" />
            </a>
          </div>
          <div style={{ background: "#286F6C" }}>
            <a href="https://github.com/JielinWang/Realtime-Chat-App">
              <BsGithub size={30} color="white" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
