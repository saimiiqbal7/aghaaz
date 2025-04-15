import React, { useState } from "react";
import { sendEmail } from "../../utils/emailer";
import { motion } from "framer-motion";
import Navbar from "../../component/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus({ type: "success", message: result.message });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-primery-green p-30 h-[90vh]">
        <div className="w-[60vw] mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We're here to help you with your foreign education journey. Fill
              out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-8 p-4 rounded-lg ${
                status.type === "success"
                  ? "bg-green-500/20 text-green-200"
                  : "bg-red-500/20 text-red-200"
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary-yellow focus:bg-white/30 transition-all duration-200 p-3"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary-yellow focus:bg-white/30 transition-all duration-200 p-3"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary-yellow focus:bg-white/30 transition-all duration-200 p-3"
                placeholder="john@example.com"
              />
            </div>

            <div className="mt-8 space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-secondary-yellow focus:bg-white/30 transition-all duration-200 p-3 resize-none"
                placeholder="Tell us about your educational goals..."
              />
            </div>

            <div className="mt-10 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className={`bg-secondary-yellow px-12 py-4 rounded-full text-primery-green font-bold text-lg hover:bg-opacity-90 transition-all duration-200 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-primery-green"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
