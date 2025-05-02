import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

import slider_img1 from "../../assets/slider_img/slider1.jpg";
import slider_img2 from "../../assets/slider_img/slider2.jpg";
import slider_img3 from "../../assets/slider_img/slider3.jpg";
import slider_img4 from "../../assets/slider_img/slider4.jpg";
// import { FormattedMessage } from "react-intl";

// Cấu hình ngôn ngữ

class slider extends Component {

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 3000,
    }
    return (
      // console.log("this props: ", this.props.language),

      <React.Fragment>
          <Slider {...settings}>
            <div className="slider-item">
                <img src={slider_img1} alt="slider1"></img>
            </div>
            <div className="slider-item">
                <img src={slider_img2} alt="slider2"></img>
            </div>
            <div className="slider-item">
                <img src={slider_img3} alt="slider3"></img>
            </div>
            <div className="slider-item">
                <img src={slider_img4} alt="slider4"></img>
            </div>
          </Slider>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(slider);