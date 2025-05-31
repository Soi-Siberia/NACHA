import './Menu.scss';
import Menuheader from '../../components/layout/menuheader';
import Footer from '../../components/Footer/Footer';
import ParallaxSection from '../../components/Ui/ParallaxSection'
import LogoNacha from '../../assets/images/logo.jpg'
import QRthanhtoan from '../../assets/images/qrthanhtoan.png'

const menuData = [
    {
        title: "Kem",
        items: [
            { name: "Trà Sữa Vị Vương", price: "15K" },
            { name: "Trà Sữa Kê", price: "15K" },
            { name: "Trà Long Kikiềldo", price: "15K" },
            { name: "Trà Dau Hokkaido", price: "19K" },
            { name: "Trà Sữa Vị Matcha", price: "19K" },
            { name: "Trà Sữa Sucola", price: "19K" },
            { name: "Trà Sữa Mươi", price: "15K" },
            { name: "Trà Sữa NácHa", price: "19K" },
            { name: "Trà Sữa Gấp Đôi", price: "(add topping)" },
        ]
    },
    {
        title: "Kem Trứng Khế",
        items: [
            { name: "Trà Sữa Kem Trứng", price: "26K" },
            { name: "O Long Kem Trứng Khê", price: "36K" },
            { name: "Hokkaido Kem Trứng Khê", price: "33K" },
            { name: "Matcha Kem Trứng Khê", price: "20K" },
            { name: "Trà Tao Sương Sáo", price: "26K" },
        ]
    },
    {
        title: "Sữa Tươi",
        items: [
            { name: "Sữa Tươi O Long", price: "22K" },
            { name: "Sữa Tươi Thái Kanh", price: "29K" },
            { name: "Sữa Tươi Matcha", price: "23K" },
            { name: "Sữa Tươi Socola", price: "23K" },
            { name: "Sữa Tươi Khoan", price: "25K" },
        ]
    },
    {
        title: "Trà Trái Cây",
        items: [
            { name: "Trà Đào Đỏ", size: "L", price: "24K" },
            { name: "Trà Dau", size: "L", price: "24K" },
            { name: "Trà Vải", size: "L", price: "26K" },
            { name: "Trà DauViệt Quất", size: "L", price: "26K" },
            { name: "Trà Trái Gây Nhiệt Đại", size: "L", price: "26K" },
            { name: "Trà Táo Sương Sáo", size: "", price: "28K" },
        ]
    },
    {
        title: "Trà Nguyên Vị",
        items: [
            { name: "Hồng Trà", size: "L", price: "22K" },
            { name: "Nguyên Vị", size: "L", price: "24K" },
            { name: "O Long Nguyên", size: "L", price: "24K" },
            { name: "Lục Trà Nguyên Vị", size: "L", price: "22K" },
        ]
    },
    {
        title: "Topping",
        items: [
            { name: "Trân Châu Dương Đen", price: "5K" },
            { name: "Thạch Trà Kanh", price: "3K" },
            { name: "Thạch Đâu", price: "4K" },
            { name: "Thạch Cafe", price: "4K" },
            { name: "Thạch Sương Sáo", price: "4K" },
        ]
    },
    {
        title: "Matcha Latte",
        items: [
            { name: "Matcha Latte", size: "M", price: "24K" },
            { name: "Matcha Latte", size: "L", price: "27K" },
        ]
    },
];

const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        console.log("-----------------------------------------------------------")
        console.log("--> giá trị i: ", i, "Và --> size: ", size, " --> Và arr: ", arr)
        console.log("-----------------------------------------------------------")
        result.push(arr.slice(i, i + size));
    }
    // console.log("==> giá trị result: ", result)
    return result;
};

const Menu = (props) => {
    const columns = chunkArray(menuData, 3); // 3 columns

    return (
        <>
            <Menuheader />
            <ParallaxSection
                title="Menu Menu Menu"
                backgroudImage="https://picsum.photos/800/400"
                scrollTop={props.scrollTop}
            />
            <div className='menu-container-full'>
                <div className="menu-container container">
                    <div className="menu-grid">
                        {columns.map((columnSections, colIdx) => (
                            <div className="menu-column" key={colIdx}>
                                {/* 👉 THÊM PHẦN QR + LOGO Ở CỘT THỨ 3 */}
                                {colIdx === 2 && (
                                    <div className='selaction-top'
                                        style={{
                                            width: '100%',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <div className="qr-code">
                                            <img src={QRthanhtoan}
                                                alt="QR Code"
                                                style={{
                                                    width: '80%',
                                                    height: '80%'
                                                }}
                                            />
                                        </div>
                                        <div className="logo-circle"
                                            style={{ paddingTop: '30px' }}
                                        >
                                            <img src={LogoNacha}
                                                style={{
                                                    width: '80%',
                                                    height: '80%',
                                                    borderRadius: '100%'
                                                }}
                                                alt="Nacha Logo"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* CÁC MỤC MENU */}
                                {columnSections.map((section, secIdx) => (
                                    <div className="menu-section" key={secIdx}>
                                        <h3 className="section-title">{section.title}</h3>
                                        {section.items.map((item, itemIdx) => (
                                            <div className="menu-item" key={itemIdx}>
                                                {item.name && <span className="item-name">{item.name}</span>}
                                                {item.size && <span className="item-size">{item.size}</span>}
                                                {item.price && <span className="item-price">{item.price}</span>}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Menu;
