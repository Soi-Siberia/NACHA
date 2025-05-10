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
            dataEditSent:'',
            listCategory: [],
            listProducts: [],

        };
    }

    componentDidMount() {
        this.props.getAllCategoryStart();
        this.props.getAllProductStart();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.listCategory !== this.props.listCategory) {
            // console.log('listCategory', this.props.listCategory)
            let data = this.buildDataInputSelect(this.props.listCategory);
            this.setState({
                listCategory: data
            })
        }

        if(prevProps.listProducts !== this.props.listProducts) {
            // console.log('listProducts', this.props.listProducts)
            this.setState({
                listProducts: this.props.listProducts
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
    toggleEditProuct = ()=>{
        this.setState({
            isOpenEdit: !this.state.isOpenEdit
        })
    }

    // mutiselect
    handldMutiSelect = () => {
        // console.log('data', data)
    }

    //open Modal
    handleOpenModalAdd = ()=> {
        this.setState({
            isOpenAddNew: true,
        })
    }

    handleOpenModalEdit = (e, data) => {
        e.stopPropagation();
        let action = e.target.name;

        if (action === 'edit') {
            let categoryEdit = this.buildDataInputSelect(data.categories);
            let dataEditDone = {
                ...data,
                categories: categoryEdit
            };

            this.setState((prevState) => ({
                isOpenEdit: !prevState.isOpenEdit,
                dataEditSent: dataEditDone
            }));
        }

        if (action === 'delete') {
            let confirmDelete = window.confirm("Bạn chắc chắn xóa? Dữ liệu không thể khôi phục.");
            if (confirmDelete) {
                alert("Xóa thành công!");
                // Thêm logic xóa ở đây nếu có
            }
        }
    }


    //call redux create new product
    handelCreateNewProduct = (data) => {
        // console.log('===> data chill sent', data)
        this.props.createNewProductStart(data);
    }

    handlEditProduct = (data) =>{
        console.log("==> data edit product: ", data)
    }


    render() {
        let { isOpenAddNew, listCategory, listProducts, isOpenEdit, dataEditSent} = this.state;
        // console.log('===> listProducts', listProducts)
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

                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tên Sản Phẩm</th>
                                                <th scope="col">Hình ảnh</th>
                                                <th scope="col">Mô tả</th>
                                                <th scope="col">Danh Mục</th>
                                                <th scope="col">Giá</th>
                                                <th scope="col">Trạng thái</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                listProducts && listProducts.length>0 ? (
                                                listProducts.map((item, index) => {
                                                return (
                                                    <tr className='table-data'
                                                        style={{verticalAlign:'baseline'}} 
                                                        key={index}>
                                                        <th scope="row">{index+1}</th>
                                                        <td>{item.name}</td>
                                                        <td>
                                                            {item.imgBlod && item.imgBlod.length > 50 ? (
                                                                <img src={item.imgBlod} alt="item" style={{width: '80px', height: '80px'}} />
                                                            ) : (
                                                                <span>Chưa úp ảnh</span>
                                                            )}
                                                        </td>
                                                        <td>{item.description}</td>
                                                        <td>{item.categories && item.categories.length > 0 && item.categories.map(item => item.name).join(', ')}</td>
                                                        <td>{item.base_price}</td>
                                                        <td>{item.is_active ? "Mở": "Đóng"}</td>
                                                        <td>
                                                            <div className="Chucnang" style={{display: 'flex', gap: '10px'}}>
                                                                <div className="btn-sua">
                                                                    <button 
                                                                        className="btn btn-primary btn-sm"
                                                                        style={{padding: '0px 10px'}}
                                                                        name='edit'
                                                                        onClick={(e) => this.handleOpenModalEdit(e, item)}
                                                                    >Sửa</button>
                                                                </div>
                                                                <div className="btn-Xoa">
                                                                    <button 
                                                                        className="btn btn-primary btn-sm"
                                                                        style={{padding: '0px 10px',backgroundColor: "red", border: "none"}}
                                                                        name='delete'
                                                                        onClick={(e) => this.handleOpenModalEdit(e, item)}
                                                                    >Xóa</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )})) : 
                                                (
                                                    <tr>
                                                        <td colSpan="5" className="text-center">Không có người dùng nào</td>
                                                    </tr>
                                                )
                                            }

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
                />

                <ModalProductEdit
                    isOpenEdit={isOpenEdit}
                    toggleEditProuct = {this.toggleEditProuct}
                    listCategory={listCategory}
                    dataEdit = {dataEditSent}
                    dataEditProduct = {this.handlEditProduct}
                />


            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        listCategory: state.category.listCategory,
        listProducts: state.product.listProducts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllCategoryStart: () => dispatch(actions.getAllCategoryStart()),
        createNewProductStart: (data) => dispatch(actions.createNewProductStart(data)),
        getAllProductStart: () => dispatch(actions.getAllProductStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManager);
