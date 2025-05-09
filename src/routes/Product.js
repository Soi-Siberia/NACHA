import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import productManager from '../containers/System/Product/ProductManager'

// import RegisterPackageGroupOrAcc from '../containers/Product/RegisterPackageGroupOrAcc';
import Header from'../containers/Header/Header';

class Product extends Component {
    render() {
        const { systemMenuPath , isLoggedIn} = this.props;
        return (
            <React.Fragment>
            {isLoggedIn && <Header />}
            <div className="system-container">
                <div className="system-list">
                    <Switch>
                        <Route path="/product/manage-product" component={productManager} />
                        <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
