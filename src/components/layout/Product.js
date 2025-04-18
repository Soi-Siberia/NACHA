import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import "./Product.scss"

class Product extends Component {
  render() {
    return(
      <>
        <div className="Product-container-full">
          <div className="container Product-container">
            <div className="product-title">
              <span className="product-sub-title">Chúng tôi đảm bảo mọi thứ bạn chọn có chất lượng tốt nhất</span>
              <span className="title-main mt-3">Sản Phẩm Của Chúng Tôi</span>
              <div className="unline"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
