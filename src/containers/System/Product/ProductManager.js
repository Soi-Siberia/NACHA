import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalAddNewProduct from '../Modal/ModalProduct';
import ModalProductEdit from '../Modal/ModalProductEdit';
import * as actions from '../../../store/actions';


class ProductManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenAddNew: false,
            isOpenEdit: false,
            dataEditSent: '',
            listCategory: [],
            listProducts: [],
            listSize: [],

            products: [{
                name: 'Trà Sữa',
                sizes: [
                    { size: 'Nhỏ', price: 15000 },
                    { size: 'Vừa', price: 20000 },
                    { size: 'Lớn', price: 35000 }
                ],
                category: 'Trà Sữa',
                functions: ['Xóa', 'Sữa']
            }
            ]
        };
    }

    componentDidMount() {
        this.props.getAllCategoryStart();
        this.props.getAllProductStart();
        this.props.getallcodeSizeProductStart();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.listCategory !== this.props.listCategory) {
            // console.log('listCategory', this.props.listCategory)
            let data = this.buildDataInputSelect(this.props.listCategory);
            this.setState({
                listCategory: data
            })
        }

        if (prevProps.listProducts !== this.props.listProducts) {
            // console.log('listProducts', this.props.listProducts)
            this.setState({
                listProducts: this.props.listProducts
            })
        }
        if (prevProps.listSize !== this.props.listSize) {
            this.setState({
                listSize: this.props.listSize
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
    toggleEditProuct = () => {
        this.setState({
            isOpenEdit: !this.state.isOpenEdit
        })
    }

    // mutiselect
    handldMutiSelect = () => {
        // console.log('data', data)
    }

    //open Modal
    handleOpenModalAdd = () => {
        this.setState({
            isOpenAddNew: true,
        })
    }

    //call redux create new product
    handelCreateNewProduct = (data) => {
        // console.log('===> handelCreateNewProduct', data)
        this.props.createNewProductStart(data);
    }

    handlEditProduct = (data) => {
        // console.log("==> data edit product done: ", data)
        this.props.updateProductStart(data)
    }
    handlOnchangButon = (e, data) => {
        if (e.target.name === 'edit') {
            this.setState({
                isOpenEdit: true,
                dataEditSent: data
            })
        } else {
            if (e.target.name === 'delete') {
                let confimDelte = window.confirm("Chắc chắn xóa!!! Dữ liệu không thể khôi phục")
                if (confimDelte) {
                    this.props.delteteProductStart(data.id)
                }
            }
        }
    }


    render() {
        let { isOpenAddNew, listCategory, listProducts, isOpenEdit, dataEditSent } = this.state;
        console.log('===> listProducts', listProducts)

        return (
            <>
                <div className='container-full'>
                    <div className='container'>
                        <div className='row '>
                            <div className='col-12'>
                                <div className='product-manage__title text-center mb-4'>
                                    Quản Lý Sản Phẩm
                                </div>
                                <div className='product-manage-add-new mb-5' style={{ textAlign: 'center' }}>
                                    <button className='btn btn-primary' onClick={() => this.handleOpenModalAdd()}>Thêm mới sản phẩm</button>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Tìm kiếm</label>
                                        <input type="text" class="form-control mb-5 mt-3" placeholder="Tìm kiếm sản phẩm theo tên, danh mục" />
                                    </div>
                                </form>

                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-light">
                                            <tr style={{ textAlign: "center", verticalAlign: 'middle', backgroundColor: '#0071BA', color: "white" }}>
                                                <th>Sản Phẩm</th>
                                                <th>Size</th>
                                                <th>Giá</th>
                                                <th>Danh Mục</th>
                                                <th>Mô Tả</th>
                                                <th>Chức Năng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listProducts.map((product, productIndex) =>
                                                product.allcodes.map((s, sizeIndex) => (
                                                    <tr key={`${productIndex}-${sizeIndex}`} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                        {sizeIndex === 0 && (
                                                            <td rowSpan={product.allcodes.length}>
                                                                <div className='conten-table' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                                                    {product.imgBlod && product.imgBlod.length > 50 ? (
                                                                        <img src={product.imgBlod} alt="item" style={{ width: '80px', height: '80px' }} />
                                                                    ) : (
                                                                        <span>Chưa úp ảnh</span>
                                                                    )}
                                                                    <span style={{ flex: '1' }} >{product.name}</span>
                                                                </div>
                                                            </td>
                                                        )}
                                                        <td >{s.name}</td>
                                                        <td>{s.product_allcode.price}</td>
                                                        {sizeIndex === 0 && (
                                                            <>
                                                                <td rowSpan={product.allcodes.length} style={{ width: '25%' }}>{product.categories.map(option => option.name).join(', ')}</td>
                                                                <td style={{ width: '25%' }} rowSpan={product.allcodes.length}>{product.description}</td>
                                                                <td rowSpan={product.allcodes.length}>
                                                                    <div className="Chucnang"
                                                                        style={{ display: 'flex', alignItems: 'center', justifyContent: "space-around" }}
                                                                    >
                                                                        <div className="btn-sua">
                                                                            <button
                                                                                style={{ padding: '0px 10px' }}
                                                                                className="btn btn-primary"
                                                                                name='edit'
                                                                                onClick={(e) => this.handlOnchangButon(e, product)}
                                                                            >Sửa</button>
                                                                        </div>
                                                                        <div className="btn-Xoa">
                                                                            <button
                                                                                className="btn btn-primary"
                                                                                style={{ backgroundColor: "red", border: "none", padding: '0px 10px' }}
                                                                                name='delete'
                                                                                onClick={(e) => this.handlOnchangButon(e, product)}
                                                                            >Xóa</button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </>
                                                        )}
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
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
                    listSize={this.state.listSize}
                />

                <ModalProductEdit
                    isOpenEdit={isOpenEdit}
                    toggleEditProuct={this.toggleEditProuct}
                    listCategory={listCategory}
                    dataEdit={dataEditSent}
                    dataEditProduct={this.handlEditProduct}
                    listSize={this.state.listSize}
                />


            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        listCategory: state.category.listCategory,
        listProducts: state.product.listProducts,
        listSize: state.product.listSize,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllCategoryStart: () => dispatch(actions.getAllCategoryStart()),
        createNewProductStart: (data) => dispatch(actions.createNewProductStart(data)),
        getAllProductStart: () => dispatch(actions.getAllProductStart()),
        delteteProductStart: (id) => dispatch(actions.delteteProductStart(id)),
        getallcodeSizeProductStart: () => dispatch(actions.getallcodeSizeProductStart()),
        updateProductStart: (data) => dispatch(actions.updateProductStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManager);
