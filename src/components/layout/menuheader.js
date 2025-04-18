import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import "./menuheader.scss";
// import { FormattedMessage } from "react-intl";

// Cấu hình ngôn ngữ

class menuheader extends Component {

  render() {
    return (
      // console.log("this props: ", this.props.language),
      <React.Fragment>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="active">TRANG CHỦ</li>
            <li>GIỚI THIỆU</li>
            <li>MENU</li>
            <li>SẢN PHẨM</li>
            <li>CỬA HÀNG</li>
            <li>LIÊN HỆ</li>
            <li className="flag">
              <img src="https://flagcdn.com/w40/gb.png" alt="English" />
            </li>
            <li className="separator">|</li>
            <li className="icon">🔍</li>
            <li className="icon">☰</li>
          </ul>
        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(menuheader);
