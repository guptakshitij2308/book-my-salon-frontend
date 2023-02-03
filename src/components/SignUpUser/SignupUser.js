import { useState } from "react";
import "./SignUpUser.css";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="parent">
      <div className="signup">
        <h1>Sign Up</h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label for="name">Name</label>
          <input type="text" placeholder="name" id="name" name="name" />
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          ></input>
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
          ></input>
          <button className="submit" type="submit">
            Sign Up
          </button>
        </form>

        <button className="link-btn" onClick={() => navigate("/login-user")}>
          Already registered?
          <br /> Login here
        </button>
      </div>
    </div>
  );
};

export default Signup;
