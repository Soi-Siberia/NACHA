import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import * as action from "../../store/actions";
import "./Product.scss";
import product_img from "../../assets/product_img/Trà-Sữa-Phô-Mai-Nhung-Lụa-v2-550x550.png";

class Product extends Component {
  componentDidMount() {
    this.props.getAllProductStart();
  }

  componentDidUpdate(prevProps) {
    // Khi danh sách sản phẩm được cập nhật thì khởi động lại observer
    if (prevProps.listProducts !== this.props.listProducts) {
      const productItems = document.querySelectorAll(".product-item");

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              entry.target.style.transitionDelay = `${index * 0.2}s`;
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      productItems.forEach((item, index) => {
        observer.observe(item);
      });
    }
  }

  //xử lý xem thêm redairact page product
  handleProdcut = () =>{
    this.props.history.push('/product')
  }

  render() {
    const { listProducts } = this.props;

    return (
      <div className="Product-container-full">
        <div className="container Product-container">
          <div className="product-title">
            <span className="product-sub-title">
              Chúng tôi đảm bảo mọi thứ bạn chọn có chất lượng tốt nhất
            </span>
            <span className="title-main mt-3">Sản Phẩm Của Chúng Tôi</span>
            <div className="unline"></div>
          </div>

          <div className="product-list row">
            {listProducts &&
              listProducts.map((item, index) => {
                return (
                  <div
                    className="product-item col-12 col-sm-6 col-md-4 col-lg-3"
                    key={index}
                  >
                    <div className="product-item-img mt-5">
                      <img
                        src={item.imgBlod || product_img}
                        alt={item.name || "product"}
                      />
                    </div>
                    <div className="product-item-name mt-3">
                      <a href="https://www.google.com/">{item.name}</a>
                    </div>
                    <div className="product-item-mota mt-3">
                      <span>{item.description}</span>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="product-button">
            <button 
              className="btn-xemthem-product"
              onClick={()=>this.handleProdcut()}>xem thêm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listProducts: state.product.listProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProductStart: () => dispatch(action.getAllProductStart()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
