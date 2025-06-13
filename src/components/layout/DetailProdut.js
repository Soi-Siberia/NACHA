
import { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import './DetailProdut.scss';

const DetailProdut = (props) => {

    const [amount, setAmount] = useState(1);

    const toggle = () => {
        props.toggleNewCategory();
    }

    const handleOnClickAmount = (type) => {
        if (type === 'addAmount') {
            setAmount((prevAmount) => {
                return prevAmount >= 1 ? prevAmount + 1 : 1; // Giới hạn số lượng tối thiểu là 1
            })
        } else if (type === 'removeAmount') {
            setAmount((prevAmount) => {
                return prevAmount > 1 ? prevAmount - 1 : 1; // Giới hạn số lượng tối thiểu là 1 
            })
        }
    }

    return (
        <>
            <Modal
                isOpen={props.isOpenDetailProduct}
                toggle={toggle}
            >
                {/* <ModalHeader toggle={toggle}>Thêm mới người dùng</ModalHeader> */}
                <ModalBody>
                    <div className='close-popup'
                        onClick={toggle}>
                        <i class="fas fa-times"></i>
                    </div>
                    <div className="popup-content">
                        <div className="popup-choose-product">
                            <div className="ss-1 product-infomation">
                                <div className="ss-1-left">
                                    <img
                                        id="pp-product-img"
                                        src={props.detailProduct.imgBlod || "https://example.com/default-image.jpg"}
                                        alt=""
                                    />
                                </div>
                                <div className="ss-1-right">
                                    <div id="pp-product-name" className="product-name">
                                        {props.detailProduct.name || "Sản Phẩm A"}
                                    </div>
                                    <div className="product-price">
                                        <div id="pp-product-price" className="price">
                                            <span>
                                                {
                                                    (() => {
                                                        const allcodes = props.detailProduct?.allcodes || [];
                                                        if (allcodes.length === 0) {
                                                            return "Đang cập nhật";
                                                        }

                                                        const prices = allcodes.map(item => item.product_allcode?.price).filter(Boolean);
                                                        if (prices.length === 0) {
                                                            return "Đang cập nhật";
                                                        }

                                                        const min = Math.min(...prices);
                                                        const max = Math.max(...prices);

                                                        if (min === max) {
                                                            return min.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
                                                        }

                                                        return `${min.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} - ${max.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;
                                                    })()
                                                }
                                            </span>
                                        </div>
                                        {/* <div id="pp-product-regular-price" className="regular-price">
                                            38.000đ
                                        </div> */}
                                    </div>
                                    <div id="pp-product-short-desc" className="product-info">
                                        <span>
                                            {props.detailProduct.description || "Sản Phẩm A là một món trà sữa thơm ngon, kết hợp giữa hương vị trà Oolong đặc trưng và vị ngọt thanh của dâu tây, được phủ lớp kem phô mai béo ngậy."}
                                        </span>
                                    </div>
                                    <div className="wrap-quantity d-flex align-items-center">
                                        <div className="change-quantity-wrap">
                                            <div className="change-quantity decrease" name='addAmount' onClick={() => handleOnClickAmount('removeAmount')}>-</div>
                                            <div className="amount">{amount}</div>
                                            <div className="change-quantity increase" name='removeAmount' onClick={() => handleOnClickAmount('addAmount')}>+</div>
                                        </div>
                                        <div className="btn-price-product">+ 30.000đ</div>
                                    </div>
                                </div>
                            </div>

                            <div className="ss-2 product-customize">
                                {/* Loại */}
                                {/* <div className="customize-section type">
                                    <div className="customize-title">
                                        <div className="left">Chọn loại</div>
                                        <div className="right">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="customize-content">
                                        <label className="container-radio">
                                            <span>Lạnh</span>
                                            <input type="radio" defaultChecked value="cold" name="type" />
                                            <span className="checkmark-radio"></span>
                                        </label>
                                    </div>
                                </div> */}

                                {/* Size M, L (ẩn) */}
                                {/* <div className="customize-section comboM" style={{ display: "none" }}>
                                    <div className="customize-title">
                                        <div className="left">Chọn món size M</div>
                                        <div className="right">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="customize-content"></div>
                                </div>

                                <div className="customize-section comboL" style={{ display: "none" }}>
                                    <div className="customize-title">
                                        <div className="left">Chọn món size L</div>
                                        <div className="right">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="customize-content"></div>
                                </div> */}

                                {/* Size */}
                                {/* <div className="customize-section size">
                                    <div className="customize-title">
                                        <div className="left">Chọn size</div>
                                        <div className="right">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="customize-content">
                                        <label className="container-radio">
                                            <span>Size M</span>
                                            <input type="radio" defaultChecked value="m" name="size" />
                                            <span className="checkmark-radio"></span>
                                        </label>
                                    </div>
                                </div> */}

                                {/* Đường */}
                                <div className="customize-section sugar">
                                    <div className="customize-title">
                                        <div className="left">Chọn Size</div>
                                        <div className="right">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="customize-content">
                                        {/* {[
                                            { label: "100% đường", value: "sugar-05" },
                                            { label: "Ít đường", value: "sugar-03" },
                                            { label: "Không đường", value: "sugar-01" },
                                        ].map((item) => (
                                            <label className="container-radio" key={item.value}>
                                                <span>{item.label}</span>
                                                <input
                                                    type="radio"
                                                    name="sugar"
                                                    value={item.value}
                                                    defaultChecked={item.value === "sugar-05"}
                                                />
                                                <span className="checkmark-radio"></span>
                                            </label>
                                        ))} */}
                                        {
                                            props.detailProduct.allcodes?.map((item) => {
                                                console.log("==> check item: ", item)
                                                return (
                                                    <label className="container-radio" key={item.id}>

                                                        <span>{item.name}</span>
                                                        <input
                                                            type="radio"
                                                            name="checkSize"
                                                            value={item.id}
                                                        />
                                                        <span className="checkmark-radio"></span>
                                                    </label>
                                                )
                                            })}
                                    </div>
                                </div>

                                {/* Đá */}
                                {/* <div className="customize-section ice">
                                    <div className="customize-title">
                                        <div className="left">Chọn đá</div>
                                        <div className="right">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="customize-content">
                                        {[
                                            { label: "100% đá", value: "ice-05" },
                                            { label: "Ít đá", value: "ice-03" },
                                            { label: "Không đá", value: "ice-01" },
                                            { label: "Làm nóng", value: "ice-06" },
                                        ].map((item) => (
                                            <label className="container-radio" key={item.value}>
                                                <span>{item.label}</span>
                                                <input
                                                    type="radio"
                                                    name="ice"
                                                    value={item.value}
                                                    defaultChecked={item.value === "ice-05"}
                                                />
                                                <span className="checkmark-radio"></span>
                                            </label>
                                        ))}
                                    </div>
                                </div> */}

                                {/* Topping */}
                                {/* <div className="customize-section topping">
                                    <div className="customize-title">
                                        <div className="left">Chọn topping</div>
                                        <div className="right">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="customize-content">
                                        {[
                                            ["Thêm trân châu sương mai", 6000, "topping-104100026"],
                                            ["Thêm Thạch Konjac", 5000, "topping-104100034"],
                                            ["Thêm trân châu hoàng kim", 5000, "topping-104100019"],
                                            ["Thêm Thạch Hoa Mộc Quế", 5000, "topping-104100035"],
                                            ["Thêm macchiato", 7000, "topping-104100016"],
                                            ["Thêm rau câu", 5000, "topping-104100013"],
                                            ["Thêm thạch café", 5000, "topping-104100011"],
                                            ["Thêm trân châu sợi", 5000, "topping-104100009"],
                                            ["Topping Thạch Dứa", 5000, "topping-104100030"],
                                            ["Thêm Trân Châu Ngũ Cốc", 5000, "topping-104200012"],
                                            ["Thêm Tuyết Lê", 5000, "topping-104100036"],
                                            ["Thêm Pudding phô mai tươi", 7000, "topping-104100033"],
                                            ["Thêm Boba Cheese", 7000, "topping-104100038"],
                                        ].map(([label, price, value]) => (
                                            <div className="topping-wrap" key={value}>
                                                <label className="container-checkbox">
                                                    <span>{label}</span>
                                                    <input type="checkbox" name="topping" value={value} />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="topping-price">+ {price.toLocaleString()}đ</span>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}

                                <div className='customize-section note'>
                                    <textarea className='ghi-chu' placeholder='Ghi chú thêm' rows={4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={() => handlCreateNewCaterory()}>
                        Lưu
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter> */}
            </Modal>
        </>
    )
};

export default DetailProdut;
