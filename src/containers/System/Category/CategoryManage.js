
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import "../System/CategoryManage.scss";
import * as action from '../../../store/actions';
import ModalCategory from '../Modal/ModalCategory.js';
import ModalEditCategory from '../Modal/ModalCategoryEdit.js';

class CategoryManage extends Component {
    constructor(props){
        super(props);
        this.state ={
            isOpenNewCategory: false,
            listCategory: "",
            isOpenEditCategory: false,
            dataEditCategory: '',
        }
    }

    componentDidMount() {
        this.props.getAllCategoryStart();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.listCategory !== this.props.listCategory) {
            this.setState({
                listCategory: this.props.listCategory
            })
        }
    }

    /***************************/

    // mở modal hêm mới category

    handleAddNew = ()=>{
        this.setState({
            isOpenNewCategory: !this.state.isOpenNewCategory
        })
    }

    //close modal thêm mới category
    toggle = () => {
        this.setState({
            isOpenNewCategory: !this.state.isOpenNewCategory
        })
    }
    // call api lấy create category
    handlCreateNewCaterory = (data) => {
        // console.log("data create category: ", data)
        this.props.createNewCategoryStart(data)
    }

    // đóng modal sửa category
    toggleEditCategory = () => {
        this.setState({
            isOpenEditCategory: !this.state.isOpenEditCategory,
            dataEditCategory: ''
        })
    }


    // button sửa và xóa category
    handlUserManager = (e, item) => {
        let nameBtn = e.target.name;
        if(nameBtn === 'edit'){
            this.setState({
                isOpenEditCategory: true,
                dataEditCategory: item
            })

        }else if(nameBtn === 'delete'){
            let confimDelete = window.confirm("Bạn có chắc chắn không, Dữ liệu không thể khôi phục?")
            if(confimDelete === true) {
                this.props.deleteCategoryStart(item.id)
            }
        }
    }

    // call api sửa category
    handlEditCaterory = (data) => {
        // console.log("data edit category: ", data)
        this.props.editCategoryStart(data)
    }

    

    render() {
        let {listCategory, isOpenNewCategory, isOpenEditCategory, dataEditCategory} = this.state;
        // console.log("==> list category ", listCategory)
        return (
            <>
                <div className="list-category container mt-5">
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        onClick={() => this.handleAddNew()}
                    >
                            Thêm mới người dùng
                    </button>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên Danh Mục</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Mô tả</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listCategory && listCategory.length>0 ? (
                                    listCategory.map((item, index) => {
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
                                            <td>{item.is_active ? "Mở": "Đóng"}</td>
                                            <td>
                                                <div className="Chucnang" style={{display: 'flex', gap: '10px'}}>
                                                    <div className="btn-sua">
                                                        <button 
                                                            className="btn btn-primary btn-sm"
                                                            style={{padding: '0px 10px'}}
                                                            name='edit'
                                                            onClick={(e) => this.handlUserManager(e, item)}
                                                        >Sửa</button>
                                                    </div>
                                                    <div className="btn-Xoa">
                                                        <button 
                                                            className="btn btn-primary btn-sm"
                                                            style={{padding: '0px 10px',backgroundColor: "red", border: "none"}}
                                                            name='delete'
                                                            onClick={(e) => this.handlUserManager(e, item)}
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

                <ModalCategory
                    OpenNewCategory = {isOpenNewCategory}
                    toggleNewCategory = {() => this.toggle()}
                    dataCreate = {this.handlCreateNewCaterory}
                />

                <ModalEditCategory 
                    OpenEditCategory = {isOpenEditCategory}
                    toggleEditCategory = {() => this.toggleEditCategory()}
                    dataEditCategory = {dataEditCategory}
                    dataUpdate = {this.handlEditCaterory}
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
        createNewCategoryStart: (data) => dispatch(action.createNewCategoryStart(data)),
        getAllCategoryStart: () => dispatch(action.getAllCategoryStart()),
        deleteCategoryStart: (id) => dispatch(action.deleteCategoryStart(id)),
        editCategoryStart:(data) => dispatch(action.editCategoryStart(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManage);
