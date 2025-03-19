import React from "react";
import Typewriter from "typewriter-effect";

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            "Software Engineer!",
            "Full-Stack Developer!",
            ".NET Core Developer!",
            "ReactJS Developer!",
            "Flutter Developer!",
            "Python Developer!",
            "Occasional Footballer!"
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Typed;
