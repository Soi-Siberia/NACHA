import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./menuheader.scss";
import logo from "../../assets/images/logo.jpg";

const menuItems = [
  { label: "TRANG CHỦ", key: "homepage", path: "/homepage" },
  { label: "GIỚI THIỆU", key: "giothieu", path: "/about" },
  { label: "MENU", key: "menu", path: "/menu" },
  { label: "SẢN PHẨM", key: "product", path: "/product" },
  { label: "CỬA HÀNG", key: "store", path: "/store" },
  { label: "LIÊN HỆ", key: "infor", path: "/contact" },
];

class menuheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleLinkMenu = (path) => {
    if (this.props.location.pathname !== path) {
      this.props.history.push(path);
    }
    this.setState({ isMenuOpen: false }); // đóng menu sau khi click
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const currentPath = this.props.location.pathname;
    const { isMenuOpen } = this.state;

    return (
      <div className="navbar-full">
        <nav className="navbar container">
          <div className="logo-menu" onClick={() => this.handleLinkMenu("/homepage")}>
            <img src={logo} alt="Logo" />
          </div>

          <div className="menu-toggle" onClick={this.toggleMenu}>
            {isMenuOpen ? ("x") : "☰"}
          </div>

          <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={currentPath === item.path ? "active" : ""}
                onClick={() => this.handleLinkMenu(item.path)}
              >
                {item.label}
              </li>
            ))}

            <li className="flag" onClick={() => this.handleLinkMenu("/cart")}>
              <i className="fas fa-shopping-cart"></i>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default withRouter(connect(mapStateToProps)(menuheader));
