import { Helmet } from "react-helmet";
import IMGSLIDER from '../../assets/slider_img/1.png';

const Home = (props) => {
    console.log("Check props from Home: ", props.scrollTop);
    return (
        <>
            <Helmet>
                <title>NaCha - Home</title>
            </Helmet>
            <div className="Home-container-full" >
                Đây là trang chủ của NaCha
                <div className="Slider-exp"
                    style={{
                        width: '100%',
                        height: '560px',
                        transform: `translateY(${props.scrollTop * 0.4}px)`,
                        // transition: 'transform 0.1s linear',
                    }}>
                    <img src={IMGSLIDER} alt="NaCha Slider" className="Slider-img"
                        style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="ảnh bên dưới"
                    style={{ position: 'absolute', height: '1000px', width: '100%', backgroundColor: '#f0f0f0', padding: '20px', zIndex: '1000' }}>
                    <title>NaCha - Trà sữa ngon</title>
                    <p>Chào mừng bạn đến với NaCha - nơi mang đến những ly trà sữa thơm ngon, chất lượng!</p>
                    <p>Chúng tôi cam kết sử dụng nguyên liệu tươi ngon, an toàn và đảm bảo vệ sinh thực phẩm.</p>
                    <p>Hãy đến và trải nghiệm hương vị tuyệt vời của trà sữa NaCha!</p>

                </div>
            </div>
        </>
    );
}

export default Home;