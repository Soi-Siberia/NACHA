import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux';
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

// scroll
import CustomScrollbars from '../components/CustomScrollbars';

const App = () => {
    const [scrollTop, setScrollTop] = useState(0);
    // const started = useSelector(state => state.app.started);
    // const isLoggedIn = useSelector(state => state.admin.isLoggedIn);

    const handleScroll = (values) => {
        setScrollTop(values.scrollTop);
    };

    const handeOnSrollTop = () => {
        let currentPartScrollTop = window.location.pathname;
        let listPartNoScrollTop = [path.LOGIN, path.SYSTEM];
        return !listPartNoScrollTop.some(part => currentPartScrollTop.startsWith(part));
    };

    const isSrollTop = handeOnSrollTop();

    return (
        <>
            <Router history={history}>
                <div className="main-container">
                    <span className="content-container">
                        <CustomScrollbars
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
                                <Route path={'/menu'} component={Menu} />
                                <Route path={'/contact'} render={(myProps) => <Contact {...myProps} scrollTop={scrollTop} />} />
                            </Switch>
                        </CustomScrollbars>
                    </span>
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
            </Router>
        </>
    );
};

export default App;