import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import "./LocationHomePage.scss"

class LocationHomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProvince: '',
      selectedDistrict: '',
      showResults: false
    };
  }

  handleProvinceChange = (e) => {
    this.setState({ selectedProvince: e.target.value, showResults: false });
  };

  handleDistrictChange = (e) => {
    this.setState({ selectedDistrict: e.target.value, showResults: false });
  };

  showResults = () => {
    this.setState({ showResults: true });
  };


  render() {
    // Sample data - replace with your actual data
    const provinces = [
      { id: '2', name: 'Hồ Chí Minh' },
    ];

    const districts = [
      { id: '1', provinceId: '2', name: 'Thủ Đức' },
    ];

    const addresses = [
      {
        id: 'a1',
        provinceId: '2',
        districtId: '1',
        address: '54i Hoàng Diệu 2, Phường Linh Chiểu, TP Thủ Đức'
      },
    ];

    const filteredDistricts = districts.filter(
      district => district.provinceId === this.state.selectedProvince
    );

    const filteredAddresses = addresses.filter(
      addr =>
        addr.provinceId === this.state.selectedProvince &&
        addr.districtId === this.state.selectedDistrict
    );
    return (
      <>
        <div className="selection-container-full">
          <div className="container selection-container">
            <h2 className="title">HỆ THỐNG CỬA HÀNG</h2>

            <div className="select-group">
              <label htmlFor="province">Chọn tỉnh/thành phố:</label>
              <select
                id="province"
                value={this.state.selectedProvince}
                onChange={this.handleProvinceChange}
                className="select-box"
              >
                <option value="">-- Chọn tỉnh --</option>
                {provinces.map(province => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="select-group">
              <label htmlFor="district">Chọn quận/huyện:</label>
              <select
                id="district"
                value={this.state.selectedDistrict}
                onChange={this.handleDistrictChange}
                className="select-box"
                disabled={!this.state.selectedProvince}
              >
                <option value="">-- Chọn quận --</option>
                {filteredDistricts.map(district => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="show-results-btn"
              onClick={this.showResults}
              disabled={!this.state.selectedProvince || !this.state.selectedDistrict}
            >
              Hiển thị kết quả tìm kiếm
            </button>

            {this.state.showResults && (
              <div className="results-section">
                <h3>Kết quả:</h3>
                <p>
                  <strong>Tỉnh/Thành phố:</strong>{" "}
                  {provinces.find(p => p.id === this.state.selectedProvince)?.name}
                </p>
                <p>
                  <strong>Quận/Huyện:</strong>{" "}
                  {districts.find(d => d.id === this.state.selectedDistrict)?.name}
                </p>
                <div className="address-list">
                  <h4>Địa chỉ cửa hàng:</h4>
                  {filteredAddresses.length > 0 ? (
                    <ul>
                      {filteredAddresses.map(addr => (
                        <li key={addr.id}>{addr.address}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Không có địa chỉ nào trong khu vực này.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationHomePage);
