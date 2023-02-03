import { Component } from "react";
import { MenuData } from "../../Details/MenuData";
import "./NavbarStyles.css";
import { Link, useNavigate } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="Navbar-Main">
        <nav className="Navbar-Items">
          <h1 className="logo">
            Beautello
            <img
              className="logo-main"
              src="https://i.postimg.cc/J4zrbgfv/logo.png"
              alt="Logo-Main"
            />
          </h1>
          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} style={{ textDecoration: "none" }}>
                    <a href={item.url} className={item.cName}>
                      <i className={item.icon}></i>
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;