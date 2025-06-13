import './Contact.scss';
import MenuHeader from '../../components/layout/menuheader';
import Footer from '../../components/Footer/Footer';
import ParallaxSection from '../../components/Ui/ParallaxSection';
import { useState } from 'react';
import * as action from '../../store/actions';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
// Optional: Thêm toast để thay thế alert
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = (props) => {
    const dispatch = useDispatch();

    const [dataContact, setDataContact] = useState({
        name: '',
        mail: '',
        noidung: '',
        phone: '',
    });

    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        setDataContact((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSentContact = async () => {
        const { name, mail, noidung, phone } = dataContact;

        if (!name || !mail || !noidung || !phone) {
            toast.error('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (!mail.includes('@')) {
            toast.error('Email không hợp lệ. Vui lòng kiểm tra lại.');
            return;
        }

        setLoading(true);
        await dispatch(action.SendMailContactStart(dataContact));
        setLoading(false);
        toast.success('Gửi liên hệ thành công!');
    };

    return (
        <>
            <Helmet>
                <title>NaCha - Liên Hệ</title>
                <meta
                    name="description"
                    content="Liên hệ với NaCha để được tư vấn và hỗ trợ qua email hoặc số điện thoại."
                />
                <meta property="og:title" content="NaCha - Liên Hệ" />
                <meta
                    property="og:description"
                    content="Liên hệ với NaCha để được tư vấn và hỗ trợ nhanh chóng."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/contact" />
                <link rel="canonical" href="https://yourdomain.com/contact" />
            </Helmet>

            <MenuHeader />
            <div className="Contact-full" style={{ backgroundColor: '#FDF6EE', padding: '20px 0px' }}>
                <ParallaxSection
                    title="Kết Nối"
                    backgroudImage="https://picsum.photos/800/400"
                    scrollTop={props.scrollTop}
                />

                <div className="contact-tile container">
                    <h1>Liên Hệ Với Chúng Tôi</h1>
                    <div className="underline"></div>
                    <div className="content-title">
                        Nếu bạn cần thêm thông tin hoặc trao đổi công việc, xin vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại bên dưới.
                    </div>
                </div>

                <div className="contact-container container">
                    <div className="contact-form">
                        <label htmlFor="name">Tên</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tên của bạn"
                            value={dataContact.name}
                            onChange={handleInput}
                        />

                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Số điện thoại của bạn"
                            value={dataContact.phone}
                            onChange={handleInput}
                        />

                        <label htmlFor="mail">Email</label>
                        <input
                            type="email"
                            id="mail"
                            name="mail"
                            placeholder="Email của bạn"
                            value={dataContact.mail}
                            onChange={handleInput}
                        />

                        <label htmlFor="noidung">Lời nhắn</label>
                        <textarea
                            id="noidung"
                            name="noidung"
                            rows="8"
                            placeholder="Lời nhắn của bạn"
                            value={dataContact.noidung}
                            onChange={handleInput}
                        />

                        <button type="submit" onClick={handleSentContact} disabled={loading}>
                            {loading ? 'Đang gửi...' : 'GỬI'}
                        </button>
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
                                <p>nachaxinchao@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
