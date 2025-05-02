import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {
    toggle = () => {
        this.props.toggleParent()
      };
  render() {
    // console.log("Data sent to parent: ", this.props.OpenModal)
    return (
        <Modal 
            isOpen={this.props.OpenModal} 
            toggle={this.toggle}
            size='lg'
        >
          <ModalHeader toggle={this.toggle}>Thâm Mới Người Dùng</ModalHeader>
          <ModalBody>
          <div className="Modal-user container">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
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
                            <div className="Modal-user__form-group">
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
                            <div className="Modal-user__form-group">
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
                            <div className="Modal-user__form-group">
                                <label htmlFor="roleSelect">Chọn vai trò</label>
                                <select className="form-control" id="roleSelect">
                                    <option>Quản lý page</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default ModalUser;
