import ContactForm from "../../component/ContactForm";
import Navbar from "../../component/Navbar";
import { Toaster } from "react-hot-toast";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="h-[90vh] bg-primery-green flex justify-center items-center">
        <ContactForm />
        <Toaster position="top-center" />
      </div>
    </>
  );
};

export default ContactUs;
