import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/landcode.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/messi.png";
import { GiSoccerBall } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello, Fellas!</h1>
          <h1>
            I'M <b>MUZAMIL MAQBOOL</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
          I am a skilled full-stack developer with 5+ years of experience in
           <b>C#</b>, <b>.NET Core</b>, <b>JavaScript</b>, <b>ReactJS</b>, <b>Python</b>, and <b>FastAPI</b>, delivering innovative and reliable solutions.
            <br />
            <br />I specialize in <b>Flutter</b>, <b>.NET MAUI</b>, <b>.NET Blazor</b>, and <b>HTML</b>, <b>CSS</b>,  with expertise in <b>Git</b>, <b>GitHub</b>, and <b>Figma</b> for seamless collaboration and design. <br />
            <br />
            Passionate about exploring new technologies,<br/>
            Also, I love <b>Football</b>
            {"   "}
            <GiSoccerBall style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
