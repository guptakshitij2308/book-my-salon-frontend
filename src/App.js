import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BookMySlot from "./components/BookMySlot/BookMySlot";
import LoginOwner from "./components/LoginOwner/LoginOwner";
import SignupOwner from "./components/SignUpOwner/SignupOwner";
import LoginUser from "./components/LoginUser/LoginUser";
import SignUpUser from "./components/SignUpUser/SignupUser";

// import CardOpen from "./components/OpenCard/OpenCard";
import OpenCard from "./components/OpenCard/OpenCard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Error from "./components/Error";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/HomePage/Testimonials/Testimonials";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        {/* <OpenCard /> */}
        <Routes>
          {/*Home  */}
          <Route path="/" element={<HomePage />}>
            <Route path="/testimonials" element={<Testimonials />} />
          </Route>

          {/* <Route path='/' */}
          <Route path="/book-my-slot" element={<BookMySlot />} />
          <Route path="/login-owner" element={<LoginOwner />} />
          <Route path="/register-salon" element={<SignupOwner />} />

          <Route path="/login-user" element={<LoginUser />} />
          <Route path="/sign-up-user" element={<SignUpUser />} />

          <Route path="/open-card" element={<OpenCard />} />

          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
