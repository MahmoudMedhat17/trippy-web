import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
const About = () => {
  return (
    <>
      <Hero
        cName="hero-about"
        img="src/assets/night.jpg"
        title="About"
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About