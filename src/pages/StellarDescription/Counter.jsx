

import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Counter.css";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  const stats = [
    { number: 19, suffix: "+", description: "Online Courses" },
    { number: 13, suffix: "+", description: "Lessons in Courses" },
    { number: 30, suffix: "+", description: "Topics in Lessons" },
    { number: 1000, suffix: "+", description: "Student's Enroll" },
  ];

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <section className="counter-section">
        <div className="counter-container">
          <div className="counter-grid">
            {stats.map((stat, index) => (
              <div key={index} className="counter-card">
                <div className="counter-number">
                  {counterOn ? (
                    <CountUp start={0} end={stat.number} duration={2} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="counter-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Counter;
