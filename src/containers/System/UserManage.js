import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../System/UserManage.scss";

class UserManage extends Component {
    state = {}

    componentDidMount() {}

    render() {
        return (
            <>
                <div className="user-manage__title text-center mb-4">
                    Quản Lý Người Dùng
                </div>
                <div className='user-manage container'>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="user-manage__form-group">
                                <label htmlFor="fullName">Họ và Tên</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="form-control"
                                    placeholder="Nhập họ và tên"
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
            </>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
