import "./Footer.scss";
import imgBackgroud from '../../assets/images/Bg-footer.jpg'
import Logo from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom';

// import { FormattedMessage } from "react-intl";

// Cấu hình ngôn ngữ

const Footer = () => {
  return (
    <>
      <footer className="footer"
        style={{ backgroundImage: `url(${imgBackgroud})` }}
      >
        <div className="footer-top">
          <div className="footer-logo">
            <img src={Logo} alt="nachaLogo" style={{ borderRadius: '100%' }} />
            <p>Trà sữa NaCha, Nâng tầm thưởng thức</p>
          </div>

          <div className="footer-links">
            <h3>LIÊN KẾT NHANH</h3>
            <ul>
              <li><Link to="/homepage">Trang chủ</Link></li>
              <li><Link to="/about">Giới thiệu</Link></li>
              <li><Link to="/product">Sản phẩm</Link></li>
              <li><Link to="/product">Cửa hàng</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>THÔNG TIN LIÊN HỆ</h3>
            <p>Địa chỉ: 54i Hoàng Diệu 2, Phường Linh Chiểu, TP Thủ Đức</p>
            <p>Hotline: <a href="tel:0909 543 642">0909 543 642</a></p>
            <p>Email: <a href="trasuanachahoangdieu@gmail.com">nachaxinchao@nacha.com.vn</a></p>
          </div>

          <div className="footer-company">
            <h3>ĐỊA CHỈ CỬA HÀNG</h3>
            <p>TRÀ SỮA NACHA</p>
            <p>Đại Chỉ: 54i Hoàng Diệu 2, Phường Linh Chiểu, TP Thủ Đức</p>
            <p>Hotline: <a href="tel:0909 543 642">0909 543 642</a></p>
            <p>Email: <a href="trasuanachahoangdieu@gmail.com">nachaxinchao@nacha.com.vn</a></p>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>nacha © 2025 All rights reserved. Designed by <span className="highlight">NgocAnh</span></p>
      </div>
    </>
  );
}
export default Footer
