import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as action from "../../store/actions";
import "./Product.scss";
import { observeScrollItems } from "../../utils/scrollObserverHelperUtils"
import product_img from "../../assets/product_img/Trà-Sữa-Phô-Mai-Nhung-Lụa-v2-550x550.png";
import ButonPage from "../Ui/ButonPage"




class Product extends Component {
  componentDidMount() {
    this.props.getAllProductStart();

    observeScrollItems(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }

    })
  }
  //xử lý xem thêm redairact page product
  handleProdcut = () => {
    this.props.history.push('/product')
  }

  render() {
    const { listProducts } = this.props;

    return (
      <div className="Product-container-full">
        <div className="container Product-container">
          <div className="product-title">
            <span className="product-sub-title scroll-item">
              Chúng tôi đảm bảo mọi thứ bạn chọn có chất lượng tốt nhất
            </span>
            <span className="title-main mt-3 scroll-item">Sản Phẩm Của Chúng Tôi</span>
            <div className="unline scroll-item"></div>
          </div>

          <div className="product-list">
            {listProducts &&
              listProducts.slice(0, 8).map((item, index) => {
                return (
                  <div className="product-item" key={index}>
                    <div className="product-item-img">
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
            <ButonPage title="Xem thêm" handleClick={() => this.handleProdcut()} />
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
