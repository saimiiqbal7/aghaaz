import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    const response = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: "Email sent successfully!",
      response,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
      error,
    };
  }
};
