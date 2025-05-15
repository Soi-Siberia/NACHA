import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../Modal/ModalProduct.scss";
import {CommonUtils} from '../../../utils';
import MutiSelect from '../../../components/Ui/MutiSelect';
class ModalProduct extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            description: '',
            imgBlod: '',
            is_active: true,
            categorySelected: "",
            categoryId:[],
            priceSize:[]
        }
    }

    setStateDefault = ()=>{
        this.setState({
            name: '',
            description: '',
            imgBlod: '',
            is_active: true,
            categorySelected: "",
            categoryId:[],
            priceSize:[]
        })
    }


    //close modal
    toggle = () => {
        this.props.toggleNewProuct()
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
    handleOnChange = (e, data) => {
        let newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        // console.log("name: ", e.target.name, "value: ", newValue, "data: ", data)
        if(e.target.name === "priceSize"){
            let dataNew = {id: data.id, price: e.target.value}
            console.log("==> dataNew", dataNew)
            this.setState(prevState => {
                let exists = prevState.priceSize.some(item => item.id === dataNew.id);
                let updatedPriceSize = exists
                ? prevState.priceSize.map(item =>
                    item.id === dataNew.id ? dataNew : item
                )
                : [...prevState.priceSize, dataNew];

            return { priceSize: updatedPriceSize };
            })
        }else {
        this.setState({
            [e.target.name]: newValue
        })}
    }
    // add new product
    handlCreateNewProduct = () => {
        let copyState = { ...this.state };
        delete copyState.optionSelcted;
        this.props.dataNewProduct(copyState)
        this.toggle()
        this.setStateDefault()
    }


    // onchang mutiselect
    handldMutiSelect = (data) => {
        let categorySelected = data.map(item => item.id)
        this.setState({
            categoryId: categorySelected
        })
    }

  render() {    
    let {name, description, is_active, imgBlod, categorySelected} = this.state;
    let {listCategory, isOpenAdd, listSize} = this.props;
    // console.log('==> chill priceSize: ', listSize)
    return (
        <Modal 
            isOpen = {isOpenAdd}
            toggle={this.toggle}
            size='lg'
        >
          <ModalHeader toggle={this.toggle}>Thêm mới sản phẩm</ModalHeader>
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
                        <div className='col-md-12 mb-3'>
                            <label className='product-size'>Size sản phẩm</label>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Size</th>
                                        <th scope='col'>Giá</th>
                                        <th scope='col'>Mô tả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listSize && listSize.map((option, index) => (
                                            <tr key={index} style={{verticalAlign:'baseline'}}>
                                                <td>
                                                    {
                                                        option.name
                                                    }
                                                </td>
                                                <td>
                                                    <div className="price-product__form-group">
                                                        <input
                                                            style={{padding: '10px'}}
                                                            type="text"
                                                            name="priceSize"
                                                            className="form-control"
                                                            placeholder="Giá"
                                                            onChange={(e)=> this.handleOnChange(e, option)}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    {
                                                        option.description
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                                {/* <Button
                                    className='mt-3' 
                                    style={{padding:'0px 10px', background:'#0B5ED7'}}>
                                    Thêm Mới Size </Button> 
                                */}
                        </div>
                    </div>
                </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" style={{padding:'0px 10px'}} onClick={() => this.handlCreateNewProduct()}>
                Lưu
            </Button>{' '}
            <Button color="secondary" style={{padding:'0px 10px'}} onClick={this.toggle} >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default ModalProduct;
