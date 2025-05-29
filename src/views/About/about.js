
import { connect } from "react-redux"
import MenuHome from "../../components/layout/menuheader"
import Footer from "../../components/Footer/Footer"
import "./about.scss"
import img from '../../assets/images/be-nacha.jpg'
const about = (props) => {

  // console.log("==> check props: ", props)
  let scrollTop = props.scrollTop
  return (
    <>
      <MenuHome />
      <div
        className="about-full"
        style={{
          paddingTop: "53px"
        }}
      >
        <div className="about-container">
          <div className="about-section" >
            <h1
              className="parallax-title"
              style={{
                transform: `translateY(${scrollTop * 0.4}px)`, transition: 'transform 0.1s linear',
              }}
            >
              <span>Giới Thiệu</span>
            </h1>
          </div>
          <div className="ablout-content container">
            <div className="about-img" >
              <img className="img" src={img} alt="backgroud"></img>
            </div>
            <div className="content-info">
              <h1>TRÀ SỮA NACHA</h1>
              <span>Trà Sữa NACHA là một trong những thương hiệu trà sữa "top of mind" của
                giới trẻ với những sản phẩm chất lượng, sáng tạo và giá cả hợp lý.
                Với phương châm "Hạnh phúc trong từng lần hút", NACHA luôn không ngừng phát triển để trao tận tay khách hàng sản phẩm ngon nhất cũng như những giá trị hạnh phúc khi thưởng thức trà sữa tại NACHA.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

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
