
import HeaderMenu from "../../components/layout/menuheader"
import Footer from "../../components/Footer/Footer"
import LocationHomePage from "../../components/layout/LocationHomePage"
import ParallaxSection from "../../components/Ui/ParallaxSection"
import { Helmet } from "react-helmet"
import './Store.scss'

const Store = (props) => {

    return (
        <>
            <Helmet>
                <title>NaCha - Store</title>
            </Helmet>
            <HeaderMenu />
            <ParallaxSection
                title="Cửa Hàng"
                backgroudImage='https://picsum.photos/800/400'
                scrollTop={props.scrollTop}
            />
            <div className="store-full">
                <div className="store-container container" style={{ paddingTop: '50px' }}>
                    <div className="store-left">
                        <div className="result-store">
                            <LocationHomePage
                                isMap={true}
                            />
                        </div>
                    </div>
                    {/* <div className="store-right">

                    </div> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Store