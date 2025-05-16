import React, { Component } from 'react';
import { connect } from "react-redux";
import "../Product/Product.scss"
import * as action from "../../store/actions"
import Menu from "../../components/layout/menuheader"
import Footer from "../../components/Footer/Footer"
// import { Redirect, Route, Switch } from 'react-router-dom';

// import RegisterPackageGroupOrAcc from '../containers/Product/RegisterPackageGroupOrAcc';



class Product extends Component {

    constructor(props) {
    super(props);
        this.state = {
            categories:[],
            listProduct: [],
            filter: 'All Products',
        };
    }

    componentDidMount(){
        this.props.getAllProductStart()
        this.props.getAllCategoryStart()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.listProducts !== this.props.listProducts)
        {
            // console.log("==> listProducts: ", this.props.listProducts)

            // let price = allcodes.map(price => price.product_allcode.price).join(' - ')
            this.setState({
                listProduct: this.props.listProducts
            })
        }

        if(prevProps.listCategory !== this.props.listCategory)
        {
            console.log("==> list listCategory", this.props.listCategory)
            this.setState({
                categories: this.props.listCategory
            })
        }
    }


    render() {
        let listProduct = this.state.listProduct
        console.log("==> products: ", listProduct)
        return (
            <React.Fragment>
                <Menu />
                <div className="product-page">
                    <div className='container product-container'>
                        <div className='product-title'>
                            <h1 className="title">HOT HOT SẢN PHẢM NACHA</h1>
                            <div className="filter-bar">
                                <select className="filter-select">
                                    <option value="all">Filter</option>
                                </select>
                                <select className="filter-select">
                                    <option value="all">All Products</option>
                                </select>
                                <input className="search-input" placeholder="Search..." />
                            </div>
                        </div>

                        <div className='product-conten'>
                            <div className='product-right stikySidebar'>
                                <h2>Danh sách thể loại</h2>
                                <ul className="category-list">
                                    {this.state.categories.map((item, index) => (
                                        <li key={index} className="category-item">{item.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='product-left'>
                                <div className="product-grid">
                                    {
                                        listProduct && listProduct.map((product, index) => {
                                            let price = product.allcodes.map(price => price.product_allcode.price)
                                            // console.log("==> price: ", price)
                                            let minPrice = Math.min(...price)
                                            let maxPrice = Math.max(...price)
                                            return(
                                                <div className="product-card" key={index}>
                                                    <img src={product.imgBlod} alt={product.name} className="product-img" />
                                                    <h3>{product.name}</h3>
                                                    <p>{`${minPrice} - ${maxPrice} đ`}</p>
                                                <button className="add-btn">Thêm vào giỏ</button>
                                            </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        listProducts: state.product.listProducts,
        listCategory: state.category.listCategory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProductStart: () => dispatch(action.getAllProductStart()),
        getAllCategoryStart: () => dispatch(action.getAllCategoryStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
