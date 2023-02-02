import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import BookMySlot from "./components/BookMySlot";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Features from "./components/Features";
import LoginOwner from "./components/LoginOwner";
import SignupOwner from "./components/SignupOwner";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <div>
        <Card />
      </div>
      <AboutUs />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />

      {/* <Navbar />
      <Login />
      <Signup />
      <Footer /> */}
    </div>
  );
}

// function Home() {
//   return (
//     <>
//       <ParticlesBackground />
//       <Navbar />
//       <div>
//         <Card />
//       </div>
//       <AboutUs />
//       <Testimonials />
//       <Footer />
//     </>
//   );
// }

export default App;
