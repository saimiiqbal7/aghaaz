import React from "react";

const ContactForm = () => {
  return (
    <div className="w-1/2 bg-[#ffffff50] p-10 rounded-2xl flex flex-col justify-start items-center gap-10">
      <h2 className="text-4xl text-white font-bold">Get in Touch</h2>
      <p className="text-xl text-white/80 max-w-2xl text-center">
        We're here to help you with your foreign education journey. Fill out the
        form below and we'll get back to you as soon as possible.
      </p>
      <div className="w-full flex flex-col gap-3">
        <div className="flex gap-5 w-full flex-col lg:flex-row">
          <input
            type="text"
            className="bg-[#ffffff8e] rounded-xl p-2 w-full"
            placeholder="John Doe"
          />
          <input
            type="text"
            className="bg-[#ffffff8e] rounded-xl p-2 w-full"
            placeholder="xyz@gmail.com"
          />
        </div>
        <div className="flex gap-5 w-full  flex-col lg:flex-row">
          <input
            type="text"
            className="bg-[#ffffff8e] rounded-xl p-2 w-full"
            placeholder="+9230000000000"
          />
          <input
            type="text"
            className="bg-[#ffffff8e] rounded-xl p-2 w-full"
            placeholder="Subject"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="bg-[#ffffff8e] rounded-xl p-2 w-full"
        ></textarea>
        <div className="iw-full flex justify-center items-center ">
          <button className="bg-secondary-yellow lg:w-1/3 w-full py-3 px-5 rounded-2xl">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
