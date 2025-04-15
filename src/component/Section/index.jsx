import React from "react";
import sectionBackground from "../../assets/SectionBackground.svg";
import hatImage from "../../assets/HatImage.png";

const Section = () => {
  return (
    <section
      className="w-full lg:h-[90vh] bg-cover bg-center bg-no-repeat flex justify-center items-center lg:gap-20 gap-10 xl:p-[5vw] py-[5vh] flex-col lg:flex-row px-[15vw]"
      style={{ backgroundImage: `url(${sectionBackground})` }}
    >
      <div className="flex lg:w-2/4 items-center justify-center flex-col lg:flex-row">
        <img src={hatImage} alt="Hat-Image" className="lg:w-4/6 w-full" />
        <h2 className="xl:text-7xl text-5xl font-bold lg:w-2/6 text-primery-green leading-relaxed">
          Why We Started Aghaaz?
        </h2>
      </div>
      <p className="lg:w-3/8 xl:text-3xl ">
        <span className="font-bold"> Aghaaz</span> is not just an education
        consultancy. We are a complete support system for students who want to
        study abroad. We help with admissions, guide you through the visa
        process, and support you from the moment you start your journey until
        you are settled in your new home. We work with universities, connect you
        with real students in your destination city, and help you find safe,
        affordable housing. We also guide you on daily life like commuting,
        shopping, and staying safe. Most importantly, we help you become part of
        a local support network so you always have someone to turn to.
        <br />
        <span className="font-bold">
          We take care of everything so you only have to worry about your
          studies.
        </span>
      </p>
    </section>
  );
};

export default Section;
