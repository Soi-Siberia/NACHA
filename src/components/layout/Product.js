import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import product_img from "../../assets/product_img/Trà-Sữa-Phô-Mai-Nhung-Lụa-v2-550x550.png"
import "./Product.scss"

class Product extends Component {

  componentDidMount(){
    const productItems = document.querySelectorAll(".product-item");

    // Tạo một đối tượng IntersectionObserver
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          // Nếu phần tử có trong viewport
          if (entry.isIntersecting) {
            // Tính toán độ trễ cho mỗi phần tử
            entry.target.classList.add("visible");
            entry.target.style.transitionDelay = `${index * 0.2}s`; // Tăng độ trễ theo index
            observer.unobserve(entry.target); // Dừng quan sát khi hiệu ứng đã chạy
          }
        });
      },
      {
        threshold: 0.5, // Bắt đầu hiệu ứng khi 50% phần tử có trong viewport
      }
    );

    // Quan sát tất cả các sản phẩm
    productItems.forEach((item, index) => {
      observer.observe(item);
    });
  }

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
            <div className="product-list row">
              {/* ----------------------------- */}
              <div className="product-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product-item-img mt-5">
                  <img src={product_img} alt="product" />
                </div>
                <div className="product-item-name mt-3">
                  <a href="#">Trà Sữa Mochi Triple Cheese</a>
                </div>
                <div className="product-item-mota mt-3">
                  <span>Phô Mai Nhung Lụa béo thơm được chế biến từ sữa tươi Thanh Trùng xen lẫn dâu tươi nghiền nhỏ cùng cấu trúc nổi mềm mịn như nhung vương nhẹ sắc hồng. Là biểu tượng của sự giàu sang, phú quý, Phô Mai Nhung Lụa mang đến sự sung túc cho năm mới và phơi phới tiền tài.</span>
                </div>
              </div>
              {/* ----------------------------- */}
              <div className="product-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product-item-img mt-5">
                  <img src={product_img} alt="product" />
                </div>
                <div className="product-item-name mt-3">
                  <a href="#">Trà Sữa Mochi Triple Cheese</a>
                </div>
                <div className="product-item-mota mt-3">
                  <span>Phô Mai Nhung Lụa béo thơm được chế biến từ sữa tươi Thanh Trùng xen lẫn dâu tươi nghiền nhỏ cùng cấu trúc nổi mềm mịn như nhung vương nhẹ sắc hồng. Là biểu tượng của sự giàu sang, phú quý, Phô Mai Nhung Lụa mang đến sự sung túc cho năm mới và phơi phới tiền tài.</span>
                </div>
              </div>
              {/* ----------------------------- */}
              <div className="product-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product-item-img mt-5">
                  <img src={product_img} alt="product" />
                </div>
                <div className="product-item-name mt-3">
                  <a href="#">Trà Sữa Mochi Triple Cheese</a>
                </div>
                <div className="product-item-mota mt-3">
                  <span>Phô Mai Nhung Lụa béo thơm được chế biến từ sữa tươi Thanh Trùng xen lẫn dâu tươi nghiền nhỏ cùng cấu trúc nổi mềm mịn như nhung vương nhẹ sắc hồng. Là biểu tượng của sự giàu sang, phú quý, Phô Mai Nhung Lụa mang đến sự sung túc cho năm mới và phơi phới tiền tài.</span>
                </div>
              </div>
              {/* ----------------------------- */}
              <div className="product-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product-item-img mt-5">
                  <img src={product_img} alt="product" />
                </div>
                <div className="product-item-name mt-3">
                  <a href="#">Trà Sữa Mochi Triple Cheese</a>
                </div>
                <div className="product-item-mota mt-3">
                  <span>Phô Mai Nhung Lụa béo thơm được chế biến từ sữa tươi Thanh Trùng xen lẫn dâu tươi nghiền nhỏ cùng cấu trúc nổi mềm mịn như nhung vương nhẹ sắc hồng. Là biểu tượng của sự giàu sang, phú quý, Phô Mai Nhung Lụa mang đến sự sung túc cho năm mới và phơi phới tiền tài.</span>
                </div>
              </div>
              {/* ----------------------------- */}
              <div className="product-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product-item-img mt-5">
                  <img src={product_img} alt="product" />
                </div>
                <div className="product-item-name mt-3">
                  <a href="#">Trà Sữa Mochi Triple Cheese</a>
                </div>
                <div className="product-item-mota mt-3">
                  <span>Phô Mai Nhung Lụa béo thơm được chế biến từ sữa tươi Thanh Trùng xen lẫn dâu tươi nghiền nhỏ cùng cấu trúc nổi mềm mịn như nhung vương nhẹ sắc hồng. Là biểu tượng của sự giàu sang, phú quý, Phô Mai Nhung Lụa mang đến sự sung túc cho năm mới và phơi phới tiền tài.</span>
                </div>
              </div>
              {/* ----------------------------- */}
              <div className="product-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product-item-img mt-5">
                  <img src={product_img} alt="product" />
                </div>
                <div className="product-item-name mt-3">
                  <a href="#">Trà Sữa Mochi Triple Cheese</a>
                </div>
                <div className="product-item-mota mt-3">
                  <span>Phô Mai Nhung Lụa béo thơm được chế biến từ sữa tươi Thanh Trùng xen lẫn dâu tươi nghiền nhỏ cùng cấu trúc nổi mềm mịn như nhung vương nhẹ sắc hồng. Là biểu tượng của sự giàu sang, phú quý, Phô Mai Nhung Lụa mang đến sự sung túc cho năm mới và phơi phới tiền tài.</span>
                </div>
              </div>
              {/* ----------------------------- */}
              <div className="product-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product-item-img mt-5">
                  <img src={product_img} alt="product" />
                </div>
                <div className="product-item-name mt-3">
                  <a href="#">Trà Sữa Mochi Triple Cheese</a>
                </div>
                <div className="product-item-mota mt-3">
                  <span>Phô Mai Nhung Lụa béo thơm được chế biến từ sữa tươi Thanh Trùng xen lẫn dâu tươi nghiền nhỏ cùng cấu trúc nổi mềm mịn như nhung vương nhẹ sắc hồng. Là biểu tượng của sự giàu sang, phú quý, Phô Mai Nhung Lụa mang đến sự sung túc cho năm mới và phơi phới tiền tài.</span>
                </div>
              </div>
              {/* ----------------------------- */}
              <div className="product-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product-item-img mt-5">
                  <img src={product_img} alt="product" />
                </div>
                <div className="product-item-name mt-3">
                  <a href="#">Trà Sữa Mochi Triple Cheese</a>
                </div>
                <div className="product-item-mota mt-3">
                  <span>Phô Mai Nhung Lụa béo thơm được chế biến từ sữa tươi Thanh Trùng xen lẫn dâu tươi nghiền nhỏ cùng cấu trúc nổi mềm mịn như nhung vương nhẹ sắc hồng. Là biểu tượng của sự giàu sang, phú quý, Phô Mai Nhung Lụa mang đến sự sung túc cho năm mới và phơi phới tiền tài.</span>
                </div>
              </div>
                                                         
            </div>
            <div className="product-button">
              <button className="btn-xemthem-product">
                xem thêm
              </button>
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
