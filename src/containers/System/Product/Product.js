import React, { Component } from 'react';
import { connect } from 'react-redux';
// import "../System/Product.scss";

class Product extends Component {
    state = {}

    componentDidMount() {}

    render() {
        return (
            <>
                <div className="user-manage__title text-center mb-4">
                    Quản Lý Sản Phẩm
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
