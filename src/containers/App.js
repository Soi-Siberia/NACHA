import { useEffect, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import '../containers/App.scss';
import { path } from '../utils';

import Home from '../routes/Home';
import Login from '../routes/Login';
import System from '../routes/System';

// views 
import HomePage from '../views/HomePage';
import Category from '../routes/Category';
import Product from '../views/Product/Product';
import DetailProduct from '../views/Product/DetailProduct';
import About from '../views/About/about';
import Menu from '../views/Menu/Menu';
import Contact from '../views/Contact/Contact';
import Cart from '../views/ShoppingCart/Cart'
import Store from '../views/Store/Store'
// scroll
import CustomScrollbars from '../components/CustomScrollbars';

const App = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const location = useLocation()
    const scrollRef = useRef(null); // tham chiếu đến dom element con
    const [scrollPercent, setScrollPercent] = useState(0)


    //scroll to top animation parallax
    const handleScroll = (values) => {
        setScrollTop(values.scrollTop);

        const totalScroll = values.scrollHeight - values.clientHeight
        // console.log("==> totalScroll: ", totalScroll)
        const progress = totalScroll > 0 ? (scrollTop / totalScroll) : 0;
        // console.log("==>check progress: ", progress)
        setScrollPercent(progress)
    };

    const handeOnSrollTop = () => {
        let currentPartScrollTop = window.location.pathname;
        let listPartNoScrollTop = [path.LOGIN, path.SYSTEM];
        return !listPartNoScrollTop.some(part => currentPartScrollTop.startsWith(part));
    };
    const isSrollTop = handeOnSrollTop();
    useEffect(() => {
        if (isSrollTop && scrollRef.current) {
            scrollRef.current.scrollTop(0)
        }
    }, [location.pathname, isSrollTop])
    const handleClickScrollTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop(0);
        }
    };

    return (
        <>
            {/* <Router history={history}> */}
            <div className="main-container">
                <span className="content-container">
                    <CustomScrollbars
                        ref={scrollRef}
                        style={{ height: '100vh', width: '100%' }}
                        onScrollFrame={isSrollTop ? handleScroll : undefined}
                    >
                        <Switch>
                            <Route path={path.HOME} exact component={Home} />
                            <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                            <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />

                            {/*client*/}
                            <Route path={'/category/'} component={Category} />
                            <Route path={'/product/'} exact component={Product} />
                            <Route path={'/product/detail/:id'} component={DetailProduct} />
                            <Route path={path.HomePage} component={HomePage} />
                            <Route path={'/about'} render={(myProps) => <About {...myProps} scrollTop={scrollTop} />} />
                            <Route path={'/menu'} render={(myPropsApp) => <Menu {...myPropsApp} scrollTop={scrollTop} />} />
                            <Route path={'/store'} render={(myPropsApp) => <Store {...myPropsApp} scrollTop={scrollTop} />} />
                            <Route path={'/contact'} render={(myProps) => <Contact {...myProps} scrollTop={scrollTop} />} />
                            <Route path={'/cart'} render={(myPropsApp) => <Cart {...myPropsApp} scrollTop={scrollTop} />} />

                        </Switch>
                    </CustomScrollbars>
                </span>

                <button
                    className={`btn-scroll-top ${isSrollTop && scrollTop > 200 ? 'show' : ''}`}
                    onClick={handleClickScrollTop}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 15l6-6 6 6" stroke="#444" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="progress-ring" width="52" height="52">
                        <circle
                            className="progress-ring-circle"
                            stroke="#00bcd4"
                            strokeWidth="4"
                            fill="transparent"
                            r="24"
                            cx="26"
                            cy="26"
                            style={{
                                strokeDasharray: `${2 * Math.PI * 24}`,
                                strokeDashoffset: `${2 * Math.PI * 24 * (1 - scrollPercent)}`
                            }}
                        />
                    </svg>
                </button>

                <ToastContainer
                    position="top-right"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
            {/* </Router> */}
        </>
    );
};

export default App;