// src/containers/System/UserManage.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../System/UserManage.scss";
import * as action from "../../store/actions";
import ModalUser from "../../containers/System/Modal/ModalUser"
import ModalUserEdit from './Modal/ModalUserEdit';

class UserManage extends Component {
    constructor(props){
        super(props);
        this.state ={
            isAddUser: true,
            listUser: "",
            isModalUser: false,
            isEdit: false,
            //modaledit
            isModalEdit: false,
            dataUserEdit: "",
            
        }
    }

    componentDidMount() {
        let { getAllUserStart } = this.props;
        getAllUserStart();
    }
    componentDidUpdate(prevProps){
        if(prevProps.users !== this.props.users)
            {
                this.setState({
                    listUser: this.props.users?.data || "" 
                })
                // this.props.getAllUserStart()
            } 
    }

    handleAddNew(){
        this.setState({
            isModalUser: true
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            isModalUser: !prevState.isModalUser
        }));
      };

      handlUserManager = (e, data) => {
        e.stopPropagation();
        if(e.target.name === 'edit') {
            this.setState({
                isModalEdit: true,
                dataUserEdit: data
 })
        }
        if(e.target.name === 'delete') {
            let confimDelete = window.confirm("Bạn có chắc chắn không, Dữ liệu không thể khôi phục?")
            if(confimDelete === true) {
                this.props.deleteUserStart(data.id)
                // console.log("Delete user: ", data.id)
            }
        }
    }

    getCreateNewUser = (data) => {
        // console.log("Data sent to parent: ", data)
        this.props.createNewUserStart(data)
    }

    ////Modal Edit

    toggleEdit = () => {
        this.setState(prevState => ({
            isModalEdit: !prevState.isModalEdit
        }));
    }

    getUpdateUser = (data) => {
        // console.log("Data sent to parent EDIT: ", data)
        this.props.editUserStart(data)
    }


    /***************************/

    

    render() {
        let { listUser, isModalUser, isModalEdit} = this.state;
        // console.log("List user: ", isModalUser)
        return (
            <>
                <div className="list-user container mt-5">
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
                                    <th scope="col">Fist Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Tài khoản</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Trạng Thái</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listUser && listUser.length>0 ? (
                                    listUser.map((user, index) => {
                                    return (
                                        <tr className='table-data' key={index}>
                                            <th scope="row">1</th>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.user}</td>
                                            <td>{user.role}</td>
                                            <td>{user.is_active ? "Hoạt động" : "Khóa"}</td>
                                            <td>
                                                <div className="Chucnang">
                                                    <div className="btn-sua">
                                                        <button 
                                                            className="btn btn-primary btn-sm"
                                                            name='edit'
                                                            onClick={(e) => this.handlUserManager(e, user)}
                                                        >Sửa</button>
                                                    </div>
                                                    <div className="btn-Xoa">
                                                        <button 
                                                            className="btn btn-primary btn-sm"
                                                            style={{backgroundColor: "red", border: "none"}}
                                                            name='delete'
                                                            onClick={(e) => this.handlUserManager(e, user)}
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

                <ModalUser
                    OpenModal = {isModalUser}
                    toggleParent = {() => this.toggle()}
                    sentData = {this.getCreateNewUser}
                />

                <ModalUserEdit 
                    OpentEditModal = {isModalEdit}
                    toggleParentModalEdit =  {() => this.toggleEdit()}
                    dataUserEdit = {this.state.dataUserEdit}
                    sentDataEdit = {this.getUpdateUser}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        accessToken: state.admin.accessToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUserStart: () => dispatch(action.getAllUserStart()),
        createNewUserStart: (data) => dispatch(action.createNewUserStart(data)),
        deleteUserStart: (userId) => dispatch(action.deleteUserStart(userId)),
        editUserStart: (data) => dispatch(action.editUserStart(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
