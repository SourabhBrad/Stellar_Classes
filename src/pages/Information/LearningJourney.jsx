import React from 'react';
import './LearningJourney.css';
import pic from "./Login-imge-2.png"
const features = [
  {
    icon: '🖥️',
    title: 'Alternative Learning Formats',
    description:
      'From interactive video lessons to gamified modules and collaborative virtual classrooms, an approach that suits your learning style.',
  },
  {
    icon: '🖥️',
    title: 'Alternative Learning Formats',
    description:
      'From interactive video lessons to gamified modules and collaborative virtual classrooms, an approach that suits your learning style.',
  },
  {
    icon: '📚',
    title: 'Allocate Time for Study',
    description:
      'Flexibility to learn at your own pace, allowing you to fit education into your schedule seamlessly.',
  },
  {
    icon: '🎓',
    title: 'Follow Training Program',
    description:
      'Training programs are designed to foster a structured and comprehensive learning experience.',
  },
];

const LearningJourney = () => {
  return (
    <section className="learning-journey">
      <h2 className="learning-journey-title">Launch Your Learning Journey</h2>
      <p className="learning-journey-description">
        A place where innovation meets imagination, transporting you to a realm where knowledge knows no bounds.
      </p>
      <div className="learning-journey-container">
        <div className="learning-journey-image-container">
          <img
            src={pic}
            alt="Students collaborating"
            className="learning-journey-image"
          />
        </div>
        <div className="learning-journey-features">
          {features.map((feature, index) => (
            <div key={index} className="learning-journey-feature-card">
              <div className="learning-journey-feature-icon">{feature.icon}</div>
              <h3 className="learning-journey-feature-title">{feature.title}</h3>
              <p className="learning-journey-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
