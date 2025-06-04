// import { useState } from "react"
import MenuHome from "../components/layout/menuheader"
import Slider from "../components/layout/Slider"
import Product from "../components/layout/Product"
import LocationHomePage from "../components/layout/LocationHomePage"
import Footer from "../components/Footer/Footer"
import wrapper_img from "../assets/wrapper_img/wrapper.png"
import "./HomePage.scss"
import ButonPage from "../components/Ui/ButonPage"
import { useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet"


const HomePage = (props) => {
  console.log("Check props from HomePage: ", props.scrollTop);
  const history = useHistory()
  const handleClickTimHieuThem = () => {
    history.push('/about')
  }

  return (
    <>
      <Helmet>
        <title>NaCha - Home</title>
      </Helmet>
      <div className="homePage-container" style={{ backgroundColor: '#FDF6EE' }}>
        <MenuHome />
        <div style={{
          paddingTop: '52px',
          transform: `translateY(${props.scrollTop * 0.4}px)`
        }}>
          <Slider />
        </div>
        <div className="homePage-Pala"
          style={{
            position: 'absolute',
            zIndex: '1',
          }}>
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
                  <ButonPage
                    title="Tìm hiểu thêm"
                    handleClick={handleClickTimHieuThem}
                  />
                </div>
              </div>
            </div>
          </div>
          <Product />
          <LocationHomePage />
          <Footer />
        </div>

      </div>
    </>
  );
}


export default HomePage;
