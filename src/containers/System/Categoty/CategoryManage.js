import React, { Component } from 'react';
import { connect } from 'react-redux';

// import "../System/CategoryManage.scss";

class CategoryManage extends Component {
    state = {}

    componentDidMount() {}

    render() {
        return (
            <>
                <div className='categoty-container-full'>
                    <div className='container'>
                        <div className="user-manage__title text-center mb-4">
                        Quản Lý Danh Mục Sản Phẩm
                        </div>
                        <table class="table">
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
                                    <button type="button" class="btn btn-success">Edit</button>
                                    <button type="button" class="btn btn-danger">Xóa</button>
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
                                    <button type="button" class="btn btn-success">Edit</button>
                                    <button type="button" class="btn btn-danger">Xóa</button>
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
                                    <button type="button" class="btn btn-success">Edit</button>
                                    <button type="button" class="btn btn-danger">Xóa</button>
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
                                    <button type="button" class="btn btn-success">Edit</button>
                                    <button type="button" class="btn btn-danger">Xóa</button>
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
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManage);
