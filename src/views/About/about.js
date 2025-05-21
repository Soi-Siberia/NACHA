import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import MenuHome from "../../components/layout/menuheader"
import Footer from "../../components/Footer/Footer"
import "./about.scss"



class about extends Component {
    constructor(props) {
    super(props);
    this.state = {
      offsetY: 0,
    };
  }


  render() {
    let scrollTop = this.props.scrollTop
    console.log("Giá trin props: ", scrollTop)
    let { offsetY } = this.state;

    return(
      <>
        <MenuHome />
        <div
          className="about-full"
          ref={this.containerRef}
          style={{
            paddingTop: "53px"
          }}
        >
          <div className="about-container">
            <div className="about-section">
              <h1
                className="parallax-title"
                style={{
                  transform: `translateY(${scrollTop * 0.3}px)`, transition: 'transform 0.1s linear',
                }}
              >
                <span>Giới Thiệu</span>
              </h1>
            </div>
            <div className="content-section">
              <p>Cuộn xuống để thấy hiệu ứng...</p>
              <p style={{ height: "1500px" }}></p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(about);
