import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import "./Footer.scss";
// import { FormattedMessage } from "react-intl";

// Cấu hình ngôn ngữ

class Footer extends Component {

  render() {
    return (
        <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/logo-white.png" alt="nacha Logo" />
            <p>Trà sữa NaCha, Nâng tầm thưởng thức</p>
          </div>

          <div className="footer-links">
            <h3>LIÊN KẾT NHANH</h3>
            <ul>
              <li>Trang chủ</li>
              <li>Giới thiệu</li>
              <li>Sản phẩm</li>
              <li>Cửa hàng</li>
              <li>Liên hệ</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>THÔNG TIN LIÊN HỆ</h3>
            <p>Địa chỉ: 21 Rạch Bùng Binh, Phường 10, Quận 3, TP. Hồ Chí Minh</p>
            <p>Hotline: <a href="tel:0878808808">0878 808 808</a></p>
            <p>Email: <a href="mailto:nachaxinchao@nacha.com.vn">nachaxinchao@nacha.com.vn</a></p>
          </div>

          <div className="footer-company">
            <h3>ĐỊA CHỈ CỬA HÀNG</h3>
            <p>TRÀ SỮA NACHA</p>
            <p>38 Trịnh Đình Trọng, Phường Phú Trung, Quận Tân Phú, TP. HCM</p>
            <p>Hotline: <a href="tel:0878808808">0878 808 808</a></p>
            <p>Email: <a href="mailto:nachaxinchao@nacha.com.vn">nachaxinchao@nacha.com.vn</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>nacha © 2025 All rights reserved. Designed by <span className="highlight">NgocAnh</span></p>
          {/* <div className="footer-socials">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-tiktok"></i>
            <i class="fab fa-youtube"></i>
          </div> */}
        </div>
      </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
