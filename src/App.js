import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import BookMySlot from "./components/BookMySlot";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <div>
        <Card />
      </div>
      <AboutUs />
      <Testimonials />
      <ContactForm />
      <Footer />
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
