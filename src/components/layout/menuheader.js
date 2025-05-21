import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./menuheader.scss";
// import { FormattedMessage } from "react-intl";

// Cấu hình ngôn ngữ

const menuItems = [
  { label: "TRANG CHỦ", key: "homepage", path: "/homepage" },
  { label: "GIỚI THIỆU", key: "giothieu", path: "/about" },
  { label: "MENU", key: "menu", path: "/menu" },
  { label: "SẢN PHẨM", key: "product", path: "/product" },
  { label: "CỬA HÀNG", key: "store", path: "/store" },
  { label: "LIÊN HỆ", key: "infor", path: "/contact" },
];

class menuheader extends Component {

  constructor(props){
    super(props);
    this.state ={
      isActive:"",
    }
  }


  handleLinkMenu = (path) => {
      if (this.props.location.pathname !== path) {
        this.props.history.push(path);
      }
    }
  render() {
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <div className="navbar-full">
          <nav className="navbar container">
            <ul className="nav-links">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className={currentPath === item.path ? "active" : ""}
                  onClick={() => this.handleLinkMenu(item.path)}
                >
                  {item.label}
                </li>
              ))}

              <li className="flag">
                <img src="https://flagcdn.com/w40/gb.png" alt="English" />
              </li>
              {/* <li className="separator">|</li>
              <li className="icon">🔍</li>
              <li className="icon">☰</li> */}
            </ul>
          </nav>
        </div>
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //ánh xạ (map) accsion redux  thành props để gọi sử dụ
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(menuheader));
