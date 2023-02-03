import { useState } from "react";
import "./LoginUser.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
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
        <h1>Sign In</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <label for="email">email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          ></input>
          <label for="password">password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
          ></input>
          <button className="submit" type="submit">
            Log In
          </button>
        </form>

        <button className="link-btn" onClick={() => navigate("/sign-up-user")}>
          Don't Have an Account?
          <br /> Register here
        </button>
      </div>
    </div>
  );
};

export default Login;
