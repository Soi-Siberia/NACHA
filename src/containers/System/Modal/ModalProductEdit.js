import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CommonUtils } from '../../../utils';
import MutiSelect from '../../../components/Ui/MutiSelect';


// class ModalProductEdit extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             idproduct:'',
//             name: '',
//             description: '',
//             imgBlod: '',
//             is_active: true,
//             categorySelected: "",
//             categoryId:[],
//             listSizePrice: [],
//             priceSizeEdit: [],
//         }
//     }


//     componentDidUpdate(prevProps)
//     {
//         if(prevProps.dataEdit !== this.props.dataEdit)
//         {
//             let{id, name,description, base_price, imgBlod, is_active, categories, allcodes} = this.props.dataEdit
//             let builSelectMuti = categories.map(item => ({
//                 id: item.id,
//                 label: item.name
//             }))
//             console.log("==> data dataEdit: ",this.props.dataEdit)

//             let sizePrice = allcodes.map(item => ({
//                 id: item.id,
//                 price: item.product_allcode.price
//             }))
//             // console.log("==> data edit: ", sizePrice)

//             this.setState({
//                 id: id,
//                 name: name,
//                 description: description,
//                 price: base_price,
//                 imgBlod: imgBlod,
//                 is_active: is_active,
//                 categorySelected: builSelectMuti,
//                 listSizePrice: allcodes,
//                 priceSizeEdit: sizePrice

//             })
//         }
//     }

//     defaulState = () =>{
//         this.setState({
//             idproduct:'',
//             name: '',
//             description: '',
//             imgBlod: '',
//             is_active: true,
//             categorySelected: "",
//             categoryId:[],
//             listSizePrice: [],
//             priceSizeEdit: [],
//         })
//     }

//     //close modal
//     toggle = () => {
//         this.props.toggleEditProuct()
//     };

//     //onchang img
//     handleImageChange = async(event) => {
//         const file = event.target.files[0];
//         if (file) {
//           let converBase64 = await CommonUtils.getBase64(file)
//           this.setState({ imgBlod: converBase64 });
//         }else {
//           this.setState({ imgBlod: '' });
//         }
//     };

//     //onchang input
//     handleOnChange = (e, data) => {
//          let newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//         console.log("name: ", e.target.name, "value: ", newValue, "data: ","data theo", data, "ID Size: ", data)
//         if(e.target.name === "priceSize"){
//             let dataNew = {id: data, price: e.target.value}
//             console.log("==> dataNew done", dataNew)
//             this.setState(prevState => {
//                 let exists = prevState.priceSizeEdit.some(item => item.id === dataNew.id);
//                 let updatedPriceSize = exists
//                 ? prevState.priceSizeEdit.map(item =>
//                     item.id === dataNew.id ? dataNew : item
//                 )
//                 : [...prevState.priceSizeEdit, dataNew];

//             return { priceSizeEdit: updatedPriceSize };
//             })
//         }else {
//         this.setState({
//             [e.target.name]: newValue
//         })}
//     }
//     // add new product
//     handlEditProduct = () => {
//         let copyState = { ...this.state }

//         copyState.priceSizeEdit = copyState.priceSizeEdit.filter(item => item.price !== "" && item.price !== null);
//         delete copyState.optionSelcted;
//         delete copyState.categorySelected;
//         delete copyState.listSizePrice;
//         this.props.dataEditProduct(copyState)
//         this.defaulState()
//         this.toggle()
//     }

//     // onchang mutiselect
//     handldMutiSelect = (data) => {
//         let categorySelected = data.map(item => item.id)
//         this.setState({
//             categoryId: categorySelected
//         })
//     }



//   render() {    
//     let {name, description, is_active, imgBlod, categorySelected, listSizePrice} = this.state;
//     let {listCategory, isOpenEdit,listSize} = this.props;
//     // console.log("===> listSizePrice: ", listSizePrice)
//     return (
//         <Modal 
//             isOpen = {isOpenEdit}
//             toggle={this.toggle}
//             size='lg'
//         >
//           <ModalHeader toggle={this.toggle}>Chỉnh sửa sản phẩm</ModalHeader>
//           <ModalBody>
//             <div className="Modal-product container">
//                     <div className="row row-modal-product">
//                         <div className="col-md-6 mb-3">
//                             <div className="Modal-product__form-group">
//                                 <label htmlFor="name">Tên Sản Phẩm</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={name}
//                                     className="form-control"
//                                     placeholder="Tên Sản Phẩm"
//                                     onChange={(e)=> this.handleOnChange(e)}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-md-6 mb-3">
//                             <div className="Modal-product__form-group">
//                                 <label htmlFor="description">Mô tả</label>
//                                 <input
//                                     type="text"
//                                     name="description"
//                                     className="form-control"
//                                     placeholder="Mô tả"
//                                     value={description}
//                                     onChange={(e)=> this.handleOnChange(e)}

