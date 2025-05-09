import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalAddNewProduct from '../Modal/ModalProduct';
import * as actions from '../../../store/actions';


class ProductManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenAddNew: false,
            listCategory: [],
        };
    }

    componentDidMount() {
        this.props.getAllCategoryStart();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.listCategory !== this.props.listCategory) {
            // console.log('listCategory', this.props.listCategory)
            let data = this.buildDataInputSelect(this.props.listCategory);
            this.setState({
                listCategory: data
            })
        }
    }

    //build data for mutiselect
    buildDataInputSelect = (inputData) => {
        if (!Array.isArray(inputData) || inputData.length === 0) return [];
        return inputData.map(item => ({
            id: item.id,
            label: item.name,
        }));
    }
    

    //modal add new product
    toggleNewProuct = () => {
        this.setState({
            isOpenAddNew: !this.state.isOpenAddNew
        })
    }


    // mutiselect
    handldMutiSelect = (data) => {
        // console.log('data', data)
    }


    //add new product
    handleOpenModalAdd = ()=> {
        this.setState({
            isOpenAddNew: true
        })
    }

    handelCreateNewProduct = (data) => {
        console.log('===> data chill sent', data)
        this.props.createNewProductStart(data);
    }


    render() {
        let { isOpenAddNew, listCategory } = this.state;
        return (
            <>
                <div className='container-full'>
                    <div className='container'>
                        <div className='row '>
                            <div className='col-12'>
                                <div className='product-manage__title text-center mb-4'>
                                    Quản Lý Sản Phẩm
                                </div>
                                <div className='product-manage-add-new' style={{ textAlign: 'center' }}>
                                    <button className='btn btn-primary' onClick={()=> this.handleOpenModalAdd()}>Thêm mới sản phẩm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalAddNewProduct
                    isOpenAdd={isOpenAddNew}
                    toggleNewProuct={this.toggleNewProuct}
                    dataNewProduct={this.handelCreateNewProduct}
                    listCategory={listCategory}
                />

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        listCategory: state.category.listCategory,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllCategoryStart: () => dispatch(actions.getAllCategoryStart()),
        createNewProductStart: (data) => dispatch(actions.createNewProductStart(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManager);
