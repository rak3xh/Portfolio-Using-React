import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Associate Software Engineer",
          "Windows App Developer",
          "Software Developer",
          "Problem Solver",
          "Part-time Counter Strike Gamer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
