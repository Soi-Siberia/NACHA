import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./menuheader.scss";
// import { FormattedMessage } from "react-intl";

// Cấu hình ngôn ngữ

class menuheader extends Component {



  handlLinkMenu = (name)=>{
    console.log("Name 2", name)

    if(name === "product")
    {
      this.props.history.push('/product')
  
    }else {
      if(name === "homepage")
      {
        this.props.history.push('/homepage')
      }
    }
  }
  render() {
    return (
      // console.log("this props: ", this.props.language),
      <React.Fragment>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="active"
                onClick={()=>this.handlLinkMenu('homepage')}
            >TRANG CHỦ</li>
            <li
              onClick={()=>this.handlLinkMenu('giothieu')}
            >GIỚI THIỆU</li>
            <li
              onClick={()=>this.handlLinkMenu('menu')}
            >MENU</li>
            <li 
              onClick={()=>this.handlLinkMenu('product')}
              name='product'>SẢN PHẨM
              </li>
            <li 
              onClick={()=>this.handlLinkMenu('store')}
            >CỬA HÀNG</li>
            <li
              onClick={()=>this.handlLinkMenu('infor')}
            >LIÊN HỆ</li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(menuheader));
