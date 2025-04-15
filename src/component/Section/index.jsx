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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem.
      </p>
    </section>
  );
};

export default Section;
