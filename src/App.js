import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import BookMySlot from "./components/BookMySlot";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
