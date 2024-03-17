import React from "react";

import avatar from '../images/avatar.jpg'

export default function AboutMe() {
  return (
    <div>
      <h2 className="subTitle">About Me</h2>
      <img src={avatar} alt="my avatar" className="avatar" />
      <p className="about">
        Hello, and welcome to my space! I’m Esther Adeola, a passionate lifelong
        learner, transitioning from a rewarding career in nursing to the
        ever-evolving tech industry. As a single mother of 4 amazing kids, I've
        mastered the art of multitasking, nurturing with patience, and tackling
        challenges with resilience and grace.
      </p>

      <p className="about">
        My Journey from Nursing to Tech My journey into the realm of technology
        began out of a combination of curiosity, necessity, and the desire for a
        new challenge. Having spent 13years in nursing, I've had the privilege
        of making a difference in countless lives, providing care, empathy, and
        support to those in need. My experience in the healthcare sector has
        honed my problem-solving skills, attention to detail, and ability to
        thrive under pressure—qualities that I discovered are just as crucial in
        the tech world.
      </p>
    </div>
  );
}
