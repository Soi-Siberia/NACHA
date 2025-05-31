import React, { Component } from 'react';
import { connect } from "react-redux";
import "../Product/DetailProduct.scss"
// import * as action from "../../store/actions"
import Menu from "../../components/layout/menuheader"
import Footer from "../../components/Footer/Footer"
import { Helmet } from 'react-helmet';
// import { Redirect, Route, Switch } from 'react-router-dom';

// import RegisterPackageGroupOrAcc from '../containers/Product/RegisterPackageGroupOrAcc';



class DetailProduct extends Component {


    componentDidMount() {

    }

    componentDidUpdate(prevProps) {

    }


    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>NaCha - Product</title>
                </Helmet>
                <Menu />
                <div className="detail-product">
                    <div className='detail-product-container container'>
                        Chi tiết sản phẩm
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
