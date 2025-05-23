import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import '../containers/App.scss'
import { path } from '../utils'

import Home from '../routes/Home';
import Login from '../routes/Login';
import System from '../routes/System';

// import { CustomToastCloseButton } from '../components/CustomToast';
//views 
import HomePage from '../views/homePage';
import Category from '../routes/Category';
import Product from '../views/Product/Product';
import DetailProduct from '../views/Product/DetailProduct';
import About from '../views/About/about'
//scroll
import CustomScrollbars from '../components/CustomScrollbars';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0
        }
    }

    handleScroll = (values) => {
        this.setState({
            scrollTop: values.scrollTop
        })
    }

    handeOnSrollTop = () => {
        let currentPartScrollTop = window.location.pathname;
        console.log("==> currentPartScrollTop: ", currentPartScrollTop)
        let listPartNoScrollTop = [path.LOGIN, path.SYSTEM]

        return !listPartNoScrollTop.some(part => currentPartScrollTop.startsWith(part))
    }


    render() {
        const isSrollTop = this.handeOnSrollTop()
        return (
            <Fragment>
                <Router history={history}>

                    <div className="main-container">
                        <span className="content-container">
                            <CustomScrollbars style={{ height: '100vh', with: '100%' }}
                                onScrollFrame={isSrollTop ? this.handleScroll : undefined}
                            >
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />

                                    {/*client*/}
                                    <Route path={'/category/'} component={(Category)} />
                                    <Route path={'/product/'} exact component={(Product)} />
                                    <Route path={'/product/detail/:id'} component={(DetailProduct)} />
                                    <Route path={path.HomePage} component={(HomePage)} />
                                    <Route path={'/about/'} render={(myProps) => <About {...myProps} scrollTop={this.state.scrollTop} />} />
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
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        // isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);