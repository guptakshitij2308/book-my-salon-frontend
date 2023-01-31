import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import BookMySlot from "./components/BookMySlot";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <div>
        <Card />
      </div>
      <Testimonials />
    </div>
  );
}

export default App;
