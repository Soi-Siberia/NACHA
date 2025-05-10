import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {CommonUtils} from '../../../utils';
import MutiSelect from '../../../components/Ui/MutiSelect';
class ModalProductEdit extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            description: '',
            price: '',
            imgBlod: '',
            is_active: true,
            categorySelected: "",
            categoryId:[],
        }
    }


    componentDidUpdate(prevProps)
    {
        if(prevProps.dataEdit !== this.props.dataEdit)
        {
            let{name, description, base_price, imgBlod, is_active, categories} = this.props.dataEdit
            this.setState({
                name: name,
                description: description,
                price: base_price,
                imgBlod: imgBlod,
                is_active: is_active,
                categorySelected: categories,
            })
        }
    }

    //close modal
    toggle = () => {
        this.props.toggleEditProuct()
    };

    //onchang img
    handleImageChange = async(event) => {
        const file = event.target.files[0];
        if (file) {
          let converBase64 = await CommonUtils.getBase64(file)
          this.setState({ imgBlod: converBase64 });
        }else {
          this.setState({ imgBlod: '' });
        }
    };

    //onchang input
    handleOnChange = (e) => {
        let newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        // console.log("name: ", e.target.name, "value: ", newValue)
        this.setState({
            [e.target.name]: newValue
        })
    }
    // add new product
    handlEditProduct = () => {
        let copyState = { ...this.state };
        delete copyState.optionSelcted;
        delete copyState.categorySelected;
        this.props.dataEditProduct(copyState)
    }

    // onchang mutiselect
    handldMutiSelect = (data) => {
        let categorySelected = data.map(item => item.id)
        this.setState({
            categoryId: categorySelected
        })
    }



  render() {    
    let {name, description, is_active, imgBlod, price, categorySelected} = this.state;
    let {listCategory, isOpenEdit} = this.props;
    // console.log("==> Data product Edit: ", dataEdit)
    return (
        <Modal 
            isOpen = {isOpenEdit}
            toggle={this.toggle}
            size='lg'
        >
          <ModalHeader toggle={this.toggle}>Chỉnh sửa sản phẩm</ModalHeader>
          <ModalBody>
          <div className="Modal-product container">
                    <div className="row row-modal-product">
                        <div className="col-md-6 mb-3">
                            <div className="Modal-product__form-group">
                                <label htmlFor="name">Tên Sản Phẩm</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    className="form-control"
                                    placeholder="Tên Sản Phẩm"
                                    onChange={(e)=> this.handleOnChange(e)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="Modal-product__form-group">
                                <label htmlFor="description">Mô tả</label>
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
                            <div className="Modal-product__form-group">
                                <label htmlFor="category">Danh Mục</label>
                                <MutiSelect
                                    placeholder = "Chọn Danh Mục"
                                    value={categorySelected}
                                    options={listCategory}
                                    senData = {this.handldMutiSelect}  
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="Modal-product__form-group">
                                <label htmlFor="price">Giá Sản Phẩm</label>
                                <input
                                    type="text"
                                    name="price"
                                    className="form-control"
                                    placeholder="Giá"
                                    value={price}
                                    onChange={(e)=> this.handleOnChange(e)}

                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="image">Hình ảnh sản phẩm</label>
                            <div style={{ display: 'flex', alignItems: 'center'}}>
                                <input type="file" accept="image/*" onChange={this.handleImageChange} />
                                {imgBlod && (
                                <img
                                    src={imgBlod}
                                    alt="Preview"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover', border: '1px solid #ccc' }}
                                />
                                )}
                            </div>
                        </div>
                        <div className='col-md-6 mb-3 lock-user'>
                            <label htmlFor="is_active">Trạng thái</label>
                            <div className="Modal-product-lock" style={{fontSize:'16px'}}>
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
            <Button color="primary" style={{padding:'0px 10px'}} onClick={() => this.handlEditProduct()}>
                Lưu Cập Nhật
            </Button>{' '}
            <Button color="secondary" style={{padding:'0px 10px'}} onClick={this.toggle} >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default ModalProductEdit;
