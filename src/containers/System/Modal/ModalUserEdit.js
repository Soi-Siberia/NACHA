import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../Modal/ModalUser.scss";

class ModalUserEdit extends Component {
    constructor(props){
        super(props);
        this.state ={
            id: "",
            firstName: '',
            lastName: '',
            password: '',
            user: '',
            role: '',
            is_active: false,
        }
    }

componentDidUpdate(prevProps){
    if(prevProps.dataUserEdit !== this.props.dataUserEdit && this.props.dataUserEdit) {
        console.log("=====> dataUserEdit:", this.props.dataUserEdit)
        let { firstName, lastName, user, role, is_active, id } = this.props.dataUserEdit;
        this.setState({
            id: id,
            firstName: firstName,
            lastName: lastName,
            user: user,
            role: role,
            is_active: is_active ? is_active : false,
        })
    }
    }


    toggle = () => {
        this.props.toggleParentModalEdit()
    };

    resetState = () => {
        this.setState({
            id: "",
            firstName: '',
            lastName: '',
            password: '',
            user: '',
            role: '',
            is_active: false,})
    }

    handlUserManager = (e) => {
        // console.log("=====> User manager:", e.target.name, "value: ", e.target.checked)
        let newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: newValue
        })
    }
    handlUpdateUser = () => {
        this.props.sentDataEdit(this.state)
        this.resetState()
        this.toggle()
    }
  render() {
    let {firstName, lastName, password, user, role, is_active} = this.state;

    return (
        <Modal 
            isOpen={this.props.OpentEditModal} 
            toggle={this.toggle}
            size='lg'
        >
          <ModalHeader toggle={this.toggle}>Chỉnh sửa người dùng</ModalHeader>
          <ModalBody>
          <div className="Modal-user container">
                    <div className="row row-modal-user">
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
                                <label htmlFor="firstName">Fist Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    className="form-control"
                                    placeholder="Fist Name"
                                    onChange={(e)=> this.handlUserManager(e)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e)=> this.handlUserManager(e)}

                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
                                <label htmlFor="password">Mật khẩu</label>
                                <input
                                    disabled
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=> this.handlUserManager(e)}

                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
                                <label htmlFor="password">Tài Khoản </label>
                                <input
                                    type="text"
                                    name="user"
                                    value={user}
                                    onChange={(e)=> this.handlUserManager(e)}
                                    className="form-control"
                                    placeholder="Tài khoản"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
                                <label htmlFor="roleSelect">Chọn vai trò</label>
                                <select className="form-control" name="role"
                                    value={role}
                                    onChange={(e)=> this.handlUserManager(e)}>
                                    <option>USER</option>
                                    <option>Admin</option>
                                    
                                </select>
                            </div>
                        </div>
                        <div className='col-md-6 mb-3 lock-user'>
                            <div className="Modal-user-lock" style={{fontSize:'16px'}}>
                                    <input className="form-check-input" 
                                        type="checkbox" 
                                        checked={is_active} 
                                        name="is_active" 
                                        onChange={(e)=>this.handlUserManager(e)} />
                                <label className="form-check-label" style={{paddingLeft:'20px'}}>
                                    Hoạt động
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.handlUpdateUser()}>
                Lưu thông tin
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default ModalUserEdit;
