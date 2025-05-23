import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../Modal/ModalUser.scss";

// class ModalUser extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: '',
//             password: '',
//             user: '',
//             role: '',
//             is_active: true,
//         }
//     }

//     toggle = () => {
//         this.props.toggleParent()
//     };

//     resetState = () => {
//         this.setState({
//             firstName: '',
//             lastName: '',
//             password: '',
//             user: '',
//             role: '',
//             is_active: true,
//         })
//     }

//     handlUserManager = (e) => {
//         // console.log("=====> User manager:", e.target.name, "value: ", e.target.checked)
//         let newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//         this.setState({
//             [e.target.name]: newValue
//         })
//     }
//     handlCteateNewUser = () => {
//         this.props.sentData(this.state)
//         this.resetState()
//         this.toggle()
//     }
//     render() {
//         let { firstName, lastName, password, user, role, is_active } = this.state;

//         return (
//             <Modal
//                 isOpen={this.props.OpenModal}
//                 toggle={this.toggle}
//                 size='lg'
//             >
//                 <ModalHeader toggle={this.toggle}>Thêm mới người dùng</ModalHeader>
//                 <ModalBody>
//                     <div className="Modal-user container">
//                         <div className="row row-modal-user">
//                             <div className="col-md-6 mb-3">
//                                 <div className="Modal-user__form-group">
//                                     <label htmlFor="firstName">Fist Name</label>
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={firstName}
//                                         className="form-control"
//                                         placeholder="Fist Name"
//                                         onChange={(e) => this.handlUserManager(e)}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <div className="Modal-user__form-group">
//                                     <label htmlFor="lastName">Last Name</label>
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         className="form-control"
//                                         placeholder="Last Name"
//                                         value={lastName}
//                                         onChange={(e) => this.handlUserManager(e)}

//                                     />
//                                 </div>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <div className="Modal-user__form-group">
//                                     <label htmlFor="password">Mật khẩu</label>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         className="form-control"
//                                         placeholder="Password"
//                                         value={password}
//                                         onChange={(e) => this.handlUserManager(e)}

//                                     />
//                                 </div>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <div className="Modal-user__form-group">
//                                     <label htmlFor="password">Tài Khoản </label>
//                                     <input
//                                         type="text"
//                                         name="user"
//                                         value={user}
//                                         onChange={(e) => this.handlUserManager(e)}
//                                         className="form-control"
//                                         placeholder="Tài khoản"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <div className="Modal-user__form-group">
//                                     <label htmlFor="roleSelect">Quyền tài khoản</label>
//                                     <select className="form-control" name="role"
//                                         value={role}
//                                         onChange={(e) => this.handlUserManager(e)}>
//                                         <option>USER</option>
//                                         <option>Admin</option>

//                                     </select>
//                                 </div>
//                             </div>
//                             <div className='col-md-6 mb-3 lock-user'>
//                                 <div className="Modal-user-lock" style={{ fontSize: '16px' }}>
//                                     <input className="form-check-input"
//                                         type="checkbox"
//                                         checked={is_active}
//                                         name="is_active"
//                                         onChange={(e) => this.handlUserManager(e)} />
//                                     <label className="form-check-label" style={{ paddingLeft: '20px' }}>
//                                         Hoạt động
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary" onClick={() => this.handlCteateNewUser()}>
//                         Tạo mới
//                     </Button>{' '}
//                     <Button color="secondary" onClick={this.toggle}>
//                         Cancel
//                     </Button>
//                 </ModalFooter>
//             </Modal>
//         );
//     }
// }


/** ==> function HOOK */

const ModalUser = (props) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        user: '',
        role: '',
        is_active: true,
    })

    const toggle = () => {
        props.toggleParent()
    };

    const resetState = () => {
        setFormData({
            firstName: '',
            lastName: '',
            password: '',
            user: '',
            role: '',
            is_active: true,
        })
    }

    const handlUserManager = (e) => {
        // console.log("=====> User manager:", e.target.name, "value: ", e.target.checked)
        const { name } = e.target
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData(prev => ({
            ...prev,
            [name]: newValue
        }))

    }

    const handlCteateNewUser = () => {
        props.sentData(formData)
        resetState()
        toggle()
    }


    let { firstName, lastName, password, user, role, is_active } = formData;
    return (
        <Modal
            isOpen={props.OpenModal}
            toggle={toggle}
            size='lg'
        >
            <ModalHeader toggle={toggle}>Thêm mới người dùng</ModalHeader>
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
                                    onChange={(e) => handlUserManager(e)}
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
                                    onChange={(e) => handlUserManager(e)}

                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
                                <label htmlFor="password">Mật khẩu</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => handlUserManager(e)}

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
                                    onChange={(e) => handlUserManager(e)}
                                    className="form-control"
                                    placeholder="Tài khoản"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
                                <label htmlFor="roleSelect">Quyền tài khoản</label>
                                <select className="form-control" name="role"
                                    value={role}
                                    onChange={(e) => handlUserManager(e)}>
                                    <option>USER</option>
                                    <option>Admin</option>

                                </select>
                            </div>
                        </div>
                        <div className='col-md-6 mb-3 lock-user'>
                            <div className="Modal-user-lock" style={{ fontSize: '16px' }}>
                                <input className="form-check-input"
                                    type="checkbox"
                                    checked={is_active}
                                    name="is_active"
                                    onChange={(e) => handlUserManager(e)} />
                                <label className="form-check-label" style={{ paddingLeft: '20px' }}>
                                    Hoạt động
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => handlCteateNewUser()}>
                    Tạo mới
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalUser;
