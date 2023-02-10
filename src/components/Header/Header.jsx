import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Jielin</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">SKILLS</a>
          </li>
          <li>
            <a href="">PROJECTS</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+1(847)-494-6507</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        <div
          className="css menuIcon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={"30px"} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
