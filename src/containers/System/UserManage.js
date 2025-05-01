// src/containers/System/UserManage.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../System/UserManage.scss";
import * as action from "../../store/actions";

class UserManage extends Component {
    constructor(props){
        super(props);
        this.state ={
            isAddUser: true
        }
    }

    componentDidMount() {
        let { getAllUserStart } = this.props;
        getAllUserStart();
    }

    render() {
        let { isAddUser } = this.state;
        return (
            <>
                <div className="user-manage__title text-center mb-4">
                    Quản Lý Người Dùng
                </div>
                <div className="user-manage container">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="user-manage__form-group">
                                <label htmlFor="firstName">Fist Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control"
                                    placeholder="Fist Name"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="user-manage__form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="user-manage__form-group">
                                <label htmlFor="password">Mật khẩu</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="user-manage__form-group">
                                <label htmlFor="roleSelect">Chọn vai trò</label>
                                <select className="form-control" id="roleSelect">
                                    <option>Quản lý page</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <button
                                type="submit"
                                disabled={isAddUser ? false : true}
                                className="btn btn-primary w-100"
                            >
                                Thêm mới người dùng
                            </button>
                        </div>
                        <div className="col-12 mt-3">
                            <button
                                type="submit"
                                disabled={isAddUser ? true : false}
                                className="btn btn-primary w-100"
                            >
                                Lưu Thông tin
                            </button>
                        </div>
                    </div>
                </div>

                <div className="list-user container mt-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Fist Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Chức Năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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
        getAllUserStart: () => dispatch(action.getAllUserStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
