import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>
        <small>
          <i>"Programming is Poetry for Machines!"</i>
        </small>
      </h4>
      <h4>
        Copyright &copy; 2025 <b>muzamilmaqbool.dev</b>
      </h4>
      <div className="footerLinks">
        <a
          href="https://github.com/muzamilmaqbool"
          target="_blank"
          title="Github"
        >
          <FaGithub />
        </a>
        <a href="mailTo:muzamilbhat507@gmail.com" target="_blank" title="Mail">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
