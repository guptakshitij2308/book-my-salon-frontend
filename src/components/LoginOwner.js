import "./LoginOwner.css";

const Login = () => {
  return (
    <div className="login-parent">
      <div className="login-box">
        <h1>Login</h1>
        <form action="#">
          <div className="input-field">
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fa-solid fa-lock"></i>
            <input type="Password" placeholder="Password" />
          </div>
          <div className="link">
            <a href="/">Don't have an account?Sign Up Here</a>
          </div>
          <div className="btn-field">
            <button className="button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
