import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../Modal/ModalCategory.scss";
import {CommonUtils} from '../../../utils';

class ModalCategory extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            description: '',
            imgBlod: '',
            is_active: true,

            imagePreview: null, // State to hold the image preview URL
        }
    }

    toggle = () => {
        this.props.toggleNewCategory()
    };

    resetState = () => {
        this.setState({
            name: '',
            description: '',
            imgBlod: '',
            is_active: true,

            imagePreview: null, // State to hold the image preview URL
        })
    }

    handleImageChange = async(event) => {
        const file = event.target.files[0];
        if (file) {
          const imagePreview = URL.createObjectURL(file);
          let converBase64 = await CommonUtils.getBase64(file)
            console.log("converBase64 file: ", converBase64)
          this.setState({ imagePreview , imgBlod: converBase64 });
        }else{
            this.setState({ imagePreview: null, imgBlod: '' });
        }
    };
    handleOnChange = (e) => {
        let newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        console.log("name: ", e.target.name, "value: ", newValue)
        this.setState({
            [e.target.name]: newValue
        })
    }
    handlCreateNewCaterory = () => {
        let dataCreate = {...this.state}
        delete dataCreate.imagePreview
        this.props.dataCreate(dataCreate)
        this.resetState()
        this.toggle()
    }
  render() {    
    let {name, description, is_active} = this.state;

    return (
        <Modal 
            isOpen={this.props.OpenNewCategory} 
            toggle={this.toggle}
            size='lg'
        >
          <ModalHeader toggle={this.toggle}>Thêm mới người dùng</ModalHeader>
          <ModalBody>
          <div className="Modal-Category container">
                    <div className="row row-modal-Category">
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
                                <label htmlFor="name">Tên Danh Mục</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    className="form-control"
                                    placeholder="Tên Danh Mục"
                                    onChange={(e)=> this.handleOnChange(e)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="Modal-user__form-group">
                                <label htmlFor="lastName">Mô tả</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    placeholder="Mô tả"
                                    value={description}
                                    onChange={(e)=> this.handleOnChange(e)}

                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input type="file" accept="image/*" onChange={this.handleImageChange} />
                                {this.state.imagePreview && (
                                <img
                                    src={this.state.imagePreview}
                                    alt="Preview"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover', border: '1px solid #ccc' }}
                                />
                                )}
                            </div>
                        </div>
                        <div className='col-md-6 mb-3 lock-user'>
                            <div className="Modal-user-lock" style={{fontSize:'16px'}}>
                                    <input className="form-check-input" 
                                        type="checkbox" 
                                        checked={is_active} 
                                        name="is_active" 
                                        onChange={(e)=>this.handleOnChange(e)} />
                                <label className="form-check-label" style={{paddingLeft:'20px'}}>
                                    {is_active ? 'Hiển thị danh mục' : 'Không hiển thị danh mục'}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.handlCreateNewCaterory()}>
                Lưu
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default ModalCategory;
