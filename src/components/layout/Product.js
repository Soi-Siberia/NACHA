import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as action from "../../store/actions";
import "./Product.scss";
import { observeScrollItems } from "../../utils/scrollObserverHelperUtils";
import product_img from "../../assets/product_img/Trà-Sữa-Phô-Mai-Nhung-Lụa-v2-550x550.png";
import ButonPage from "../Ui/ButonPage";
import DetailProdut from "../layout/DetailProdut";
import ContactWidget from "../layout/ContactWidget";

const Product = () => {
  const dispatch = useDispatch(); // = this.props.dispatch
  const history = useHistory(); // = this.props.history

  const [isOpenDetailProduct, setIsOpenDetailProduct] = useState(false); // state để quản lý việc mở chi tiết sản phẩm
  const [detailProduct, setDetailProduct] = useState({}); // state để lưu thông tin chi tiết sản phẩm

  // lấy listProducts từ Redux store
  const listProducts = useSelector((state) => state.product.listProducts); // = this.props.listProducts

  // tương đương componentDidMount
  useEffect(() => {
    dispatch(action.getAllProductStart()); // = this.props.getAllProductStart()

    observeScrollItems((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, [dispatch]);

  // sự kiện khi nhấn "Xem thêm"
  const handleProdcut = () => {
    history.push("/product"); // = this.props.history.push
  };

  const handleProdcutItem = (item) => {
    // alert("Chức năng đang được phát triển");
    setDetailProduct(item);
    setIsOpenDetailProduct(true);
    // console.log("item: ", item);
  }

  const toggleNewCategory = () => {
    setIsOpenDetailProduct(!isOpenDetailProduct);
  }
  console.log("DetailProduct: ", detailProduct, "isOpenDetailProduct: ", isOpenDetailProduct);
  return (
    <>
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
              listProducts.map((item, index) => (
                <div className="product-item" key={index} onClick={() => handleProdcutItem(item)}>
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
              ))}
          </div>

          <div className="product-button">
            <ButonPage title="Xem thêm" handleClick={handleProdcut} />
          </div>
        </div>
      </div>

      <DetailProdut
        isOpenDetailProduct={isOpenDetailProduct}
        detailProduct={detailProduct}
        toggleNewCategory={toggleNewCategory}
      />

      <ContactWidget />

    </>
  );
};

export default Product;
