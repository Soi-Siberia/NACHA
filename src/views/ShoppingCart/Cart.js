import { Helmet } from 'react-helmet'
import HeaderMenu from '../../components/layout/menuheader'
import Footer from '../../components/Footer/Footer'
import './Cart.scss'



const Cart = () => {
    return (
        <>
            <Helmet>
                <title>NaCha - Cart</title>
            </Helmet>

            <HeaderMenu />
            <div className='cart-container-full'
                style={{ paddingTop: '50px' }}
            >
                <div className='cart-container container'>
                    <div>Giỏ hàng cảu bạn ở đây</div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Cart