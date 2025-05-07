import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import ManageCategory from "../containers/System/Category/CategoryManage"

// import RegisterPackageGroupOrAcc from '../containers/Category/RegisterPackageGroupOrAcc';
import Header from'../containers/Header/Header';

class Category extends Component {
    render() {
        const { systemMenuPath , isLoggedIn} = this.props;
        return (
            <React.Fragment>
            {isLoggedIn && <Header />}
            <div className="system-container">
                <div className="system-list">
                    <Switch>
                        <Route path="/category/manage-category" component={ManageCategory} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