//                                 />
//                             </div>
//                         </div>
//                         <div className="col-md-6 mb-3"
//                             style={{display:"flex", alignItems:"center"}}
//                         >
//                             <div className="Modal-product__form-group">
//                                 <label htmlFor="category">Danh Mục</label>
//                                 <MutiSelect
//                                     placeholder = "Chọn Danh Mục"
//                                     value={categorySelected}
//                                     options={listCategory}
//                                     senData = {this.handldMutiSelect}  
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-md-6 mb-3">
//                             <label htmlFor="image">Hình ảnh sản phẩm</label>
//                             <div style={{ display: 'flex', alignItems: 'center'}}>
//                                 <input type="file" accept="image/*" onChange={this.handleImageChange} />
//                                 {imgBlod && (
//                                 <img
//                                     src={imgBlod}
//                                     alt="Preview"
//                                     style={{ width: '100px', height: '100px', objectFit: 'cover', border: '1px solid #ccc' }}
//                                 />
//                                 )}
//                             </div>
//                         </div>
//                         <div className='col-md-6 mb-3 lock-user'>
//                             <label htmlFor="is_active">Trạng thái</label>
//                             <div className="Modal-product-lock" style={{fontSize:'16px'}}>
//                                     <input className="form-check-input" 
//                                         type="checkbox" 
//                                         checked={is_active} 
//                                         name="is_active" 
//                                         onChange={(e)=>this.handleOnChange(e)} />
//                                 <label className="form-check-label" style={{paddingLeft:'20px'}}>
//                                     {is_active ? 'Hiển thị danh mục' : 'Không hiển thị danh mục'}
//                                 </label>
//                             </div>
//                         </div>
//                         {/* --------------------------------------------- */}
//                         <div className='col-md-12 mb-3'>
//                             <label className='product-size'>Size sản phẩm</label>
//                             <table className='table'>
//                                 <thead>
//                                     <tr>
//                                         <th scope='col'style={{width: '30%'}}>Size</th>
//                                         <th scope='col'>Giá</th>
//                                         <th scope='col' style={{width: '40%'}}>Mô tả</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         listSize && listSize.map((listSizeItem, index) => {

//                                             let option = listSizePrice.find(p => p.id === listSizeItem.id)
//                                             return(
//                                                 <tr key={index} style={{verticalAlign:'baseline'}}>
//                                                     <td>
//                                                         {
//                                                             listSizeItem.name
//                                                         }
//                                                     </td>
//                                                     <td>
//                                                         <div className="price-product__form-group">
//                                                             <input
//                                                                 style={{padding: '10px'}}
//                                                                 defaultValue={option?.product_allcode?.price || ""}
//                                                                 type="text"
//                                                                 name="priceSize"
//                                                                 className="form-control"
//                                                                 placeholder="Giá"
//                                                                 onChange={(e)=> this.handleOnChange(e,listSizeItem.id)}
//                                                             />
//                                                         </div>
//                                                     </td>
//                                                     <td >
//                                                         {
//                                                             listSizeItem.description
//                                                         }
//                                                     </td>
//                                                 </tr>
//                                             )
//                                         })
//                                     }

//                                 </tbody>
//                             </table>
//                         </div>                        
//                     </div>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" style={{padding:'0px 10px'}} onClick={() => this.handlEditProduct()}>
//                 Lưu Cập Nhật
//             </Button>{' '}
//             <Button color="secondary" style={{padding:'0px 10px'}} onClick={this.toggle} >
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//     );
//   }
// }


