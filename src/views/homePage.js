import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import MenuHome from "../components/layout/menuheader"
import Slider from "../components/layout/Slider"
import Product  from "../components/layout/Product"
import LocationHomePage from "../components/layout/LocationHomePage"
import Footer from "../components/Footer/Footer"
import wrapper_img from "../assets/wrapper_img/wrapper.png"
import "./homePage.scss"
class homePage extends Component {
  render() {
    return(
      <>
        <div className="homePage-container" style={{backgroundColor: '#FDF6EE'}}>
          <MenuHome />
          <div style={{paddingTop:'52px'}}>
            <Slider/>
          </div>
            <div className="homePage-content">
              <div className="wp_wrapper" 
                  style={{
                    backgroundImage: `url(${wrapper_img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '627px',
                    width: '100%',
                  }}>
                  <div className="wp-content-right">
                    <div className="sub-title">
                      <span>Về chúng tôi</span>
                    </div>
                    <div className="title">
                      <span>Trà sữa NaCha</span>
                    </div>
                    <div className="underline"></div>
                    <div className="content">
                      <span>
                        Trà Sữa NaCha là một trong những thương hiệu trà sữa “top of mind” của giới trẻ với những sản phẩm chất lượng, sáng tạo và giá cả hợp lý. Với phương châm “Hạnh phúc trong từng lần hút”, NaCha luôn không ngừng phát triển để trao tận tay khách hàng sản phẩm ngon nhất cũng như những giá trị hạnh phúc khi thưởng thức trà sữa tại NaCha.
                      </span>
                    </div>
                    <div className="xemthem-btn">
                      <a href="/" className="btn btn-primary"><span className="xemthem">Tìm hiểu thêm</span></a>
                    </div>
                </div>
              </div>
            </div>
          <Product />
          <LocationHomePage />
          <Footer />

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

export default connect(mapStateToProps, mapDispatchToProps)(homePage);
