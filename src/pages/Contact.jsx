import Hero from "../Components/Hero";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";


const Contact = () => {
  return (
    <>
      <Hero
        cName="hero-contact"
        title="Contact"
        img="src/assets/2.jpg"
      />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact