import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../System/UserManage.scss";
import * as action from "../../store/actions"

class UserManage extends Component {
    state = {}

    componentDidMount() {
        this.props.getAllUserStart()
    }

    render() {
        console.log("Giá trị user: ",this.props.users )
        return (
            <>
                <div className="user-manage__title text-center mb-4">
                    Quản Lý Người Dùng
                </div>
                <div className='user-manage container'>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="user-manage__form-group">
                                <label htmlFor="fullName">Fist Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="form-control"
                                    placeholder="Fist Name"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="user-manage__form-group">
                                <label htmlFor="fullName">Last Name</label>
                                <input
                                    type="text"
                                    id="fullName"
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
                            <button type="submit" className="btn btn-primary w-100">
                                Lưu Thông tin
                            </button>
                        </div>
                    </div>
                </div>

                <div className='list-user container mt-5'>
                <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên Danh Mục</th>
                                <th scope="col">description</th>
                                <th scope="col">Trạng Thái</th>
                                <th scope="col">Chức Năng</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Trà sữa</td>
                                <td>đây là món ngon nhất</td>
                                <td>
                                    <input type='checkbox'></input>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-success">Edit</button>
                                    <button type="button" className="btn btn-danger">Xóa</button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Trà sữa</td>
                                <td>đây là món ngon nhất</td>
                                <td>
                                    <input type='checkbox'></input>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-success">Edit</button>
                                    <button type="button" className="btn btn-danger">Xóa</button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Trà sữa</td>
                                <td>đây là món ngon nhất</td>
                                <td>
                                    <input type='checkbox'></input>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-success">Edit</button>
                                    <button type="button" className="btn btn-danger">Xóa</button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Trà sữa</td>
                                <td>đây là món ngon nhất</td>
                                <td>
                                    <input type='checkbox'></input>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-success">Edit</button>
                                    <button type="button" className="btn btn-danger">Xóa</button>
                                </td>
                                </tr>
                                
                            </tbody>
                        </table>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUserStart: () => dispatch(action.getAllUserStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
