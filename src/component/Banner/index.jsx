import React from "react";
import { useNavigate } from "react-router";
import banner from "../../assets/BannerImage.png";

const Banner = () => {
  const navigate = useNavigate();

  const handleConsultancyClick = () => {
    navigate("/contact");
  };

  return (
    <div className="h-[90vh] bg-primery-green flex justify-center items-center flex-col text-white font-extrabold">
      <img src={banner} alt="AGHAAZ" className="w-[70%] lg:w-[40%]" />
      <p className="text-[5vw] lg:text-[2.5vw] text-center">
        Your Passport for Foreign Education
      </p>
      <button
        onClick={handleConsultancyClick}
        className="bg-secondary-yellow lg:px-[3vw] px-[10vw] lg:py-[3vh] py-[3vh] rounded-4xl text-primery-green lg:text-[1.7vw] cursor-pointer mt-7 active:opacity-80 transition-all duration-150"
      >
        Get a Free Consultancy
      </button>
    </div>
  );
};

export default Banner;
