import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Hero
        cName = "hero"
        img="src/assets/12.jpg"
        title="Your Journey Your Story"
        text="Choose your favorite destination"
        url="/"
        buttonText="Travel Plan"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Home