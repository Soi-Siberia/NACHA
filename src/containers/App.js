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
import Product  from '../views/Product/Product';
import DetailProduct from '../views/Product/DetailProduct';
import About from '../views/About/about'
//cuộn chuột
// import CustomScrollbars from '../components/CustomScrollbars';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        scrollTop: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll(e) {
    // console.log("==> Scroll Top: ", e.target.scrollTop)
    this.setState({
        scrollTop: e.target.scrollTop
    })
  }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container" onScroll={e => this.handleScroll(e)}>
                        <span className="content-container">
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    
                                 {/*client*/}
                                    <Route path={'/category/'} component={(Category)} />
                                    <Route path={'/product/'} exact  component={(Product)} />
                                    <Route path={'/product/detail/:id'} component={(DetailProduct)} />
                                    <Route path={path.HomePage} component={(HomePage)} />
                                    <Route path={'/about/'} render = {(myProps) => <About {...myProps} scrollTop = {this.state.scrollTop}/>} />
                                    {/* <Route path={'/sanPham/'} component= */}
                                </Switch>
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