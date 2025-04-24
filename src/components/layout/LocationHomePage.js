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
            { id: '1', name: 'Hà Nội' },
            { id: '2', name: 'Hồ Chí Minh' },
            { id: '3', name: 'Đà Nẵng' }
        ];
      
        const districts = [
            { id: '1', provinceId: '1', name: 'Ba Đình' },
            { id: '2', provinceId: '1', name: 'Hoàn Kiếm' },
            { id: '3', provinceId: '2', name: 'Quận 1' },
            { id: '4', provinceId: '2', name: 'Quận 2' },
            { id: '5', provinceId: '3', name: 'Hải Châu' }
          ];
      
          const filteredDistricts = districts.filter(
            district => district.provinceId === this.state.selectedProvince
          );
    return(
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
                        <p>Tỉnh/Thành phố: {
                        provinces.find(p => p.id === this.state.selectedProvince)?.name
                        }</p>
                        <p>Quận/Huyện: {
                        districts.find(d => d.id === this.state.selectedDistrict)?.name
                        }</p>
                    </div>)}
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
