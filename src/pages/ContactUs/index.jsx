import ContactForm from "../../component/ContactForm";
import Navbar from "../../component/Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="h-[90vh] bg-primery-green flex justify-center items-center">
        <ContactForm />
      </div>
    </>
  );
};

export default ContactUs;
