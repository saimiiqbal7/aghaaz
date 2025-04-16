import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error("Please enter a subject");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    emailjs
      .sendForm("service_yz4t027", "template_07z9tmq", e.target, {
        publicKey: "ovAClfrkuNYnt26f-",
      })
      .then(
        () => {
          toast.success("Message sent successfully!", { id: loadingToast });
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.", {
            id: loadingToast,
          });
          console.error("Email sending failed:", error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="lg:w-1/2 w-[80vw] bg-[#ffffff50] lg:p-30 p-5 rounded-2xl flex flex-col justify-start items-center gap-10">
      <h2 className="text-4xl text-white font-bold">Get in Touch</h2>
      <p className="text-xl text-white/80 max-w-2xl text-center">
        We're here to help you with your foreign education journey. Fill out the
        form below and we'll get back to you as soon as possible.
      </p>
      <form onSubmit={sendEmail} className="w-full flex flex-col gap-3">
        <div className="flex gap-5 w-full flex-col lg:flex-row">
          <input
            type="text"
            name="name"
            className="bg-[#ffffff8e] rounded-xl p-2 w-full"
            placeholder="John Doe"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            className="bg-[#ffffff8e] rounded-xl p-2 w-full"
            placeholder="xyz@gmail.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            disabled={isSubmitting}
          />
        </div>
        <div className="flex gap-5 w-full flex-col lg:flex-row">
          <input
            type="tel"
            name="phone"
            className="bg-[#ffffff8e] rounded-xl p-2 w-full"
            placeholder="+9230000000000"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            value={formData.phone}
            disabled={isSubmitting}
          />
          <input
            type="text"
            name="subject"
            className="bg-[#ffffff8e] rounded-xl p-2 w-full"
            placeholder="Subject"
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            value={formData.subject}
            disabled={isSubmitting}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="bg-[#ffffff8e] rounded-xl p-2 w-full"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
          disabled={isSubmitting}
        ></textarea>
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className={`bg-secondary-yellow lg:w-1/3 w-full py-3 px-5 rounded-2xl transition-colors ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-secondary-yellow/90"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
