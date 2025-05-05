// src/containers/System/UserManage.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../System/UserManage.scss";
import * as action from "../../store/actions";
import ModalUser from "../../containers/System/Modal/ModalUser"

class UserManage extends Component {
    constructor(props){
        super(props);
        this.state ={
            isAddUser: true,
            listUser: "",

            isModalUser: false
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
        console.log("=====> ADD user:")
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
            alert("Edit user: ", data)
        }
        if(e.target.name === 'delete') {
            let confimDelete = window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")
            if(confimDelete === true) {
                this.props.deleteUserStart(data.id)
                // console.log("Delete user: ", data.id)
            }
        }
    }

    getDataFromChild = (data) => {
        // console.log("Data sent to parent: ", data)
        this.props.createNewUserStart(data)
    }

    

    render() {
        let { isAddUser, listUser, isModalUser} = this.state;
        // console.log("List user: ", isModalUser)
        return (
            <>

                <div className="list-user container mt-5">
                    <button
                        type="submit"
                        disabled={isAddUser ? false : true}
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
                                        <tr className='table-data' onClick={() => alert('Row clicked!')} key={index}>
                                            <th scope="row">1</th>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>Admin</td>
                                            <td>Kích Hoạt</td>
                                            <td>
                                                <div className="Chucnang">
                                                    <div className="btn-sua">
                                                        <button 
                                                            className="btn btn-primary btn-sm"
                                                            name='edit'
                                                            onClick={(e) => this.handlUserManager(e)}
                                                        >Sửa</button>
                                                    </div>
                                                    <div className="btn-Xoa">
                                                        <button 
                                                            className="btn btn-primary btn-sm"
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


                                {/* <tr className='table-data'>
                                    <th scope="row">1</th>
                                    <td>Nguyễn Văn</td>
                                    <td>đây là món ngon nhất</td>
                                    <td>Admin</td>
                                    <td>
                                        <div className="Chucnang">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="defaultCheck1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="defaultCheck1"
                                                >
                                                    Khóa User
                                                </label>
                                            </div>
                                            <div className="btn-sua">
                                                <button className="btn btn-primary btn-sm">Checked</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>

                <ModalUser
                    OpenModal = {isModalUser}
                    toggleParent = {() => this.toggle()}
                    sentData = {this.getDataFromChild}
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
