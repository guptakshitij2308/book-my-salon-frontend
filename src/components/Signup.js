import { useState } from "react";
import "./signup.css";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="parent">
    <div className="signup">
      <h1>SignUp</h1>

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
        <button  className="submit" type="submit">Sign Up</button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already registered?<br/> Login here
      </button>
    </div>
    </div>
  );
};

export default Signup;