const ModalProductEdit = (props) => {

    const [formData, setFormData] = useState({
        idproduct: '',
        name: '',
        description: '',
        imgBlod: '',
        is_active: true,
        categorySelected: "",
        categoryId: [],
        listSizePrice: [],
        priceSizeEdit: [],
    })


    const defaulState = () => {
        setFormData({
            idproduct: '',
            name: '',
            description: '',
            imgBlod: '',
            is_active: true,
            categorySelected: "",
            categoryId: [],
            listSizePrice: [],
            priceSizeEdit: [],
        })
    }

    // data prent sent chill

    useEffect(() => {
        if (props.dataEdit) {
            let { id, name, description, base_price, imgBlod, is_active, categories, allcodes } = props.dataEdit
            let builSelectMuti = categories.map(item => ({
                id: item.id,
                label: item.name
            }))
            // console.log("==> data dataEdit: ", this.props.dataEdit)

            let sizePrice = allcodes.map(item => ({
                id: item.id,
                price: item.product_allcode.price
            }))
            // console.log("==> data edit: ", sizePrice)

            setFormData(allState => ({
                ...allState,
                id: id,
                name: name,
                description: description,
                price: base_price,
                imgBlod: imgBlod,
                is_active: is_active,
                categorySelected: builSelectMuti,
                listSizePrice: allcodes,
                priceSizeEdit: sizePrice

            }))
        }
    }, [props.dataEdit])

    //close modal
    const toggle = () => {
        props.toggleEditProuct()
    };

    //onchang img
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            let converBase64 = await CommonUtils.getBase64(file)
            setFormData(allState => ({
                ...allState,
                imgBlod: converBase64
            }));
        } else {
            setFormData(allState => ({
                ...allState,
                imgBlod: ''
            }));
        }
    };

    //onchang input
    const handleOnChange = (e, data) => {
        let newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        console.log("name: ", e.target.name, "value: ", newValue, "data: ", "data theo", data, "ID Size: ", data)
        if (e.target.name === "priceSize") {
            let dataNew = { id: data, price: e.target.value }
            // console.log("==> dataNew done", dataNew)
            setFormData(prevState => {
                let exists = prevState.priceSizeEdit.some(item => item.id === dataNew.id);
                let updatedPriceSize = exists
                    ? prevState.priceSizeEdit.map(item =>
                        item.id === dataNew.id ? dataNew : item
                    )
                    : [...prevState.priceSizeEdit, dataNew];

                return {
                    ...prevState,
                    priceSizeEdit: updatedPriceSize
                };
            })
        } else {
            setFormData(allState => ({
                ...allState,
                [e.target.name]: newValue
            }))
        }
    }
    // update product
    const handlEditProduct = () => {
        let copyState = { ...formData }

        copyState.priceSizeEdit = copyState.priceSizeEdit.filter(item => item.price !== "" && item.price !== null);
        delete copyState.optionSelcted;
        delete copyState.categorySelected;
        delete copyState.listSizePrice;
        console.log("==> Data edit: ", copyState)
        props.dataEditProduct(copyState)
        defaulState()
        toggle()
    }

    // onchang mutiselect
    const handldMutiSelect = (data) => {
        let categorySelected = data.map(item => item.id)
        setFormData(allState => ({
            ...allState,
            categoryId: categorySelected
        }))
    }


    const { name, description, is_active, imgBlod, categorySelected, listSizePrice } = formData;
    const { listCategory, isOpenEdit, listSize } = props;

    return (
        <Modal
            isOpen={isOpenEdit}
            toggle={toggle}
            size='lg'
        >
            <ModalHeader toggle={toggle}>Chỉnh sửa sản phẩm</ModalHeader>
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
                                    onChange={(e) => handleOnChange(e)}
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
                                    onChange={(e) => handleOnChange(e)}

                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <div className="Modal-product__form-group">
                                <label htmlFor="category">Danh Mục</label>
                                <MutiSelect
                                    placeholder="Chọn Danh Mục"
                                    value={categorySelected}
                                    options={listCategory}
                                    senData={handldMutiSelect}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="image">Hình ảnh sản phẩm</label>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input type="file" accept="image/*" onChange={handleImageChange} />
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
                            <div className="Modal-product-lock" style={{ fontSize: '16px' }}>
                                <input className="form-check-input"
                                    type="checkbox"
                                    checked={is_active}
                                    name="is_active"
                                    onChange={(e) => handleOnChange(e)} />
                                <label className="form-check-label" style={{ paddingLeft: '20px' }}>
                                    {is_active ? 'Hiển thị danh mục' : 'Không hiển thị danh mục'}
                                </label>
                            </div>
                        </div>
                        {/* --------------------------------------------- */}
                        <div className='col-md-12 mb-3'>
                            <label className='product-size'>Size sản phẩm</label>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col' style={{ width: '30%' }}>Size</th>
                                        <th scope='col'>Giá</th>
                                        <th scope='col' style={{ width: '40%' }}>Mô tả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listSize && listSize.map((listSizeItem, index) => {

                                            let option = listSizePrice.find(p => p.id === listSizeItem.id)
                                            return (
                                                <tr key={index} style={{ verticalAlign: 'baseline' }}>
                                                    <td>
                                                        {
                                                            listSizeItem.name
                                                        }
                                                    </td>
                                                    <td>
                                                        <div className="price-product__form-group">
                                                            <input
                                                                style={{ padding: '10px' }}
                                                                defaultValue={option?.product_allcode?.price || ""}
                                                                type="text"
                                                                name="priceSize"
                                                                className="form-control"
                                                                placeholder="Giá"
                                                                onChange={(e) => handleOnChange(e, listSizeItem.id)}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td >
                                                        {
                                                            listSizeItem.description
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" style={{ padding: '0px 10px' }} onClick={() => handlEditProduct()}>
                    Lưu Cập Nhật
                </Button>{' '}
                <Button color="secondary" style={{ padding: '0px 10px' }} onClick={toggle} >
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );

}

export default ModalProductEdit;
