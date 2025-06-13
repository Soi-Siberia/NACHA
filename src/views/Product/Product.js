import React, { Component } from 'react';
import { connect } from "react-redux";
import "../Product/Product.scss"
import * as action from "../../store/actions"
import Menu from "../../components/layout/menuheader"
import Footer from "../../components/Footer/Footer"
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DetailProdut from '../../components/layout/DetailProdut';
// import RegisterPackageGroupOrAcc from '../containers/Product/RegisterPackageGroupOrAcc';



class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            listProduct: [],
            detailProduct: [],
            idSearch: "all",
            searchKeyword: "",
            isOpenDetailProduct: false,
        };
    }

    componentDidMount() {
        this.props.getAllProductStart()
        this.props.getAllCategoryStart()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.listProducts !== this.props.listProducts) {
            // console.log("==> listProducts: ", this.props.listProducts)

            // let price = allcodes.map(price => price.product_allcode.price).join(' - ')
            this.setState({
                listProduct: this.props.listProducts
            })
        }

        if (prevProps.listCategory !== this.props.listCategory) {
            // console.log("==> list listCategory", this.props.listCategory)
            this.setState({
                categories: this.props.listCategory
            })
        }
    }

    //sử lý seach category
    handleSearchCategory = (key) => {
        // console.log("Search Category: ", key)
        if (key === 'all') {
            this.setState({
                idSearch: key
            })

        } else {

            this.setState({
                idSearch: key.id
            })

        }
    }
    // search keyword
    handleOnchangKeySearch = (e) => {
        // console.log(e.target.value)
        this.setState({
            searchKeyword: e.target.value
        })
    }

    //detail product
    handleDeailProduct = (product) => {
        // alert(`id prodcut: ${id}`)
        // this.props.history.push(`/product/${product.name}`)
        this.setState({
            isOpenDetailProduct: true,
            detailProduct: product
        })

    }


    render() {
        let listProducts = this.state.listProduct
        // console.log("==> listProduct", listProduct)
        let idSearch = this.state.idSearch

        let listProductCategory = idSearch === "all" ? listProducts : listProducts.filter(product => product.categories.some(cate => cate.id === idSearch))

        let listProduct = listProductCategory.filter(product => product.name.toLowerCase().includes(this.state.searchKeyword.toLowerCase()))
        // console.log("list product key word: ", Product)
        return (
            <React.Fragment>
                <Helmet>
                    <title>NaCha - Product</title>
                </Helmet>
                <Menu />
                <div className="product-page">
                    <div className='container product-container'>
                        <div className='product-title'>
                            <h1 className="title">HOT HOT SẢN PHẨM NACHA</h1>
                            <div className="filter-bar">
                                <input
                                    className="search-input"
                                    placeholder="Tìm nhanh món mình thích thích thích...."
                                    onChange={(e) => this.handleOnchangKeySearch(e)} />
                            </div>
                        </div>

                        <div className='product-conten'>
                            <div className='product-right stikySidebar'>
                                <h2>Danh sách thể loại</h2>
                                <ul className="category-list">
                                    <li
                                        className={idSearch === 'all' ? "category-item active" : "category-item"}
                                        onClick={() => this.handleSearchCategory("all")}>Tất Cả
                                    </li>
                                    {this.state.categories.map((item, index) => (
                                        <li key={index}
                                            className={idSearch === item.id ? "category-item active" : "category-item"}
                                            onClick={() => this.handleSearchCategory(item)}>{item.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='product-left'>
                                <div className="product-grid">
                                    {
                                        listProduct && listProduct.map((product, index) => {
                                            // console.log("==> product: ", product)
                                            // let price = product.allcodes.map(price => price.product_allcode.price)
                                            // console.log("==> price: ", price)
                                            // let minPrice = Math.min(...price)
                                            // let maxPrice = Math.max(...price)
                                            return (
                                                <div className="product-card" key={index}
                                                    onClick={() => this.handleDeailProduct(product)}
                                                >
                                                    <img src={product.imgBlod} alt={product.name} className="product-img" />
                                                    <h3>{product.name}</h3>
                                                    {/* <p>{`${minPrice} - ${maxPrice} đ`}</p> */}

                                                    {/* <button className="add-btn">Thêm vào giỏ</button> */}
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            {/* <div className='product-order'>

                            </div> */}
                        </div>
                    </div>
                    <Footer />
                </div>


                <DetailProdut
                    isOpenDetailProduct={this.state.isOpenDetailProduct}
                    toggleNewCategory={() => this.setState({ isOpenDetailProduct: !this.state.isOpenDetailProduct })}
                    detailProduct={this.state.detailProduct}
                />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
