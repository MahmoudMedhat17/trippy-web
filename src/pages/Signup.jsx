import Hero from "../Components/Hero";
import SignUp from "../Components/Signup";
import Footer from "../Components/Footer";

const Signup = () => {
  return (
    <div>
        <Hero
            img="src/assets/1.jpg"
            title="Registeration"
        />
        <SignUp/>
        <Footer/>
    </div>
  )
}

export default Signup;