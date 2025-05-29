import './Contact.scss'
import MenuHeader from '../../components/layout/menuheader'
import Footer from '../../components/Footer/Footer'
import ParallaxSection from '../../components/Ui/ParallaxSection'
import { useState } from 'react'
import * as action from "../../store/actions";
import { useDispatch } from 'react-redux'



const ContactPage = (props) => {
    //user redux.
    const dispatch = useDispatch()

    const [dataContact, setDataContact] = useState({
        name: '',
        mail: '',
        noidung: '',
        phone: '',
    })


    const handleInput = (e) => {
        // console.log("Name: ", e.target.name, " Value: ", e.target.value)
        setDataContact(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSentContact = () => {
        if (!dataContact.name || !dataContact.mail || !dataContact.noidung || !dataContact.phone) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        if (!dataContact.mail.includes('@')) {
            alert("Email không hợp lệ. Vui Lòng kiểm tra lại.");
            return;
        }

        dispatch(action.SendMailContactStart(dataContact))
        // console.log("DataContact: ", dataContact)
        // alert("Sen data: ")
    }

    return (
        <>
            <MenuHeader />
            <div className='Contact-full' style={{ backgroundColor: '#FDF6EE' }}>
                <ParallaxSection
                    title="Kết Nối"
                    backgroudImage='https://picsum.photos/800/400'
                    scrollTop={props.scrollTop}
                />
                <div className='contact-tile container'>
                    <h1>Liên Hệ Với Chúng Tôi</h1>
                    <div className='underline'></div>
                    <div className='content-title'>
                        Nếu bạn cần thêm thông tin hoặc trao đổi công việc xin vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại được cung cấp bên dưới.
                    </div>
                </div>
                <div className="contact-container container">
                    <div className="contact-form">
                        <input type="text"
                            name='name'
                            placeholder="Tên của bạn"
                            onChange={(e) => handleInput(e)}
                        />
                        <input type="number"
                            placeholder="Số điện thoại của bạn là gì"
                            name='phone'
                            onChange={(e) => handleInput(e)}
                        />
                        <input type="email"
                            placeholder="Email của bạn"
                            name='mail'
                            onChange={(e) => handleInput(e)}
                        />
                        <textarea placeholder="Lời nhắn của bạn"
                            rows="8"
                            name='noidung'
                            onChange={(e) => handleInput(e)}
                        />
                        <button type="submit" onClick={() => handleSentContact()}>GỬI</button>
                    </div>

                    <div className="contact-info">
                        <div className="info-block">
                            <span className="icon">📞</span>
                            <div>
                                <h4>ĐIỆN THOẠI</h4>
                                <p>0888 808 808</p>
                            </div>
                        </div>

                        <div className="info-block">
                            <span className="icon">✉️</span>
                            <div>
                                <h4>EMAIL</h4>
                                <p>Email: nachaxinchao@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ContactPage;