import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <Image
          className="img"
          src="/hero.jpg"
          alt="about-img"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend  <span>Developer</span> </h3>

        <p>I&apos;m SUNAINA, a passionate DEVELOPER with a love for turning ideas into reality. Whether it&apos;s designing seamless user interfaces, developing innovative websites, or crafting engaging digital experiences, I&apos;m committed to delivering high-quality work that drives results.I&apos;m always excited to learn new tools, take on new challenges, and collaborate with others to create impactful work. My goal is to continue building my skills, gain hands-on experience, and contribute to projects that make a difference.
        </p>
      </div>
    </section>
  );
};

export default About;