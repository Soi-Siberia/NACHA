import { useState } from "react";
import "./LocationHomePage.scss";
import imgMap from "../../assets/images/map.jpg"


const LocationHomePage = ({ isMap = false }) => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [showResults, setShowResults] = useState(false);

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

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedDistrict('');
    setShowResults(false);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setShowResults(false);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const filteredDistricts = districts.filter(
    district => district.provinceId === selectedProvince
  );

  const filteredAddresses = addresses.filter(
    addr =>
      addr.provinceId === selectedProvince &&
      addr.districtId === selectedDistrict
  );

  return (
    <div className="selection-container-full">
      <div className="container selection-container">
        <h2 className="title">HỆ THỐNG CỬA HÀNG</h2>

        <div className="select-group">
          <label htmlFor="province">Chọn tỉnh/thành phố:</label>
          <select
            id="province"
            value={selectedProvince}
            onChange={handleProvinceChange}
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
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="select-box"
            disabled={!selectedProvince}
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
          onClick={handleShowResults}
          disabled={!selectedProvince || !selectedDistrict}
        >
          Hiển thị kết quả tìm kiếm
        </button>

        {showResults && (
          <>
            <div className="results-section">
              <h3>Kết quả:</h3>
              <p>
                <strong>Tỉnh/Thành phố:</strong>{" "}
                {provinces.find(p => p.id === selectedProvince)?.name}
              </p>
              <p>
                <strong>Quận/Huyện:</strong>{" "}
                {districts.find(d => d.id === selectedDistrict)?.name}
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
              {isMap && (
                <div className="stote-Map">
                  <img src={imgMap} alt="mapIMG"></img>
                </div>
              )}

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LocationHomePage;
