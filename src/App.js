import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
